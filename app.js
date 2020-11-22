const originMiniSecond = document.getElementsByClassName("miniSecond")[0];
const originSecond = document.getElementsByClassName("second")[0];
const originMinute = document.getElementsByClassName("minute")[0];
const originHour = document.getElementsByClassName("hour")[0];

const startbtn = document.getElementsByClassName("btn-start")[0];
const stop = document.getElementsByClassName("btn-stop")[0];
const pin = document.getElementsByClassName("btn-pin")[0];
const clear = document.getElementsByClassName("btn-clear")[0];
const con = document.getElementsByClassName("btn-con")[0];

const ul=document.querySelector("ul");

let miniSecond = 0,
    second = 0,
    minute = 0,
    hour = 0;

let i = 1;

const startTime = () => {
    miniSecond += 1;

    if (miniSecond === 1000) {
        miniSecond = 0;
        second += 1;

        if (second === 60) {
            second = 0;
            minute += 1;

            if (minute === 60) {
                minute = 0;
                hour += 1;
            }
        }
    }


    const secondMiniSecond = (miniSecond < 10 && miniSecond > 0) ? "00" + miniSecond : (miniSecond < 100 && miniSecond > 10) ? "0" + miniSecond : miniSecond;
    const secondSecond = (second < 10) ? "0" + second : second;
    const secondMinute = (minute < 10) ? "0" + minute : minute;
    const secondHour = (hour < 10) ? "0" + hour : hour;

    originMiniSecond.innerHTML = secondMiniSecond;
    originSecond.innerHTML = secondSecond;
    originMinute.innerHTML = secondMinute;
    originHour.innerHTML = secondHour;
};

let startT;

startbtn.addEventListener("click", () => {
    startT = setInterval(startTime, 1);
    startbtn.disabled = true;
    stop.disabled = false;
    pin.disabled = false;
    clear.disabled = false;
    con.disabled = true;
});

stop.addEventListener("click", () => {
    clearInterval(startT);
    stop.disabled = true;
    pin.disabled = true;
    con.disabled = false;
});

con.addEventListener("click", () => {
    clearInterval(startT);
    startT = setInterval(startTime, 1);
    con.disabled = true;
    stop.disabled = false;
    pin.disabled = false;
})

clear.addEventListener("click", () => {
    clearInterval(startT);
    miniSecond = 0,
        second = 0,
        minute = 0,
        hour = 0;
    originMiniSecond.innerHTML = "000";
    originSecond.innerHTML = "00";
    originMinute.innerHTML = "00";
    originHour.innerHTML = "00";
    ul.innerHTML='';

    startbtn.disabled = false;
    stop.disabled = true;
    con.disabled = true;
    pin.disabled = true;
    clear.disabled = true;
});

pin.addEventListener("click", () => {

    let a=0;
    const pinUl = document.getElementsByClassName("pin-ul")[a];

    const createLi = document.createElement("li");
    createLi.setAttribute("class","list")
    createLi.append(originMinute.innerHTML + " : " + originMinute.innerHTML + " : " + originSecond.innerHTML + " : " + originMiniSecond.innerHTML);
    pinUl.appendChild(createLi);
    a++;
});