const pieceT = [[0, 1, 0], [1, 1, 1], [0, 0, 0]]

const pieceI = [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]]

const pieceL = [[1, 1, 1], [1, 0, 0], [0, 0, 0]]

const pieceZ = [[1, 1, 0], [0, 1, 1], [0, 0, 0]]

const pieceC = [[1, 1], [1, 1]]

const figures = [pieceT, pieceI, pieceZ, pieceL, pieceC]

export function getFigure() {
  let n = Math.floor(Math.random() * 5 )
  console.log(n)
  return figures[n];
}