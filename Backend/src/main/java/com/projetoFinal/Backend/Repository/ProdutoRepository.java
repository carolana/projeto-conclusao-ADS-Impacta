package com.projetoFinal.Backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.projetoFinal.Backend.Model.Produto;

import jakarta.transaction.Transactional;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {
	
	/*
	 * @Transactional
	 * 
	 * @Modifying
	 * 
	 * @Query("UPDATE Produto p SET" + " p.nome = :#{#produto.nome}," +
	 * " p.tipo = :#{#produto.tipo}," + " p.tamanho = :#{#produto.tamanho}," +
	 * " p.quantidade = :#{#produto.quantidade}," + " p.preco = :#{#produto.preco}"
	 * + " WHERE p.id = :#{#produto.id}") void update(@Param("produto") Produto
	 * produto);
	 */

}
