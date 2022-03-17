let rafa = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
let Pedro = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
let rael = { nome: "Rafa", vitorias: 2, empates: 1, derrotas: 1, pontos: 0 };
let jogadores = [rafa, Pedro, rael];

function adicionarLinha() {
  let input = document.getElementById("nomeInput");
  let nome = input.value;
  let novoJogador = {
    nome: nome,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,
  };
  jogadores.push(novoJogador);
  exibeJogadores(jogadores);
}

for (let j = 0; j < jogadores.length; j++) {
  jogadores[j].pontos = calculaPontos(jogadores[j]);
}

function calculaPontos(jogador) {
  let pontos = jogador.empates + jogador.vitorias * 3;
  return pontos;
}

function exibeJogadores(jogadores) {
  let elemento = "";
  for (let i = 0; i < jogadores.length; i++) {
    elemento += `<tr><td>${jogadores[i].nome}</td>`;
    elemento += `<td>${jogadores[i].vitorias}</td>`;
    elemento += `<td>${jogadores[i].empates}</td>`;
    elemento += `<td>${jogadores[i].derrotas}</td>`;
    elemento += `<td>${jogadores[i].pontos}</td>`;
    elemento += `<td><button onClick='adicionarVitoria(${i})'>Vitória</button></td>`;
    elemento += `<td><button onClick='adicionarEmpate(${i})'>Empate</button></td>`;
    elemento += `<td><button onClick='adicionarDerrota(${i})'>Derrota</button></td>`;
    elemento += " </tr>";
  }
  let tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}
exibeJogadores(jogadores);

function adicionarVitoria(i) {
  let jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadores(jogadores);
}
function adicionarEmpate(i) {
  let jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadores(jogadores);
}
function adicionarDerrota(i) {
  let jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadores(jogadores);
}
