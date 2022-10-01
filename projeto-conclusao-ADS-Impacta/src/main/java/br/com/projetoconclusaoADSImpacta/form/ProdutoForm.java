package br.com.projetoconclusaoADSImpacta.form;

import java.math.BigDecimal;

import br.com.projetoconclusaoADSImpacta.modelo.Produto;

public class ProdutoForm {
	
	private Long id;
	private String nome;
	private String descricao;
	private int quantidade;
	private BigDecimal preco;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public int getQuantidade() {
		return quantidade;
	}
	public void setQuantidade(int quantidade) {
		this.quantidade = quantidade;
	}
	public BigDecimal getPreco() {
		return preco;
	}
	public void setPreco(BigDecimal preco) {
		this.preco = preco;
	}
	public Produto converter() {
		
		return new Produto(id, nome, descricao, quantidade, preco);
	}
	
	
	
}
