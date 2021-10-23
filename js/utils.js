export function createMatrix(rows, columns) {
  let matrix = [];
  for (let index = 0; index < rows; index++) {
    matrix.push(new Array(columns).fill(0)) 
  }
  return matrix
}
