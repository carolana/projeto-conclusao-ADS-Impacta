package com.projetoFinal.Backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetoFinal.Backend.Model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long> {

}
