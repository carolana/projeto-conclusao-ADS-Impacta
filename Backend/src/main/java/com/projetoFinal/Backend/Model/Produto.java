package com.projetoFinal.Backend.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "PRODUTOS")
public class Produto {
	
	@Id
	@Column(name="ID")
	private int ID;
	@Column(name="Nome")
	private String Nome;
	@Column(name="Tipo")
	private String Tipo;
	@Column(name="Tamanho")
	private int Tamanho;
	@Column(name="Quantidade")
	private int Quantidade;
	@Column(name="Preco")
	private double Preco;
	
	public int getID() {
		return ID;
	}
	public void setID(int iD) {
		ID = iD;
	}
	public String getNome() {
		return Nome;
	}
	public void setNome(String nome) {
		Nome = nome;
	}
	public String getTipo() {
		return Tipo;
	}
	public void setTipo(String tipo) {
		Tipo = tipo;
	}
	public int getTamanho() {
		return Tamanho;
	}
	public void setTamanho(int tamanho) {
		Tamanho = tamanho;
	}
	public int getQuantidade() {
		return Quantidade;
	}
	public void setQuantidade(int quantidade) {
		Quantidade = quantidade;
	}
	public double getPreco() {
		return Preco;
	}
	public void setPreco(double preco) {
		Preco = preco;
	}

}
