AOS.init();

const eventDate = new Date("2023-11-22T19:27:00");
const eventTimeStamp = eventDate.getTime();

setInterval(() => {
  const now = new Date();
  const currentTimeStamp = now.getTime();

  const timeToEvent = eventTimeStamp - currentTimeStamp;

  const msToMinutes = 1000 * 60;
  const msTohours = 1000 * 60 * 60;
  const msToDays = 1000 * 60 * 60 * 24;

  const daysToEvent = Math.floor(timeToEvent / msToDays);
  const hoursToEvent = Math.floor((timeToEvent % msToDays) / msTohours);
  const minutesToEvent = Math.floor((timeToEvent % msTohours) / msToMinutes);
  const secondsToEvent = Math.floor((timeToEvent % msToMinutes) / 1000);

  document.getElementById(
    "counter"
  ).innerHTML = `começa em ${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}min ${secondsToEvent}s`;

  if (timeToEvent < 0) {
    clearInterval(counter);
    document.getElementById("counter").innerHTML = "já aconteceu";
  }
}, 1000);
