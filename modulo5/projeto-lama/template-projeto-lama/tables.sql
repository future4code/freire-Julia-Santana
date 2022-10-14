 id: VARCHAR(255)  PRIMARY KEY,
 name: VARCHAR(255) NOT NULL
 email: VARCHAR(255), não-nulo e único
 password: VARCHAR(255) e não-nulo
 role: ENUM “NORMAL” ou “ADMIN” com padrão “NORMAL” não-nulo