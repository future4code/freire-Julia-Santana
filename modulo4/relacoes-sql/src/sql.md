SELECT `freire-julia-santana`;
-- exercicio 1
 CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

SHOW DATABASES;


-- RESPOSTA DA LETRA a: o comando VARCHAR(255) significa
-- que ele so aceita ate 255 caracteres.
 -- O comando Date serve para colocarmos data
  
  -- RESPOSTA QUESTÃO b: SHOW DATABASES, exibe todos
  -- os bancos de dados disponiveis no sistema
  -- SHOW TABLES, deu erro quando foi executado
  -- Resposta questão c
  DESCRIBE Actor;
  -- Ao executar o comando DESCRIBE Actor deu erro
  
  -- exercicio 2 
  INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"

  );
  
 -- exercicio 2c 
  INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- exercicio 2d

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
-- exercicio 2e

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  71933333,
  "1979-03-26", 
  "female"
);

-- exercicio 2f

  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
  "006",
  "Larissa Manoel",
  100000.00,
  "28-12-2000",
  "female"
  );

-- exercicio 2g
  
  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
  "007",
  "Juliana Paes",
  "23-03-1979",
  100000.00,
  "female"
  );
  
  -- exercicio 3a
  
  SELECT * FROM Actor;
-- resposta pergunta 3 letra a: o código a cima, seleciona a tabela
-- Actor depoid filtra todos os atores que começam com a letra
-- a ou j, e que tenha um sálario maior que 300000.
  
  -- exercicio 3b
  
  SELECT salary  from Actor WHERE name = "Tony Ramos";
  DESCRIBE Actor;
  
  -- exercicio 3c
  
  SELECT gender from Actor WHERE gender = "invalid";
  -- não apareceu nada, poisnão tem nenhum gender com o 
  -- valor invalido;
  
  -- exercicio 3d
  
  SELECT id  from Actor WHERE id = "002";
  
  -- o erro aconteceu porque colocou a palavra nome depois do id;
  
  -- exercicio 3e
  
  SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

-- exercicio 4
SELECT * FROM Actor
WHERE salary > 35000000;

SELECT * FROM Actor
WHERE (name LIKE "G%" OR name LIKE "g%");

SELECT * FROM Actor
WHERE (name LIKE "G%" OR name LIKE "g%" OR name LIKE "A%" OR name LIKE "a%") AND salary >35000000 AND salary = 90000000;

-- exercicio 5

 CREATE TABLE Filme (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    sinopse TEXT,
    Data_de_Lancamento DATE NOT NULL,
    avaliacao FLOAT NOT NULL
);

INSERT INTO Filme (id, name, sinopse, Data_de_Lancamento, avaliacao)
  VALUES(
'001',

 'Matrix',
 
 'Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
 Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos',
 
 '2010-06-01',

 '7'
  );
  
  INSERT INTO Filme (id, name, sinopse, Data_de_Lancamento, avaliacao)
  VALUES(
'002',

 'Doce de mãe',

 'Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões.
 A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
 empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela',

 '2012-12-27',

 '10'  
  );
  
  INSERT INTO Filme (id, name, sinopse, Data_de_Lancamento, avaliacao)
  VALUES(
   '003',

 'Dona Flor e Seus Dois Maridos',

 'Dona Flor é uma sedutora professora de culinária casada com Vadinho,
 que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.',

 '2017-11-02',

'8'


  );
  
  INSERT INTO Filme (id, name, sinopse, Data_de_Lancamento, avaliacao)
  VALUES(
   '004',

 'Truque de Mestre',

 'Um grupo de ilusionistas encanta o público com suas mágicas e também rouba bancos em outro continente,
 distribuindo a quantia para os próprios espectadores. O agente do FBI Dylan Hobbs está determinado a 
 capturá-los e conta com a ajuda de Alma Vargas, uma detetive da Interpol, e também de Thaddeus Bradley, 
 um veterano desmistificador de mágicos que insiste que os assaltos são realizados a partir de disfarces e
 jogos envolvendo vídeos.
',

 '2013-07-05',
 
'10'
  );
  
  -- exercicio 6
  SELECT id, title, rating FROM Filme WHERE id = "004";
  
  SELECT * FROM Filme WHERE name = "Truque de Mestre";
  
  SELECT id, title, synopsis FROM Filme WHERE rating > 7;
  
  -- exercicio 7
  
   SELECT * FROM Filme
