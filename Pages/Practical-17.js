const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name  = document.getElementById("name");
const date = document.getElementById("date");

function showtime() {

    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let todaydate = today.toDateString();


    const ampm = hour>12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    time.innerHTML  = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${ampm}`;

    date.innerHTML = `${todaydate}`;

    setTimeout(showtime, 1000);
}

function addZero(n) {
    return ((parseInt(n, 10) < 10 ? "0" : "") + n);
}

function setGreeting() {
    let today = new Date();
    let hour = today.getHours();

    if (hour > 0 && hour < 4) {
        document.body.style.backgroundImage = "url('/image/night3.webp')";
    }
}

showtime();
setGreeting();