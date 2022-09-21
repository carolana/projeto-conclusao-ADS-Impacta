package br.com.projetoconclusaoADSImpacta.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.projetoconclusaoADSImpacta.modelo.Produto;

public interface ProdutoRepository extends JpaRepository<Produto, Long> {
	
	
}
