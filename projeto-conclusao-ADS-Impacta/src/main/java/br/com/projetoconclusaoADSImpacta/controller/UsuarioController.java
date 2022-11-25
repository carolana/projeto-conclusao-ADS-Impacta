package br.com.projetoconclusaoADSImpacta.controller;

import java.net.URI;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.bind.BindResult;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.util.UriComponentsBuilder;

import br.com.projetoconclusaoADSImpacta.controller.dto.UsuarioDto;
import br.com.projetoconclusaoADSImpacta.form.UsuarioForm;
import br.com.projetoconclusaoADSImpacta.modelo.Usuario;
import br.com.projetoconclusaoADSImpacta.repository.UsuarioRepository;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@PostMapping
	public ResponseEntity<UsuarioDto> cadastrar (@RequestBody UsuarioForm usuarioForm, UriComponentsBuilder uriBuilder) {	
		
		Usuario usuario = usuarioForm.converter();	
		usuarioRepository.save(usuario);
		URI uri = uriBuilder.path("/usuario/{id}").buildAndExpand(usuario.getId()).toUri();
		
		return ResponseEntity.created(uri).body(new UsuarioDto(usuario));
	}
	

}
