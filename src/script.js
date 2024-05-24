const colorB = document.getElementById('black');
colorB.style.backgroundColor = 'black';
const color1 = document.getElementById('color1');
color1.style.backgroundColor = 'pink';
const color2 = document.getElementById('color2');
color2.style.backgroundColor = 'yellow';
const color3 = document.getElementById('color3');
color3.style.backgroundColor = 'tomato';


const colorPalette = document.getElementById('color-palette');
colorPalette.addEventListener('click', changeSelect);

function changeSelect(eventoDeOrigem) {
  const atualSelecionado = document.querySelector('.selected');
  atualSelecionado.classList.remove('selected');
  eventoDeOrigem.target.classList.add('selected');
}

const pixelBoard = document.getElementById('pixel-board');

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

pixelBoard.addEventListener('click', eventoBubbling);
function eventoBubbling(pixelClicado) {
  const pixelAtual = pixelClicado.target;
  const atualSelecionado = document.querySelector('.selected');
  const corAtualSelecionado = atualSelecionado.style.backgroundColor;
  if (pixelClicado.target.className === 'pixel') {
    pixelAtual.style.backgroundColor = corAtualSelecionado;
  }
}

const botao = document.getElementById('clear-board');
botao.addEventListener('click', clearBoard);
function clearBoard() {
  const pixels = document.getElementsByClassName('pixel');
  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].style.backgroundColor = 'white';
  }
}