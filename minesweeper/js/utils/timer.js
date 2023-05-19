export default function timer(score) {

  setInterval(() => {
    score.seconds++;
  }, 1000);
}