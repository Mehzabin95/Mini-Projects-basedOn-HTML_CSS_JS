const hoursEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  hoursEl.innerText = h;
  minutesEl.textContent = m;
  secondsEl.textContent = s;
  ampm.textContent = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
