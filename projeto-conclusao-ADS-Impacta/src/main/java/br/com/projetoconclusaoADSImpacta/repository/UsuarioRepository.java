package br.com.projetoconclusaoADSImpacta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import br.com.projetoconclusaoADSImpacta.modelo.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	
	@Query("select u from Usuario u where u.email = :usuario AND u.senha = :senha")
	public Usuario buscarLogin (String usuario, String senha);
	
	
	
}
