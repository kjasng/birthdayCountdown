let KikiBirthday = new Date("June 20, 2024 00:00:00").getTime();

let countDown = setInterval(function() {

let now = new Date().getTime();
let distance = KikiBirthday - now;
let days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
let hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
let minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
let seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, "0");
  // Display the result in the element with id="demo"
  document.querySelector(".countdown-container").innerHTML = days + "D:" + hours + "H:"
  + minutes + "M:" + seconds + "S";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(countDown);
    document.querySelector(".countdown-container").innerHTML = "HAPPY BIRTHDAYYYY 🎂🎉🎈";
  }
}, 1000);