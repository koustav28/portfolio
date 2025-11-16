const time = document.getElementById("time");
const startDay = "01-02-2024";
const startDayDate = new Date(startDay);
const intlNumFor = new intlNumFormat("en-US");

setInterval(() => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - startDayDate.getTime()) / 1000);
    time.innerText = intlNumFor.format(diff);
}, 1000);