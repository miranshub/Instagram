const btn = document.getElementById("toggle");
const body = document.querySelector("body");

var count = 0;

btn.addEventListener("click", function() {
    count++;
    console.log(String(count));
})