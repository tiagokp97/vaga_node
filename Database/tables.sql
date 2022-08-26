CREATE TABLE
  IF NOT EXISTS partidas (
    id BIGSERIAL PRIMARY KEY,
    jogador1_id INTEGER NOT NULL,
    jogador2_id INTEGER NOT NULL,
    pontos_jogador1 INTEGER NOT NULL,
    pontos_jogador2 INTEGER NOT NULL,
    duracao INTEGER NOT NULL
  );

CREATE TABLE
  IF NOT EXISTS jogador (
    id BIGSERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    idade INTEGER NOT NULL
  )