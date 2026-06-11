const h1 = document.getElementById("demo");
function showMessage() {
  alert("Hello Git Practice!");
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button").addEventListener("click", showMessage);
});

console.log("Feature KJ");
console.log("hello");

const p = (document.createElement("p");
p.innerHTML = "<span> hover on me</span>";

h1.appendChild(p);

p.addEventListener("hover", () => {
  alert("Good boy");
});
