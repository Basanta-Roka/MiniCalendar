
let month = document.querySelector("#month");
let day = document.querySelector("#day");
let date = document.querySelector("#date");
let year = document.querySelector("#year");

let month2 = document.querySelector("#month2");
let date2 = document.querySelector("#date2");
let year2 = document.querySelector("#year2");
 
let currentDate = new Date();

var months = ["January", "February", "March", "April", "May", "June", "July", "Agust", "September", "Octuber", "November", "December" ];

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

month.innerHTML = months[currentDate.getMonth()];
day.innerHTML = days[currentDate.getDay()];
date.innerHTML = currentDate.getDate();
year.innerHTML = currentDate.getFullYear();

month2.innerHTML = months[currentDate.getMonth()];
date2.innerHTML = currentDate.getDate();
year2.innerHTML = currentDate.getFullYear();