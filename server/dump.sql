CREATE DATABASE mi_cripto

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password TEXT NOT NULL,
  description VARCHAR(500),
  avatar_url TEXT,
  avatar_path TEXT
);
