/* Problem1: Digital Clock (Real-Time Update) 
Write a JavaScript program that displays the current time (HH:MM:SS AM/PM) on a 
webpage. The time should update every second dynamically. Use setInterval(),
 DOM manipulation, and Date object to create a real-time digital clock. */

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    let timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000);
updateClock();