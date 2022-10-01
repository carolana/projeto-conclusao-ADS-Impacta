package br.com.projetoconclusaoADSImpacta.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.projetoconclusaoADSImpacta.controller.dto.ProdutoDto;
import br.com.projetoconclusaoADSImpacta.form.ProdutoForm;
import br.com.projetoconclusaoADSImpacta.modelo.Produto;
import br.com.projetoconclusaoADSImpacta.repository.ProdutoRepository;

@RestController
@RequestMapping("/produtos")
public class ProdutosController {
	
	@Autowired
	private ProdutoRepository produtoRepository;
	
	@GetMapping
	public List<ProdutoDto> listaProdutos(){
		
		List<Produto> produtos = produtoRepository.findAll();
		return ProdutoDto.converter(produtos);
	}
	
	@PostMapping
	public ResponseEntity<ProdutoDto> cadastrar (@RequestBody ProdutoForm produtoForm, UriComponentsBuilder uriBuilder) {	
		
		Produto produto = produtoForm.converter();	
		produtoRepository.save(produto);
		URI uri = uriBuilder.path("/produtos/{id}").buildAndExpand(produto.getId()).toUri();
		
		return ResponseEntity.created(uri).body(new ProdutoDto(produto));
	}
	
	@PutMapping
	public ResponseEntity<String> atualizar (@RequestBody ProdutoForm produtoForm, UriComponentsBuilder uriBuilder) {
		
		Produto produto = produtoForm.converter();
		var response = produtoRepository.update(produto);
		URI uri = uriBuilder.path("/produtos/{id}").buildAndExpand(produto.getId()).toUri();
		
		return ResponseEntity.created(uri).body(response + " Registro(s) atualizado(s)");
	}
	
	@DeleteMapping
	public ResponseEntity<String> deletar (@RequestBody ProdutoForm produtoForm, UriComponentsBuilder uriBuilder) {
		
		int registros = 0;
		Produto produto = produtoForm.converter();
		produtoRepository.deleteById(produto.getId());
		var response = produtoRepository.findById(produto.getId());
		if (response != null) {
			registros = 1;
		}

		URI uri = uriBuilder.path("/produtos/{id}").buildAndExpand(produto.getId()).toUri();
		
		return ResponseEntity.created(uri).body(registros + " Registro(s) removido(s)");
	}
}
