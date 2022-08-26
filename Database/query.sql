SELECT
  j1.nome AS jogador1,
  j2.nome AS jogador2,
  count(j2.nome) as partidas
FROM
  partidas AS p
  INNER JOIN jogador AS j1 ON j1.id = p.jogador1_id
  INNER JOIN jogador AS j2 ON j2.id = p.jogador2_id
WHERE
  p.duracao > 90
  AND p.pontos_jogador1 + p.pontos_jogador2 > 30
  group by (j1.nome, j2.nome)
  having count(*) > 1
