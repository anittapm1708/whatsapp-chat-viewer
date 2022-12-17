window.onload = function () {

    window.matchMedia('(prefers-color-scheme: dark)').matches ? switchNi() : switchDay();

}

function switchNi() {
    nmode = true;
    let buttonNi = document.getElementById("night");
    if (buttonNi.style.backgroundColor == "rgb(24, 44, 57)")
        return;

    let buttonDay = document.getElementById("day");

    buttonDay.style.backgroundColor = "#030c12";
    buttonNi.style.backgroundColor = "#182c39";
    body.style.backgroundColor="#fffff";

    document.getElementById("alter").href = "";
}

function switchDay() {
    nmode = false;
    let buttonDay = document.getElementById("day");
    if (buttonDay.style.backgroundColor == "rgb(24, 44, 57)")
        return;

    let buttonNi = document.getElementById("night");

    buttonNi.style.backgroundColor = "#030c12";
    buttonDay.style.backgroundColor = "#182c39";
    body.style.backgroundColor="#00000";
    document.getElementById("alter").href = "assets/css/productlight.css";

}
