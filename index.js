let timeInput = document.getElementById("time-input");
let timeDisplay = document.getElementById("time-display");
let alarmSound = document.getElementById("alarm-sound");

function startTimer() {
  let timeArray = timeInput.value.split(":");
  let hours = parseInt(timeArray[0]);
  let minutes = parseInt(timeArray[1]);
  let seconds = parseInt(timeArray[2]);

  let totalSeconds = hours * 3600 + minutes * 60 + seconds;

  let timerInterval = setInterval(function () {
    let hoursLeft = Math.floor(totalSeconds / 3600);
    let minutesLeft = Math.floor((totalSeconds - hoursLeft * 3600) / 60);
    let secondsLeft = totalSeconds - hoursLeft * 3600 - minutesLeft * 60;

    timeDisplay.innerText =
      hoursLeft.toString().padStart(2, "0") +
      ":" +
      minutesLeft.toString().padStart(2, "0") +
      ":" +
      secondsLeft.toString().padStart(2, "0");

    if (totalSeconds === 0) {
      clearInterval(timerInterval);
      alarmSound.play();
      timeInput.value = "";
      timeDisplay.innerText = "00:00:00";
      window.alert("Timer Expired!");
    } else {
      totalSeconds--;
    }
  }, 1000);
}
