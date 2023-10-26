let hours = document.querySelector("#hours");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

//set the current time
setInterval(() => {
  let currentTime = new Date();
  hours.innerHTML =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minute.innerHTML =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  second.innerHTML =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
});
