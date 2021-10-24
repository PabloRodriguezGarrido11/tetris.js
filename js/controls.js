import { rotatePiece, coords, ROWS, COLUMNS, piece, moveLeft, moveRight, moveDown } from './pieces.js'
import { changeSpeedRefresh } from './main.js'

let movement = {r: 0, c: 0}
let lastMovement = {r: 0, c: 0}

window.addEventListener('keydown', (event) => {
  changeSpeedRefresh(10)
  switch (event.key) {
    case "ArrowLeft":
      if(moveLeft()) break;
      movement = {r: 0, c: -1}
      break;
    case "ArrowRight":
      if(moveRight()) break;
      movement = {r: 0, c: 1}
      break;
    case "ArrowDown":
      if(moveDown()) break;
      movement = {r: 1, c: 0}
      break;
    case " ":
      /*TODO: Restrictions Rotation Piece*/
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

