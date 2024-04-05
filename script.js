const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is my new text-content";

const para = document.createElement("p");
para.textContent = "Hey I'm red!";
para.style.color = "red";

const head = document.createElement("h3");
head.textContent = "I'm a blue h3!";
head.style.color = "blue";

const divBox = document.createElement("div");
divBox.setAttribute("style", "border: solid black 2px; background-color: pink");
const divHead = document.createElement("h1");
divHead.textContent = "I'm in a div";
const divP = document.createElement("p");
divP.textContent = "ME TOO";

divBox.appendChild(divHead);
divBox.appendChild(divP);

container.appendChild(content);
container.appendChild(para);
container.appendChild(head);
container.appendChild(divBox);

