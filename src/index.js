import "./style.css";

let body = document.querySelector("body");
let h1 = document.createElement("h1");
h1.setAttribute("id", "h1RedFont");
h1.classList.add("redFont");
h1.textContent = "This font should be red";
body.appendChild(h1);
