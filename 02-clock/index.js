const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
function setTime() {
    const clock = new Date();
    const hours = clock.getHours();
    const minutes = clock.getMinutes();
    const seconds = clock.getSeconds();
    const degreeOfSeconds = (seconds / 60) * 360 + 90;
    const degreeOfMinutes = (minutes / 60) * 360 + 90;
    const degreeOfHours = (hours / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${degreeOfHours}deg)`;
    minHand.style.transform = `rotate(${degreeOfMinutes}deg)`;
    secondHand.style.transform = `rotate(${degreeOfSeconds}deg)`;
}
setInterval(setTime, 1000);
setTime();
