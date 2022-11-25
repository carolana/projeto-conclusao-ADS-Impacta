package br.com.projetoconclusaoADSImpacta.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.projetoconclusaoADSImpacta.modelo.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	

}
