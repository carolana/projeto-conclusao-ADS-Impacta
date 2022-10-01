package br.com.projetoconclusaoADSImpacta.controller.dto;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

import br.com.projetoconclusaoADSImpacta.modelo.Produto;

public class ProdutoDto {
	
	private Long id;
	private String nome;
	private String descricao;
	private int quantidade;
	private BigDecimal preco;
	
	public ProdutoDto (Produto produto) {
		this.id = produto.getId();
		this.nome = produto.getNome();
		this.descricao = produto.getDescricao();
		this.quantidade = produto.getQuantidade();
		this.preco = produto.getPreco();
	}	
	
	public Long getId() {
		return id;
	}
	public String getNome() {
		return nome;
	}
	public String getDescricao() {
		return descricao;
	}
	public int getQuantidade() {
		return quantidade;
	}
	public BigDecimal getPreco() {
		return preco;
	}

	public static List<ProdutoDto> converter(List<Produto> produtos) {
		return produtos.stream().map(ProdutoDto::new).collect(Collectors.toList());
	}
	
	
}
