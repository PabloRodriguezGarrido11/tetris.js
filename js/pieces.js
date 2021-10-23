import { table, currentFigure, changeSpeedRefresh, stopp} from './main.js'
import { getMovement } from './controls.js'
import { getFigure } from './figures.js'
import { createMatrix } from './utils.js'
import { getRandomColor } from './colors.js'

let color = getRandomColor()
export const ROWS = 21
export const COLUMNS = 21
export const coords = {r: 0, c: 10}

export var piece = getFigure()



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

  if(endTable()) {
    setFigure()
    piece = getFigure()
    color = getRandomColor()
    coords.r = 0 
    coords.c = 10
  } 
}

export function updatePiece() {
  sweepTable()
  currentFigure.innerHTML = ''
  coords.r += 1
}

export function updateMovement() {
  let movement = getMovement()
  coords.r += movement.r
  coords.c += movement.c
  changeSpeedRefresh(2)
}

export function rotatePiece() {
  let newPiece = createMatrix(piece.length, piece[0].length)
  for (let i = 0; i < piece.length; i++) {
    for (let j = 0; j < piece[0].length; j++){
      newPiece[j][piece.length - 1 - i] = piece[i][j]    
    }
  }
  piece = newPiece
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

export function endTable(){
  let pieces = document.getElementsByClassName('unset')
  let piecesUnset = [...pieces]
  return piecesUnset.some((figure)=>{
      return parseInt(figure.style.gridRowStart) + 1 >  ROWS | collision(parseInt(figure.style.gridRowStart) + 1 , parseInt(figure.style.gridColumnStart))
    }) 
}

function setFigure() {
  let pieces = document.getElementsByClassName('unset')
  let piecesUnset = [...pieces]
  piecesUnset.forEach((piece)=>{
    piece.classList.remove('unset')
    piece.classList.add('set')
  })
}

function sweepTable() {
  let elements = document.getElementsByClassName('piece')
  let pieces = [...elements]
  pieces.forEach((piece)=>{
    if(piece.classList.contains('unset')){
      piece.remove()
    }
  })
}

function collision(row, column) {
  let elements = document.getElementsByClassName('set')
  let pieces = [...elements]
  return pieces.some((piece)=>{
    return parseInt(piece.style.gridRowStart) == row && parseInt(piece.style.gridColumnStart) == column 
  })
}

export function moveRight() {
  let pieces = document.getElementsByClassName('unset')
  let piecesUnset = [...pieces]
  return piecesUnset.some((figure)=>{
      return parseInt(figure.style.gridColumnStart) + 1 > COLUMNS | collision(parseInt(figure.style.gridRowStart) , parseInt(figure.style.gridColumnStart)+1)
             | collision(parseInt(figure.style.gridRowStart) + 1, parseInt(figure.style.gridColumnStart)+1)

    }) 
}

export function moveLeft() {
  let pieces = document.getElementsByClassName('unset')
  let piecesUnset = [...pieces]
  return piecesUnset.some((figure)=>{
      return parseInt(figure.style.gridColumnStart) - 1 == 0 | collision(parseInt(figure.style.gridRowStart) , parseInt(figure.style.gridColumnStart)-1)
             | collision(parseInt(figure.style.gridRowStart) + 1, parseInt(figure.style.gridColumnStart)-1)
  }) 
}

export function moveDown() {
  let pieces = document.getElementsByClassName('unset')
  let piecesUnset = [...pieces]
  return piecesUnset.some((figure)=>{
      return parseInt(figure.style.gridRowStart) + 1 == ROWS | collision(parseInt(figure.style.gridRowStart) + 2, parseInt(figure.style.gridColumnStart))
  })
}

export function checkGameOver() {
  let elements = document.getElementsByClassName('set')
  let pieces = [...elements]
  return pieces.some((piece)=>{
    return parseInt(piece.style.gridRowStart) == 1
  })
}