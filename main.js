const stopwatch = document.getElementById("stopwatchtime");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let timerId;
let elapsedMs = 0;

function timeToString(millis) {
    const ms = millis % 10;
    const s = Math.floor(millis / 1000) % 60;
    const m = Math.floor(millis / 1000 / 60) % 60;
    const h = Math.floor(millis /1000 / 60 / 60) % 60
    
    const formattedMs = ms.toString().padStart(1, "0");
    const formattedS = s.toString().padStart(1, "0");
    const formattedM = m.toString().padStart(1, "0");
    const formattedH = h.toString().padStart(1, "0");
    
    return `${formattedH}:${formattedM}:${formattedS}:${formattedMs}`;
}

function startButton() {
  let startMs = Date.now();
  startMs -= elapsedMs;
  
  timerId = setInterval(() => {
    const nowMs = Date.now();
    elapsedMs = nowMs - startMs;
    
    stopwatch.textContent = timeToString(elapsedMs);
  }, 10);
}

function stopButton() {
  clearInterval(timerId);
}

function resetButton() {
  clearInterval(timerId);
  elapsedMs = 0;
  stopwatch.textContent = "0:0:0:0";
}