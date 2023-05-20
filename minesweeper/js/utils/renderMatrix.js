import firstMove from "../handlers/firstMove.js";
import revealCell from "../handlers/revealCell.js";
import addFlag from "../handlers/addFlag.js";
import startNewGame from "../handlers/startNewGame.js";
import switchTheme from "../handlers/switchTheme.js";
import Sound from "../handlers/sound.js";

export default function renderMatrix(matrix) {
  let score = {
    clicks: 0,
    seconds: 0
  };
  const flagAudio = new Sound('./accets/sound/flag.mp3');
  const defeatAudio = new Sound('./accets/sound/kurwa.mp3');
  const winAudio = new Sound('./accets/sound/good-job.mp3');
  const longShovel = new Sound('./accets/sound/long-shovel.mp3');
  const shovel1 = new Sound('./accets/sound/shovel-1.mp3');
  const shovel2 = new Sound('./accets/sound/shovel-2.mp3');
  const shovel3 = new Sound('./accets/sound/shovel-3.mp3');
  const shovel4 = new Sound('./accets/sound/shovel-4.mp3');
  const shovels = [shovel1, shovel2, shovel3, shovel4];

  //container
  const container = document.createElement('div');
  container.classList.add('container');
  document.body.append(container);

  //new game
  const newGame = document.createElement('div');
  newGame.classList.add('new-game');
  newGame.innerText = 'New Game';
  newGame.addEventListener('click', startNewGame(renderMatrix));
  container.append(newGame);

  //theme switcher
  const themeSwitcher = document.createElement('div');
  themeSwitcher.classList.add('theme-switcher-dark');
  themeSwitcher.addEventListener('click', switchTheme);
  container.append(themeSwitcher);

  //score
  const scoreSection = document.createElement('div');
  scoreSection.classList.add('score');
  container.append(scoreSection);

  //clicks
  const clicks = document.createElement('div');
  clicks.classList.add('clicks');
  clicks.innerText = 'clicks:';
  scoreSection.append(clicks);

  //clicks counter
  const clicksCounter = document.createElement('div');
  clicksCounter.classList.add('clicks-counter');
  clicksCounter.innerText = '0';
  clicks.append(clicksCounter);

  //seconds
  const seconds = document.createElement('div');
  seconds.classList.add('seconds');
  seconds.innerText = 'seconds:';
  scoreSection.append(seconds);

  //seconds counter
  const secondsCounter = document.createElement('div');
  secondsCounter.classList.add('seconds-counter');
  secondsCounter.innerText = '0';
  seconds.append(secondsCounter);

  //field
  const field = document.createElement('div');
  field.classList.add('field');
  container.append(field);

  //field event
  field.addEventListener('click', firstMove(matrix, score), {capture: true, once: true });

  //row
  for (let i = 0; i < matrix.length; i++) {
    const row = document.createElement('div');
    row.classList.add('field-row');
    field.append(row);

    //cell
    for (let j = 0; j < matrix[i].length; j++) {
      const cell = document.createElement('div');
      cell.classList.add('c-' + matrix[i][j].number);
      cell.classList.add('cell');
      cell.setAttribute('y', matrix[i][j].y);
      cell.setAttribute('x', matrix[i][j].x);

      //cell event
      cell.addEventListener('click', revealCell(matrix, score, winAudio, defeatAudio, longShovel, shovels));
      cell.addEventListener('contextmenu', addFlag(flagAudio));
      row.append(cell);
    }
  }

  setInterval(() => {
    clicksCounter.innerText = score.clicks;
    secondsCounter.innerText = score.seconds;
  }, 100)
}