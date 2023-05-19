import createMatrix from "../utils/createMatrix.js";

export default function startNewGame(renderMatrix) {
  return () => {
    document.body.innerHTML = '';
    let matrix = createMatrix(10, 10);
    renderMatrix(matrix);
  }
}