WHERE (name LIKE "Vida%" );

SELECT * FROM Movie
WHERE title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%";
      
      SELECT * FROM MOVIE
WHERE release_date < "2020-05-04";

SELECT * FROM MOVIE
WHERE release_date < "2020-05-04" AND 
      (title LIKE "%TERMO DE BUSCA%" OR
      synopsis LIKE "%TERMO DE BUSCA%") AND rating > 7;

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);
ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

-- resposta da pergunta 1a:
-- ALTER TABLE Actor DROP COLUMN salary; esse código adiciona uma coluna de salario
-- a tabela do Actor

-- resposta da pergunta 1b
-- ALTER TABLE Actor CHANGE gender sex VARCHAR(6); esse código adiciona o 
-- uma coluna que contenha o gênero sexual dos atores.alter

-- resposta da pergunta 1c 
-- ALTER TABLE Actor CHANGE gender gender VARCHAR(255); esse código adiciona outra 
-- tabela de gênero sexual.

-- resposta da pergunta 1d

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- resposta da questão 2a 
-- Escreva uma query que atualize o nome e a data de nascimento do ator com o id 003
UPDATE Actor
SET 
	name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";

-- resposta da questão 2b
-- Escreva uma query que atualize o nome da atriz Juliana Paes para JULIANA PAES. Então, escreva outra query para voltar ao nome anterior.
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE id = "007";

-- resposta da questão 2c
--  Escreva uma query que atualize todas as informações do ator com o id 005
UPDATE Actor 
SET name = "Paulo Santana",
birth_date = "20-03-1990",
salary = 300000,
gender = "male"
WHERE id = "005";

-- resposta 2d
-- *Escreva uma query em que você tente atualizar um dado da tabela que não existe (com um id inválido, por exemplo). Teste, anote e explique o resultado;
UPDATE Actor 
SET name = "Lucas",
birth_date = "20-04-1994",
salary = 100000,
gender = "male"
WHERE id ="100";

UPDATE Actor
 SET name = "Lucas",
 birth_date = "20-04-1994",
 salary = 100000,
 gender = "male"
 WHERE id ="100";
 -- Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right
 -- syntax to use near 'WHERE id ="100"' at line 6	0.156 sec.
 
 -- resposta exercicio 3a
 DELETE  FROM Actor WHERE name = "Fernanda Montenegro";
 
 -- resposta exercicio 3b
 DELETE FROM Actor WHERE gender = "male" AND
	salary > 1000000;
    
-- resposta do exercicio 4a
--  Escreva uma query que pegue o maior salário de todos os atores e atrizes

SELECT MAX(salary)
FROM Actor;

-- resposta exercicio 4b
-- Escreva uma query que pegue o menor salário das atrizes
SELECT MIN(salary)
FROM Actor;

-- resposta exercicio 4c
-- Escreva uma query que pegue a quantidade de atrizes
SELECT COUNT(*) FROM Actor WHERE gender = "female";
-- resposta exercicio 4d
-- *Escreva uma query que pegue a soma de todos os salários*
SELECT SUM(idade)
FROM Actor;

-- resposta exercicio 5a
-- Releia a última query. Teste-a. Explique o resultado com as suas palavras
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- resposta exercicio 5b
-- Faça uma query que retorne somente o id e o nome dos atores em ordem decrescente alfabética
SELECT id, name FROM Actor
ORDER BY name DESC;

