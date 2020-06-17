(() => {
    const deadlineDate = new Date("August 21, 2020 23:59:59").getTime();
  
    const countdownDays = document.querySelector(".countdown__days .number");
    const countdownHours = document.querySelector(".countdown__hours .number");
    const countdownMinutes = document.querySelector(
    ".countdown__minutes .number");
  
    const countdownSeconds = document.querySelector(
    ".countdown__seconds .number");

    setInterval(() => {
      const currentDate = new Date().getTime();

      const distance = deadlineDate - currentDate;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
      distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  
      const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(distance % (1000 * 60) / 1000);
  
      countdownDays.innerHTML = days;
      countdownHours.innerHTML = hours;
      countdownMinutes.innerHTML = minutes;
      countdownSeconds.innerHTML = seconds;
    }, 1000);
})();