let colors = ["#2196f3", "#e91e63", "#ffeb3b", "#74ff1d"];
function createSquare() {
  const section = document.querySelector("body");
  const square = document.createElement("span");
  let size = Math.random() * 20;
  square.style.width = 1 + size + "px";
  square.style.height = 1 + size + "px";
  let bg = colors;
  square.style.background = bg;
  square.style.top = Math.random() * innerHeight + "px";
  square.style.left = Math.random() * innerWidth + "px";
  section.appendChild(square);

  setTimeout(() => {
    square.remove();
  }, 5000);
}

setInterval(createSquare, 150);