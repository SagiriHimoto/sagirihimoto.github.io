document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.overflow = "hidden";
  document.body.style.overflow = "hidden";

// Set the initial position and radius of the circle
let x = canvas.width / 2;
let y = canvas.height / 2;
const radius = 30;

// Draw the circle
function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

// Handle the keydown event to move the circle
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp" || event.code === "KeyW") {
    y -= 10;
  } else if (event.code === "ArrowDown" || event.code === "KeyS") {
    y += 10;
  } else if (event.code === "ArrowLeft" || event.code === "KeyA") {
    x -= 10;
  } else if (event.code === "ArrowRight" || event.code === "KeyD") {
    x += 10;
  }
  drawCircle();
});

// Draw the initial circle
drawCircle();
});