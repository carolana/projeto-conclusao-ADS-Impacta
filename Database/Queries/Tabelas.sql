CREATE TABLE USUARIOS (
ID int NOT NULL AUTO_INCREMENT,
Nome varchar(100) NOT NULL,
Email varchar(60) NOT NULL,
Senha varchar (50) NOT NULL,
PRIMARY KEY (ID)
)

CREATE TABLE PRODUTOS (
ID int NOT NULL AUTO_INCREMENT,
Nome varchar(70) NOT NULL,
Tipo varchar (40) NOT NULL,
Tamanho int NOT NULL,
Quantidade int NOT NULL,
Preco double NOT NULL,
PRIMARY KEY (ID)
)