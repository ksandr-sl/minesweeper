import renderMatrix from '../utils/renderMatrix.js';
import startNewGame from './startNewGame.js';

export default function difficultySelection() {

  const title = document.createElement('div');
  title.classList.add('title');
  title.innerText = 'MINE\nSWEEPER';
  document.body.append(title);

  const chooseDifficult = document.createElement('div');
  chooseDifficult.classList.add('choose-difficulty');
  chooseDifficult.innerText = 'Choose difficulty';
  document.body.append(chooseDifficult);

  const difficulties = document.createElement('div');
  difficulties.classList.add('difficulties');
  chooseDifficult.after(difficulties);


  const easy = document.createElement('div');
  easy.classList.add('easy');
  easy.innerText = 'easy';
  easy.addEventListener('click', startNewGame(renderMatrix));
  difficulties.append(easy);

  const medium = document.createElement('div');
  medium.classList.add('medium');
  medium.innerText = 'medium';
  medium.addEventListener('click', startNewGame(renderMatrix));
  difficulties.append(medium);

  const hard = document.createElement('div');
  hard.classList.add('hard');
  hard.innerText = 'hard';
  hard.addEventListener('click', startNewGame(renderMatrix));
  difficulties.append(hard);
}