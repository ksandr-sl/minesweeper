import checkVictory from "../utils/checkVictory.js";

export default function revealCell(matrix, score) {
  return event => {
    event.target.classList.remove('flag');
    const y = +event.target.getAttribute('y');
    const x = +event.target.getAttribute('x');


    if (matrix[y][x].isBomb) {
      event.target.classList.add('bomb');

      const gameOver = document.createElement('div');
      gameOver.classList.add('game-over');
      gameOver.innerText = 'Game over. Try again';
      document.body.append(gameOver);

    } else if (matrix[y][x].bombsAround > 0) {
      matrix[y][x].open = true;

      let cell = document.querySelector('.c-' + matrix[y][x].number);

      cell.innerText = matrix[y][x].bombsAround;
      cell.classList.add('color-' + matrix[y][x].bombsAround);

      document.querySelector('.c-' + matrix[y][x].number).classList.add('test');

      score.clicks++;

      const victory = checkVictory(matrix, score);
      if (victory) document.body.append(victory);
    } else {
      openAround(matrix, y, x);

      score.clicks++;

      const victory = checkVictory(matrix, score);
      if (victory) document.body.append(victory);
    }

    function openAround(matrix, y, x) {
      const cellsAround = [];

      if (!matrix[y][x].open) cellsAround.push(matrix[y][x]);
      if (y > 0 && !matrix[y - 1][x].open) cellsAround.push(matrix[y - 1][x]);
      if (y < matrix.length - 1 && !matrix[y + 1][x].open) cellsAround.push(matrix[y + 1][x]);
      if (x > 0 && !matrix[y][x - 1].open) cellsAround.push(matrix[y][x - 1]);
      if (x < matrix.length - 1 && !matrix[y][x + 1].open) cellsAround.push(matrix[y][x + 1]);
      if (y > 0 && x > 0 && !matrix[y - 1][x - 1].open) cellsAround.push(matrix[y - 1][x - 1]);
      if (y > 0 && x < matrix.length - 1 && !matrix[y - 1][x + 1].open) cellsAround.push(matrix[y - 1][x + 1]);
      if (y < matrix.length - 1 && x > 0 && !matrix[y + 1][x - 1].open) cellsAround.push(matrix[y + 1][x - 1]);
      if (y < matrix.length - 1 && x < matrix.length - 1 && !matrix[y + 1][x + 1].open) cellsAround.push(matrix[y + 1][x + 1]);

      cellsAround.forEach(e => {
        e.open = true;

        if (!e.isBomb && cellsAround.length > 0) {
          if (e.bombsAround > 0) {
            // document.querySelector('.c-' + matrix[y][x].number).classList.add('empty');
            // document.querySelector('.c-' + matrix[y][x].number).innerText = matrix[y][x].bombsAround;

            document.querySelector('.c-' + matrix[e.y][e.x].number).classList.add('test');
            document.querySelector('.c-' + matrix[e.y][e.x].number).classList.add('color-' + matrix[e.y][e.x].bombsAround);

            document.querySelector('.c-' + matrix[e.y][e.x].number).innerText = matrix[e.y][e.x].bombsAround;
          } else if (e.bombsAround === '') {
            document.querySelector('.c-' + e.number).classList.add('test');
            openAround(matrix, e.y, e.x);
          }
        }

      })
    }
  }
}

