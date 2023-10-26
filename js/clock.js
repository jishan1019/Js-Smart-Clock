let hours = document.querySelector("#hours");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

//set the current time
setInterval(() => {
  let currentTime = new Date();
  hours.innerHTML = currentTime.getHours();
  minute.innerHTML = currentTime.getMinutes();
  second.innerHTML = currentTime.getSeconds();
});
