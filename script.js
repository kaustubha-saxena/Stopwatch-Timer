let start = document.querySelector(".start");
let restart = document.querySelector(".restart");
let pause = document.querySelector(".pause");
var sec = 0;
var min = 0;
var dy = 0;
var hr = 0;
let is_Pause = false;
let second = document.querySelector(".second-reading");
let minute = document.querySelector(".minute-reading");
let hour = document.querySelector(".hour-reading");
let day = document.querySelector(".day-reading");
var b;
let menu = document.querySelector(".menu");
let slide = document.querySelector(".sidebar")
let option = document.querySelectorAll(".option")
let inc = document.querySelectorAll(".inc")
let dec = document.querySelectorAll(".dec")
let is_timer = false;
let clock_stopwatch=document.querySelector(".clock-stopwatch")
let clock_timer=document.querySelector(".clock-timer")


start.addEventListener("click", () => {
    console.log("clicked");
    is_Pause = false
    
        start.classList.add("hide");
        restart.classList.remove("hide")
        pause.classList.remove("hide");

        b = setInterval(() => {
            sec += 1;
            console.log(sec);
            if (sec >= 60) {
                min++;
                if (min >= 60) {
                    hr++;
                    if (hr >= 24) {
                        dy++;
                        day.textContent = dy;
                        hr = 0;
                    }
                    hour.textContent = hr;
                    min = 0;
                }
                minute.textContent = min;
                sec = 0;
            }
            second.textContent = sec;
    
        }, 1000);
    }
)


pause.addEventListener("click", () => {
    is_Pause = true;
    clearInterval(b);
})

restart.addEventListener("click", () => {
    if (is_Pause == true) {

        start.classList.remove("hide")
        pause.classList.add("hide")
        if (is_timer == true) {

        }
        else {

            restart.classList.add("hide")
        }
        reset();
    }

})


menu.addEventListener("click", () => {
    slide.classList.toggle("slide")
})

function reset() {
    sec = 0;
    min = 0
    hr = 0
    dy = 0
    second.textContent = "00";
    minute.textContent = "00";
    hour.textContent = "00";
    day.textContent = "00";
}
function update() {

    second.textContent = sec;
    minute.textContent = min;
    hour.textContent = hr;
    day.textContent = dy;
}
