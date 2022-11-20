timer = setInterval(function () {
  let timerShow = document.getElementById("timer");

  $.ajax({
    url: '',
    type: 'get-time',
    success: function (dataT){
      let timer = dataT;
      let seconds = timer%60 // Получаем секунды
      let minutes = timer/60%60 // Получаем минуты
      let hour = timer/60/60%24// Получаем часы
      let days = timer/24/60/60%60 // Получаем дни

      if (timer == 0) {
        timerShow.innerHTML = '0d:0h:0m:0sec';
        window.location.reload();
      } else if (timer == -1) {
          timerShow.innerHTML = '0d:0h:0m:0sec';
      } else if (timer > 0) {
        timerShow.innerHTML = `${Math.trunc(days)}d:${Math.trunc(hour)}h:${Math.trunc(minutes)}m:${seconds}sec`;
      }
    }
  });
}, 1000)
