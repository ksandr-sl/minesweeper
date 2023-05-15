import createMatrix from "./utils/createMatrix.js";
import renderMatrix from "./utils/renderMatrix.js";

const matrix = createMatrix(10, 10);
console.log(matrix);

renderMatrix(matrix);