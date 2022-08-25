-- questão 1a 
-- resposta:  a chave que permite a referência a registros oriundos de outras tabelas
-- questão 1b
-- resposta:

CREATE TABLE Filme (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    Filme_id VARCHAR(255),
    FOREIGN KEY (Filmee_id) REFERENCES Filme(id)
);

INSERT INTO Filme (id, comment, rate, Filme_id) 
VALUES (
		"001",
    "Muito bom!",
    7,
		"004"
);