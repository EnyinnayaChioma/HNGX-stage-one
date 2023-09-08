// Js for the current UTC time
document.getElementById("time").textContent =`This is the time in milliseconds ${new Date().getUTCMilliseconds()}`

// Js for the day of the week
let daysOfTheWeek = ['Sunday','Monday', 'Tuesday', 'Wednessday','Thursday','Friday','Saturday'];

document.getElementById("day").textContent =`Today is ${daysOfTheWeek[new Date().getDay()]}`