// mudando a cor dos elementos
const colorB = document.getElementById('black');
colorB.style.backgroundColor = 'black';
const color1 = document.getElementById('color1');
color1.style.backgroundColor = 'pink';
const color2 = document.getElementById('color2');
color2.style.backgroundColor = 'yellow';
const color3 = document.getElementById('color3');
color3.style.backgroundColor = 'tomato';

// requisito 7: clicar em uma das cores e mudar a classe dela;
// recuperando a seção que contem as cores;
const colorPalette = document.getElementById('color-palette');
// adicionando a ela o evento de clique
colorPalette.addEventListener('click', changeSelect);
// criando a função. ela irá tirar a classe do elemento que a contem e colocar no que foi clicado
// referência para classList: https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
function changeSelect(eventoDeOrigem) {
  const atualSelecionado = document.querySelector('.selected');
  atualSelecionado.classList.remove('selected');
  eventoDeOrigem.target.classList.add('selected');
}

// requisito 5: adicione à página um quadro de pixels, com 25 pixels
// recuperando a seção onde o quadro será inserido
const pixelBoard = document.getElementById('pixel-board');
// adicionando a ele os pixels
/* for (let index = 0; index < 5; index += 1) {
  const boardColumns = document.createElement('div');
  boardColumns.className = 'pixel';
  pixelBoard.appendChild(boardColumns);
  for (let i = 0; i < 5; i += 1) {
      const boardLines = document.createElement('div');
      boardLines.className = 'pixel';
      pixelBoard.appendChild(boardLines);
    }
} */

for (let i = 1; i < 6; i += 1) {
  const boardLine = document.createElement('div');
  for (let j = 1; j < 6; j += 1) {
    const boardSquare = document.createElement('div');
    boardSquare.className = 'pixel';
    boardSquare.style.backgroundColor = 'white';
    boardLine.appendChild(boardSquare);
  }
  pixelBoard.appendChild(boardLine);
}

// requisito 8: Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
// referência do uso do bubbling: https://medium.com/totvsdevelopers/event-bubbling-no-javascript-9d6a8da32854
// a seção onde o bubbling será aplicado já foi recuperada anteriormente (pixelBoard)
// será adicionado o evento à ela
pixelBoard.addEventListener('click', eventoBubbling);
// criando a função que pintará somente o pixel selecionado
function eventoBubbling(pixelClicado) {
  const pixelAtual = pixelClicado.target;
  const atualSelecionado = document.querySelector('.selected');
  const corAtualSelecionado = atualSelecionado.style.backgroundColor;
  if (pixelClicado.target.className === 'pixel') {
    pixelAtual.style.backgroundColor = corAtualSelecionado;
  }
}

// requisito 9: Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
// recuperar a seção onde o botão está
const botao = document.getElementById('clear-board');
// adicionar a ele o evento de clique
botao.addEventListener('click', clearBoard);
function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}