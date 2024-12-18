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
let clock_stopwatch = document.querySelector(".clock-stopwatch")
let clock_timer = document.querySelector(".clock-timer")

// if (sec == 0 && min == 0 && dy == 0 && hr == 0) {
//     start.disabled = true;
//     start.classList.add(".disable")
// }

inc.forEach(element => {
    element.addEventListener("click", () => {
        console.log("up");

        element.parentElement.children[1].textContent++;

    })
});
dec.forEach(element => {
    element.addEventListener("click", () => {
        console.log("down");
        if (element.parentElement.children[1].textContent != 0) {
            element.parentElement.children[1].textContent--;
        }

    })
});


console.log("clcik");
start.addEventListener("click", () => {
    // update();

    console.log("sdf");

    if (second.textContent == 0 && minute.textContent == 0 && hour.textContent == 0 && day.textContent == 0) {

    }
    else {



        start.classList.add("hide");
        pause.classList.remove("hide");
        sec = second.textContent
        min = minute.textContent
        hr = hour.textContent
        dy = day.textContent
        b = setInterval(() => {
            sec -= 1;

            if (sec < 0) {
                if (min == 0) {
                    if (hr == 0) {
                        if (dy == 0) {
                            console.log("finish");

                            clearInterval(b);
                            start.classList.remove("hide")
                        }
                        else {
                            dy--;
                            hr = 23;
                            min = 59;
                            sec = 59;
                            update();
                        }
                    }
                    else {
                        hr--;
                        min = 59;
                        sec = 59;
                        update();

                    }
                }
                else {
                    min--;
                    sec = 59;
                    update();
                }
            }
            else {
                update();

            }
        }, 1000);
    }
})

pause.addEventListener("click", () => {
    is_Pause = true;
    clearInterval(b);
})

restart.addEventListener("click", () => {
    if (is_Pause == true) {

        start.classList.remove("hide")
        pause.classList.add("hide")
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
