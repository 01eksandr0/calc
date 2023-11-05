let x = ""; // first number
let y = ""; // second number
let sign = ""; // Знак операції
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "x", "/"];

// MONITOR
const out = document.querySelector(".calc-script > p");

function clearAll() {
  x = "";
  y = "";
  sign = "";
  finish = false;
  out.textContent = 0;
}
document.querySelector(".ac").onclick = clearAll;

document.querySelector(".btn-container").onclick = (event) => {
  // Натиснута he кнопак
  if (!event.target.classList.contains("btn-n")) return;
  //Натиснута кнопак
  if (event.target.classList.contains("ac")) return;

  out.textContent = "";
  //Отримую натиснуту кнопку
  const key = event.target.textContent;
  //Якщо була натиснути кнопка 0-9
  if (digit.includes(key)) {
    if (y === "" && sign === "") {
      x += key;
      out.textContent = x;
    } else if (x !== "" && y !== "" && finish) {
      y = key;
      finish = false;
      out.textContent = y;
    } else {
      y += key;
      out.textContent = y;
    }
    return;
  }
  //Якщо натиснута клавіша +-/*
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    return;
  }
  // =
  if (key === "=") {
    // if ((y = "")) {
    //   y = x;
    // }
    switch (sign) {
      case "+":
        x = +x + +y;
        break;
      case "-":
        x = x - y;
        break;
      case "x":
        x = x * y;
        break;
      case "/":
        x = x / y;
        break;
    }
    finish = true;
    console.log(x);
    out.textContent = x;
  }
};
