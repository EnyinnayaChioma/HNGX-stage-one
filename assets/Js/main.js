// Js for the current UTC time
// document.getElementById("time").textContent =`This is the time in milliseconds ${new Date().getUTCMilliseconds()}`

const currentTime = new Date();
const utcTime = `${currentTime.getUTCHours()}:${currentTime.getUTCMinutes()}:${currentTime.getUTCSeconds()}`;
document.getElementById("time").textContent = `The time is ${utcTime}`;







// Js for the day of the week
let daysOfTheWeek = ['Sunday','Monday', 'Tuesday', 'Wednessday','Thursday','Friday','Saturday'];

document.getElementById("day").textContent =`Today is ${daysOfTheWeek[new Date().getDay()]}`