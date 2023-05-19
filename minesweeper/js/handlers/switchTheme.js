export default function switchTheme() {
  document.querySelector('.container').classList.toggle('dark-theme');
  document.querySelector('.theme-switcher-dark').classList.toggle('theme-switcher-light');
  document.querySelector('.new-game').classList.toggle('dark-theme');
  document.querySelector('.clicks-counter').classList.toggle('dark-theme');
  document.querySelector('.seconds-counter').classList.toggle('dark-theme');
  document.querySelector('.field').classList.toggle('dark-theme');
  const cells = document.querySelectorAll('.cell');
  console.log(cells[0]);

  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.toggle('dark-theme');
  }
}