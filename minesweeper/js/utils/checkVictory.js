export default function checkVictory(matrix, score, winAudio) {
  let openedCells = 0;

  // opened cells counter
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {

      if (matrix[i][j].open) {
        openedCells++;
      }
    }
  }

  // check victory
  if (openedCells == 90) {
    winAudio.sound.currentTime = 0;
    winAudio.play();
    const victory = document.createElement('div');
    victory.classList.add('victory');
    victory.innerText = `Hooray! You found all mines in ${score.seconds} seconds and ${score.clicks} moves!`;
    return victory;
  }
}