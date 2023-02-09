let myDate = document.getElementById("currentDate");
let myTime = document.getElementById("currentTime");



//Current date and time
function time() {
  let DayDate = new Date();
  let theMonth = DayDate.getMonth();
  let theDate = DayDate.getDate();
  let theYear = DayDate.getFullYear();
  let TimeSec = DayDate.getSeconds();
  let TimeMin = DayDate.getMinutes();
  let TimeHr = DayDate.getHours();
  myDate.textContent = 
  theMonth + "/" + theDate +"/" + theYear;
  myTime.textContent = TimeHr + ":" + TimeMin  + ":" + TimeSec;
}

//displaying the time every second
setInterval(time, 1000);


//time counting down.
let dayLeft = document.getElementById("dayLeft");
let hrLeft = document.getElementById("hrsLeft");
let minLeft = document.getElementById("minsLeft");
let secLeft = document.getElementById("secLeft");

let countDownYear = new Date(2023, 0, 1, 00, 00);
let countDownTime = countDownYear.getTime();

let oneMin = 60 * 1000;
let oneHr = 60 * oneMin;
let oneDay = 24 * oneHr;

function countdown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let timeLeft = countDownTime - todayTime;
   

      let daysLeft = Math.floor(timeLeft / oneDay);
      let hrsLeft = Math.floor((timeLeft % oneDay) / oneHr);
      let minsLeft = Math.floor((timeLeft % oneHr) / 60000);
      let secsLeft = Math.floor((timeLeft % oneMin) / 1000);

      dayLeft.textContent = daysLeft
      hrLeft.textContent = hrsLeft
      minLeft.textContent = minsLeft
      secLeft.textContent = secsLeft

  }
setInterval(countdown, 1000);