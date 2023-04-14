document.addEventListener("DOMContentLoaded", function() {
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// Define the size of the tiles and the number of rows and columns in the map
const tileSize = {
  width: 32,
  height: 24,
};
const numRows = 3;
const numCols = 4;

// Define the textures for each tile ID
const textures = [
  null, // ID 0 has no texture
  document.getElementById("texture1"),
  document.getElementById("texture2"),
  document.getElementById("texture3"),
];

// Load the map file and parse its contents into a 2D array
fetch("map.txt")
  .then(response => response.text())
  .then(data => {
    const lines = data.trim().split("\n");
    const map = [];
    for (let i = 0; i < numRows; i++) {
      map.push(lines[i + 1].trim().split(" ").map(Number));
    }

    // Draw the map on the canvas
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const tileID = map[row][col];
        const texture = textures[tileID];

        if (texture) {
          ctx.drawImage(texture, col * tileSize.width, row * tileSize.height, tileSize.width, tileSize.height);
        }
      }
    }
  })
  .catch(error => {
    console.error(`Error loading map: ${error}`);
  });

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

// Track the pressed keys
const keys = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
  KeyW: false,
  KeyS: false,
  KeyA: false,
  KeyD: false,
};

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
  if (event.code in keys) {
    keys[event.code] = true;
  }
});

// Stop the circle when the key is released
document.addEventListener("keyup", (event) => {
  if (event.code in keys) {
    keys[event.code] = false;
  }
});

// Update the position of the circle at a regular interval
function update() {
  // Calculate the time elapsed since the last update
  const currentTime = performance.now();
  const deltaTime = currentTime - lastTime;
  lastTime = currentTime;

  // Calculate the distance the circle should move based on the elapsed time
  let dx = 0;
  let dy = 0;
  if (keys.ArrowUp || keys.KeyW) {
    dy -= 1;
  }
  if (keys.ArrowDown || keys.KeyS) {
    dy += 1;
  }
  if (keys.ArrowLeft || keys.KeyA) {
    dx -= 1;
  }
  if (keys.ArrowRight || keys.KeyD) {
    dx += 1;
  }
  if (dx !== 0 || dy !== 0) {
    const distance = speed * deltaTime / 1000;
    const angle = Math.atan2(dy, dx);
    vx = distance * Math.cos(angle);
    vy = distance * Math.sin(angle);
  } else {
    vx = 0;
    vy = 0;
  }

  // Update the position of the circle
  x += vx;
  y += vy;

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

// Track the last time the circle was updated
let lastTime = performance.now();

// Start the update loop
requestAnimationFrame(update);

canvas.style.overflow = "hidden";
document.body.style.overflow = "hidden";
});