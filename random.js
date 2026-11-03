let btn = document.getElementById("btn");
let box = document.getElementById("box");
let color = document.getElementById("color");

btn.onclick = function () {
    let letters = "0123456789ABCDEF";
    let randomColor = "#";

    for (let i = 0; i < 6; i++) {
        randomColor += letters[Math.floor(Math.random() * 16)];
    }

    box.style.backgroundColor = randomColor;
    color.innerHTML = randomColor;
};