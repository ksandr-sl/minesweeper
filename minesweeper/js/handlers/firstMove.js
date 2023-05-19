export default function firstMove(matrix, score) {
  return event => {

    setInterval(() => {
      score.seconds++;
    }, 1000);

    const y = +event.target.getAttribute('y');
    const x = +event.target.getAttribute('x');

    matrix[y][x].open = true;
    let bombsCount = 0;

    while (bombsCount < 10) {
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {

          let random = Math.random() * 10;

          if (!matrix[i][j].open && bombsCount < 10 && random < 1) {
            matrix[i][j].isBomb = true;
            bombsCount++;
          }
        }
      }
    }

    checkAround(matrix, y, x);
    event.target.classList.add('test');
    document.querySelector('.c-' + matrix[y][x].number).innerText = matrix[y][x].bombsAround;

    function checkAround(matrix, y, x) {
      matrix[y][x].bombsAround = '';
      const cellsAround = [];

      cellsAround.push(matrix[y][x]);
      if (y > 0) cellsAround.push(matrix[y - 1][x]);
      if (y < matrix.length - 1) cellsAround.push(matrix[y + 1][x]);
      if (x > 0) cellsAround.push(matrix[y][x - 1]);
      if (x < matrix.length - 1) cellsAround.push(matrix[y][x + 1]);
      if (y > 0 && x > 0) cellsAround.push(matrix[y - 1][x - 1]);
      if (y > 0 && x < matrix.length - 1) cellsAround.push(matrix[y - 1][x + 1]);
      if (y < matrix.length - 1 && x > 0) cellsAround.push(matrix[y + 1][x - 1]);
      if (y < matrix.length - 1 && x < matrix.length - 1) cellsAround.push(matrix[y + 1][x + 1]);

      cellsAround.forEach(e => {
        if (e.isBomb) {
          matrix[y][x].bombsAround++;
          e.bombsAround = '';

          document.querySelector('.c-' + matrix[e.y][e.x].number).classList.add('bomb'); //+
        } else if (e.bombsAround === undefined) {
          checkAround(matrix, e.y, e.x);
          document.querySelector('.c-' + matrix[e.y][e.x].number).classList.add('empty');//+
          document.querySelector('.c-' + matrix[e.y][e.x].number).innerText = matrix[e.y][e.x].bombsAround;//+
        }
      })
    }
  }
}