document.addEventListener("DOMContentLoaded", function() {
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Set the width and height of the canvas to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set the initial position and velocity of the circle
let x = canvas.width / 2;
let y = canvas.height / 2;
let vx = 0;
let vy = 0;
const speed = 200; // pixels per second
const radius = 30;

// Track the last time the circle was updated
let lastTime = performance.now();

// Draw the circle at the current position
function drawCircle() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

// Update the velocity of the circle based on the pressed keys
document.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp" || event.code === "KeyW") {
    vy = -1;
  } else if (event.code === "ArrowDown" || event.code === "KeyS") {
    vy = 1;
  } else if (event.code === "ArrowLeft" || event.code === "KeyA") {
    vx = -1;
  } else if (event.code === "ArrowRight" || event.code === "KeyD") {
    vx = 1;
  }
});

// Stop the circle when the key is released
document.addEventListener("keyup", (event) => {
  if (
    event.code === "ArrowUp" ||
    event.code === "KeyW" ||
    event.code === "ArrowDown" ||
    event.code === "KeyS"
  ) {
    vy = 0;
  } else if (
    event.code === "ArrowLeft" ||
    event.code === "KeyA" ||
    event.code === "ArrowRight" ||
    event.code === "KeyD"
  ) {
    vx = 0;
  }
});

// Update the position of the circle at a regular interval
function update() {
  // Calculate the time elapsed since the last update
  const currentTime = performance.now();
  const deltaTime = currentTime - lastTime;
  lastTime = currentTime;

  // Calculate the distance the circle should move based on the elapsed time
  const distanceX = vx * speed * deltaTime / 1000;
  const distanceY = vy * speed * deltaTime / 1000;

  // Update the position of the circle
  x += distanceX;
  y += distanceY;

  // Make sure the circle stays within the canvas bounds
  if (x - radius < 0) {
    x = radius;
  } else if (x + radius > canvas.width) {
    x = canvas.width - radius;
  }

  if (y - radius < 0) {
    y = radius;
  } else if (y + radius > canvas.height) {
    y = canvas.height - radius;
  }

  // Redraw the circle at the new position
  drawCircle();

  // Request the next frame
  requestAnimationFrame(update);
}

// Start the update loop
requestAnimationFrame(update);
canvas.style.overflow = "hidden";
document.body.style.overflow = "hidden";
});