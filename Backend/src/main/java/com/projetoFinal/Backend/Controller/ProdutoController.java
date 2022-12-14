package com.projetoFinal.Backend.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetoFinal.Backend.Model.Produto;
import com.projetoFinal.Backend.Repository.ProdutoRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/produtos")
public class ProdutoController {
	
	@Autowired
	private final ProdutoRepository produtoRepository;
	
	public ProdutoController (ProdutoRepository produtoRepository) {
		this.produtoRepository = produtoRepository;
	}
	
	@GetMapping()
	public List<Produto> findAll() {
		return produtoRepository.findAll();
	}
	
	@GetMapping(value = "/{id}")
	public Optional<Produto> findById(@PathVariable(value="id") Long id) {
		return produtoRepository.findById(id);
	}
	
	@PostMapping()
	public Produto save(@RequestBody Produto produto) {
		return produtoRepository.save(produto);
	}
	
	@PutMapping()
	public void update(@RequestBody Produto produto) {
		 produtoRepository.save(produto);
	}
	
	@DeleteMapping()
	public void delete(@RequestBody Produto produto) {
		Long id = (long) produto.getID();
		produtoRepository.deleteById(id);
	}

}
