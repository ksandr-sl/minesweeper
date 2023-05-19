export default function addFlag(event) {
  event.preventDefault();

  if (!event.target.classList.contains('open') && !event.target.classList.contains('bomb')) {
    event.target.classList.toggle('flag');
  }
}