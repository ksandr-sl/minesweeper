import Cell from "./Cell.js";

export default function createMatrix(height, width) {
  const matrix = [];
  let number = 0;

  for (let i = 0; i < height; i++) {
    const row = [];

    for (let j = 0; j < width; j++) {

      const cell = new Cell();
      cell.number = number;
      cell.y = i;
      cell.x = j;

      row.push(cell);
      number++;
    }

    matrix.push(row);
  }
  return matrix;
}