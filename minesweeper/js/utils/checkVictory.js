export default function checkVictory(matrix, score) {
  let revealedCells = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {

      if (matrix[i][j].open) {
        revealedCells++;
      }
    }
  }

  if (revealedCells == 90) {
    const victory = document.createElement('div');
    victory.classList.add('victory');
    victory.innerText = `Hooray! You found all mines in ${score.seconds} seconds and ${score.clicks} moves!`;
    return victory;
  }
}