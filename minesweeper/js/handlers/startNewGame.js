import createMatrix from "../utils/createMatrix.js";

export default function startNewGame(renderMatrix) {
  return e => {
    document.body.innerHTML = '';

    let height;
    let width;

    switch (e.target.innerText) {
      case 'hard':
        height = 30;
        width = 10;
        break;

      case 'medium':
        height = 20;
        width = 10;
        break;

      default:
        height = 10;
        width = 10;
        break;
    }

    let matrix = createMatrix(height, width);
    renderMatrix(matrix);

    console.log(e.target.innerText);
  }
}