let jogadorAtual = 'X';
let jogoAtivo = true;

function makeMove(cell) {
  if (cell.innerText === '' && jogoAtivo) {
    cell.innerText = jogadorAtual;
    cell.style.backgroundColor = '#5728FF';
    checkResult();
    jogadorAtual = (jogadorAtual === 'X') ? 'O' : 'X';
  }
}

function checkResult() {
  const quadrados = document.getElementsByClassName('cell');
  const condicoesVencedoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < condicoesVencedoras.length; i++) {
    const [a, b, c] = condicoesVencedoras[i];
    if (quadrados[a].innerText !== '' &&
        quadrados[a].innerText === quadrados[b].innerText &&
        quadrados[a].innerText === quadrados[c].innerText) {
      jogoAtivo = false;
      quadrados[a].style.backgroundColor = '#AF86FF';
      quadrados[b].style.backgroundColor = '#AF86FF';
      quadrados[c].style.backgroundColor = '#AF86FF';
      break;
    }
  }
}

function resetBoard() {
  const quadrados = document.getElementsByClassName('cell');
  for (let i = 0; i < quadrados.length; i++) {
    quadrados[i].innerText = '';
    quadrados[i].style.backgroundColor = '#C6C1FF';
  }
  jogoAtivo = true;
  jogadorAtual = 'X';
}