-- resposta exercicio 5C
--  Faça uma query que retorne todos os atores ordenados pelo salário
SELECT * FROM Actor
ORDER BY salary;

-- resposta exercicio 5d
-- Faça uma query que retorne os atores com os três maiores salarios

SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;

-- resposta 5e 
--  Faça uma query que retorne a média de salário por gênero
 SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
 
 -- resposta 6a 
 -- Altere a tabela de Movie e adicione um novo parâmetro: playing_limit_date que indique a data limite em que o filme será passado no cinema. 
 
 ALTER TABLE Movie ADD playing_limit_date DATE;
 
 -- resposta 6b 
 -- *Altere a tabela de `Movie` para que o parâmetro `rating` possa aceitar valores não inteiros, como, por exemplo, uma avaliação `8.5`.*
SELECT MIN(salary) FROM Actor WHERE gender = "female";

-- resposta 6c
-- *Atualize dois filmes de tal forma que tenhamos um que ainda esteja em cartaz e um que já tenha saído*
SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- reposta cd
-- *Delete algum dos filmes, mas guarde o id. Tente fazer uma query para atualizar a sinopse desse filme que você acabou de deletar (usando o mesmo id). Anote o resultado e explique.*
    SELECT SUM(salary) FROM Actor;

-- questao 1
 -- questão 1a:Explique o que é uma chave estrangeira
 -- resposta: é a chave que pega informaçoes originais
 -- de outras tabelas
 
 -- qustao 1b: Crie a tabela e, ao menos, uma avaliação para cada um dos filmes
 -- resposta:
 CREATE TABLE Avaliacao (
 id  VARCHAR(255) PRIMARY KEY,
 comment TEXT NOT NULL,
 rate FLOAT NOT NULL,
 Filme_id VARCHAR(255),
 FOREIGN KEY (Filme_id) REFERENCES Filme(id)
 );
 
 
 INSERT INTO Avaliacao (id, comment, rate, Filme_id) 
VALUES (
       
		"001",
    "Muito bom!",
    7,
    "001"
),

(
       
		"002",
    "Muito bom!",
    7,
    "002"
),

(
       
		"003",
    "Muito bom!",
    7,
    "003"
),
(
       
		"004",
    "Muito bom!",
    7,
    "004"
);

SELECT * FROM  Avaliacao;



 -- questão 1d Altere a tabela de filmes para que ela não tenha mais uma coluna chamada rating
 -- resposta: 
  ALTER TABLE Movie DROP COLUMN rate;
  
  -- questao 1e Tente apagar um filme que possua avaliações. Anote e explique o resultado da query
  -- resposta: para apagar o filme, primeiro preciso apagar as relacoes da tabela que se relaciona com o erro,
  -- para depois apagar a tabela do filme
  
  SELECT * FROM Movie;
  
  -- exercicio 2
  CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- exercicio 2a:Explique, com as suas palavras, essa tabela
-- resposta: Uma tabela foi criada para fazer relacao com a tabela de movie, e a tabela de actor,
-- atraves da chave estrangeira a foreign key,

-- exercicio 2b: Crie, ao menos, 6 relações nessa tabela
 -- resposta

INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
		"001",
    "002",
    "003",
    "004"
);

-- exercicio 2c Tente criar uma relação com um filme ou um ator inexistente. Anote e explique o resultado da query
-- resposta: 

-- exercicio 2d Tente apagar um ator que possua uma relação nessa tabela. Anote e explique o resultado da query
-- resposta: não é possivel apagar o ator diretamente, para apagar o ator, antes é preciso apagar a tabela
-- na qual ele possue uma relação.

-- exercicio 3a Explique, com suas palavras, a query acima. O que é o operador ON?
--  resposta: permite verificar se um valor específico corresponde a algum valor presente em uma lista

-- exercicio 3b  Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
-- resposta :
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;