import {rotatePiece} from './pieces.js'

let movement = {r: 0, c: 0}
let lastMovement = {r: 0, c: 0}

window.addEventListener('keydown', (event) => {
  switch (event.key) {
    case "ArrowLeft":
      movement = {r: 0, c: -1}
      break;
    case "ArrowRight":
      movement = {r: 0, c: 1}
      break;
    case "ArrowDown":
      movement = {r: 1, c: 0}
      break;
    case " ":
      rotatePiece()
      break;
    default:
      movement = {r: 0, c: 0}
      break;
  }
})


export function getMovement() {
    lastMovement = movement
    let move = movement
    movement = {r: 0, c: 0}
    return move
}

