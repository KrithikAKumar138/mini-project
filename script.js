const app = document.getElementById("app");

// Prevent duplicates
app.innerHTML = "";

// Calculator wrapper
const root = document.createElement("div");
root.className = "calc-wrapper";
app.appendChild(root);

// Display
const display = document.createElement("div");
display.className = "calc-screen";
display.innerText = "0";
root.appendChild(display);

// Buttons
const buttons = [
  "AC", "DE", "%", "/",
  "7", "8", "9", "*",
  "4", "5", "6", "-",
  "1", "2", "3", "+",
  "00", "0", ".", "="
];

const grid = document.createElement("div");
grid.className = "calc-grid";
root.appendChild(grid);

buttons.forEach(value => {
  const btn = document.createElement("button");
  btn.innerText = value;
  btn.className = "btn";

  if (["AC", "DE", "%"].includes(value)) btn.classList.add("func");
  if (["+", "-", "*", "/"].includes(value)) btn.classList.add("op");
  if (value === "=") btn.classList.add("equal");

  btn.onclick = () => handleClick(value);
  grid.appendChild(btn);
});

function handleClick(value) {
  if (display.innerText === "0" && !isNaN(value)) {
    display.innerText = value;
    return;
  }

  switch (value) {
    case "AC":
      display.innerText = "0";
      break;
    case "DE":
      display.innerText =
        display.innerText.length > 1
          ? display.innerText.slice(0, -1)
          : "0";
      break;
    case "=":
      try {
        display.innerText = eval(display.innerText);
      } catch {
        alert("Invalid Expression");
      }
      break;
    default:
      display.innerText += value;
  }
}

