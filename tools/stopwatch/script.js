let seconds = 0;
let interval = null;

const display = document.getElementById("display");
const sandTop = document.querySelector(".sand-top");
const sandBottom = document.querySelector(".sand-bottom");

const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

function updateDisplay() {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  display.textContent =
    `${hrs.toString().padStart(2,"0")}:${mins.toString().padStart(2,"0")}:${secs.toString().padStart(2,"0")}`;
}

function updateSand() {
  // sand-top goes from 100% → 0%
  // sand-bottom goes from 0% → 100%
  let percent = Math.min(seconds % 60 * (100 / 60), 100);

  sandTop.style.height = (100 - percent) + "%";
  sandBottom.style.height = percent + "%";
}

startBtn.addEventListener("click", () => {
  if (interval) return; // already running
  interval = setInterval(() => {
    seconds++;
    updateDisplay();
    updateSand();
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  updateDisplay();
  sandTop.style.height = "100%";
  sandBottom.style.height = "0%";
});

// initialize
updateDisplay();
