import { drawPiece, updatePiece, updateMovement, createCells } from './pieces.js'

export const table = document.querySelector('.wrapper__grid')
export const currentFigure = document.querySelector('.wrapper__figure')

let lastRefresh = 0

const FIGURE_SPEED = 3

function main(currentTime) {

  window.requestAnimationFrame(main)
  //Difference between the current refresh time and the last one
  let sinceRefresh = (currentTime - lastRefresh) / 1000
  /* 
     1/FIGURE_SPEED means that it will do the animation if the difference
     of time is 1 second or minus 
  */ 
  if( sinceRefresh < 1 / FIGURE_SPEED) return
  lastRefresh = currentTime

  update()
  drawPiece()
}

function update() {
  // createCells()
  updatePiece()
  updateMovement()
}

window.requestAnimationFrame(main)


