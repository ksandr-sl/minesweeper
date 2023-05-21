export default function firstMove(matrix, score) {
  return event => {

    // seconds counter
    setInterval(() => {
      score.seconds++;
    }, 1000);

    // get coordinates
    const y = +event.target.getAttribute('y');
    const x = +event.target.getAttribute('x');

    // open first cell
    matrix[y][x].open = true;

    // difficulty
    let maxBombs = 10;
    let bombsCount = 0;
    switch (matrix.length) {
      case 30:
        maxBombs = 50;
        break;
      case 20:
        maxBombs = 30;
        break;
      default:
        maxBombs = 10;
        break;
    }

    // set bombs in cells
    while (bombsCount < maxBombs) {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {

          let random = Math.random() * 10;

          if (!matrix[i][j].open && bombsCount < maxBombs && random < 0.5) {
            matrix[i][j].isBomb = true;
            bombsCount++;
          }
        }
      }
    }

    // set number of bombs around in each cell
    checkAround(matrix, y, x);
    event.target.classList.add('opened');
    document.querySelector('.c-' + matrix[y][x].number).innerText = matrix[y][x].bombsAround;

    function checkAround(matrix, y, x) {
      matrix[y][x].bombsAround = '';
      const cellsAround = [];

      cellsAround.push(matrix[y][x]);
      if (y > 0) cellsAround.push(matrix[y - 1][x]);
      if (y < matrix.length - 1) cellsAround.push(matrix[y + 1][x]);
      if (x > 0) cellsAround.push(matrix[y][x - 1]);
      if (x < matrix[0].length - 1) cellsAround.push(matrix[y][x + 1]);
      if (y > 0 && x > 0) cellsAround.push(matrix[y - 1][x - 1]);
      if (y > 0 && x < matrix[0].length - 1) cellsAround.push(matrix[y - 1][x + 1]);
      if (y < matrix.length - 1 && x > 0) cellsAround.push(matrix[y + 1][x - 1]);
      if (y < matrix.length - 1 && x < matrix[0].length - 1) cellsAround.push(matrix[y + 1][x + 1]);

      cellsAround.forEach(e => {
        if (e.isBomb) {
          matrix[y][x].bombsAround++;
          e.bombsAround = '';
        } else if (e.bombsAround === undefined) {
          checkAround(matrix, e.y, e.x);
        }
      })
    }
  }
}