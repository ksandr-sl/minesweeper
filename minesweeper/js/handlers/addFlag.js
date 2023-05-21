export default function addFlag(flagAudio) {
  return event => {
    event.preventDefault();

    if (!event.target.classList.contains('opened') && !event.target.classList.contains('bomb')) {
      event.target.classList.toggle('flag');
      flagAudio.sound.currentTime = 0;
      flagAudio.play();
    }
  }
}