let body = document.querySelector("body");
let newDiv = document.createElement("div");
newDiv.setAttribute("id", "newDiv");
newDiv.classList.add("newDiv");
let p1 = document.createElement("h1");
p1.setAttribute("id", "p1GreenFont");
p1.classList.add("greenFont");
p1.textContent = "This font should be green";
newDiv.appendChild(p1);
body.appendChild(newDiv);