import { drawPiece, updatePiece, updateMovement, endTable, checkGameOver, checkScore } from './pieces.js'

export let table = document.querySelector('.wrapper__grid')
export const currentFigure = document.querySelector('.wrapper__figure')

let lastRefresh = 0

export var figureSpeed = 3
export var stop = false

function main(currentTime) {
  if(!stop){
    window.requestAnimationFrame(main)
  }
  
  //Difference between the current refresh time and the last one
  let sinceRefresh = (currentTime - lastRefresh) / 1000
  /* 
     1/FIGURE_SPEED means that it will do the animation if the difference
     of time is 1 second or minus 
  */ 
  if( sinceRefresh < 1 / figureSpeed) return
  lastRefresh = currentTime

  update()
  drawPiece()
}

function update() {
  endTable()
  updatePiece()
  updateMovement()
  checkScore()
  if(checkGameOver()) {
    window.location.reload()
  }
}

window.requestAnimationFrame(main)

export function changeSpeedRefresh(newSpeed) {
  figureSpeed = newSpeed
}

export function pause(condition){
    stop = condition
}