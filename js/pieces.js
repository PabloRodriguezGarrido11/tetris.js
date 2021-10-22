import { table, currentFigure } from './main.js'
import { getMovement } from './controls.js'
import { getFigure } from './figures.js'
import { getRandomColor } from './utils.js'

const coords = {r: 0, c: 10}
const color = getRandomColor()
const ROWS = 21
const COLUMNS = 21

let piece = getFigure()

export function drawPiece() {
  piece.forEach((x, r) => {
    for (let c = 0; c < x.length; c++) {
      if(x[c] > 0){
        let cell = document.createElement('div')
        let figure = document.createElement('div')
        cell.style.gridRowStart = r + coords.r
        cell.style.gridColumnStart = c + coords.c
        figure.style.gridRowStart = r + 2
        figure.style.gridColumnStart = c + 2
        cell.id = c + (4*r)
        cell.style.background = color
        figure.style.background = color
        cell.classList.add('piece', 'unset')
        figure.classList.add('piece')
        table.appendChild(cell)
        currentFigure.appendChild(figure)
      }
    }
  }); 
}

export function updatePiece() {
  table.innerHTML = ''
  currentFigure.innerHTML = ''
  coords.r += 1    
}

export function updateMovement() {
  let movement = getMovement()
  coords.r += movement.r
  coords.c += movement.c
}

export function rotatePiece() {
  let newPiece = createMatrix(piece.length, piece[0].length)
  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[0].length; j++){
      newPiece[j][piece.length - 1 - i] = piece[i][j]    
    }
  }
  piece = newPiece
  console.log(piece)
}



export function createCells() {
  table.innerHTML = ''
  currentFigure.innerHTML = ''
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      let cell = document.createElement('div')
      cell.style.gridRowStart = i
      cell.style.gridColumnStart = j
      cell.classList.add('piece')
      table.appendChild(cell)
    }
  }
}

