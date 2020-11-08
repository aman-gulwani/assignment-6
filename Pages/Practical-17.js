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
    let today = new Date(2020, 12, 10, 22, 8, 8);
    let hours = today.getHours();

    if (hours >= 0 && hours < 5) {
        document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/aman-gulwani/assignment-6/master/Image/night3.webp')";
        greeting.innerHTML = "Good Night";
        document.body.style.color  = "white";
    }

    else if (hours > 4 && hours < 8) {
        document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/aman-gulwani/assignment-6/master/Image/early_morning.jpg')";
        greeting.innerHTML = "Good Morning";
    }

    else if (hours > 7 && hours < 13) {
        document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/aman-gulwani/assignment-6/master/Image/morning1.webp')";
        greeting.innerHTML = "Good Morning";
    }

    else if (hours > 12 && hours < 17) {
        document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/aman-gulwani/assignment-6/master/Image/afternoon1.jpg')";
        greeting.innerHTML = "Good Afternoon";
    }

    else if (hours > 16 && hours < 20) {
        document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/aman-gulwani/assignment-6/master/Image/evening.webp')";
        greeting.innerHTML = "Good Evening";
    }

    else {
        document.body.style.backgroundImage = "url('https://raw.githubusercontent.com/aman-gulwani/assignment-6/master/Image/night4.webp')";
        greeting.innerHTML = "Good Night";
        document.body.style.color  = "white";
    }
}

showtime();
setGreeting();