package br.com.projetoconclusaoADSImpacta;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.projetoconclusaoADSImpacta.modelo.Usuario;
import br.com.projetoconclusaoADSImpacta.repository.UsuarioRepository;

@Service
public class UsuarioService {
	
	@Autowired
	UsuarioRepository usuarioRepository;
	
	public Usuario loginUsuario (String usuario, String senha) {
		
		Usuario usuarioLogin = usuarioRepository.buscarLogin(usuario, senha);
		
		return usuarioLogin;
	}
	
}
