package br.com.projetoconclusaoADSImpacta.repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import br.com.projetoconclusaoADSImpacta.modelo.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
	
	@Transactional
	@Modifying
	@Query("UPDATE Produto p SET"
			+ " p.nome = :#{#produto.nome},"
			+ " p.descricao = :#{#produto.descricao},"
			+ " p.quantidade = :#{#produto.quantidade},"
			+ " p.preco = :#{#produto.preco}"
			+ " WHERE p.id = :#{#produto.id}")
    int update(@Param("produto") Produto produto);
	
}

//nome, descricao, quantidade, preco