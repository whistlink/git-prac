import { hello } from "./module.js";

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  alert("Hello");
});

hello(2 * 2);
