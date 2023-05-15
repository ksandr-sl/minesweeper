import Cell from "./Cell.js";

export default function createMatrix(height, width) {
  const matrix = [];
  let bombsCount = 0;

  for (let i = 0; i < height; i++) {
    const row = [];

    for (let j = 0; j < width; j++) {
      let random = Math.random() * 10;
      if (bombsCount < 10 && random < 1) {
        row.push(new Cell(true));
        bombsCount++;
      } else {
        row.push(new Cell(false));
      }
    }

    matrix.push(row);
  }

  return matrix;
}