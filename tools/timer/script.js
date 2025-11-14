let seconds = 0;
let timerInterval = null;

const display = document.getElementById("timer-display");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  display.textContent =
    (hrs < 10 ? "0" : "") + hrs + ":" +
    (mins < 10 ? "0" : "") + mins + ":" +
    (secs < 10 ? "0" : "") + secs;
}

startBtn.addEventListener("click", () => {
  if (timerInterval) return;

  timerInterval = setInterval(() => {
    seconds++;
    updateDisplay();
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  seconds = 0;
  updateDisplay();
});

// Initialize display
updateDisplay();
