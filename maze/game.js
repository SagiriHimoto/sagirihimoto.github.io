import * as THREE from 'three';

// Game setup
const canvas = document.getElementById('gameCanvas');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);
window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

// Scene, camera, and lighting
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(5, 5, 15);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10).normalize();
scene.add(light);

// Maze setup
const TILE_SIZE = 1;
const tileTypes = {
  wall: new THREE.MeshBasicMaterial({ color: 0x444444 }),
  floor: new THREE.MeshBasicMaterial({ color: 0x888888 }),
  keycard: new THREE.MeshBasicMaterial({ color: 0xffd700 }),
  door: new THREE.MeshBasicMaterial({ color: 0x0000ff }),
};

function createTile(type, x, z) {
  const geometry = new THREE.BoxGeometry(TILE_SIZE, TILE_SIZE / 4, TILE_SIZE);
  const material = tileTypes[type];
  const tile = new THREE.Mesh(geometry, material);
  tile.position.set(x, 0, z);
  if (type === 'wall') tile.scale.y = 2; // Make walls taller
  scene.add(tile);
}

async function loadMaze(jsonFile) {
  const response = await fetch(jsonFile);
  const data = await response.json();
  const { width, height, tiles } = data;

  for (let z = 0; z < height; z++) {
    for (let x = 0; x < width; x++) {
      createTile(tiles[z][x], x - width / 2, z - height / 2);
    }
  }
}

// Load maze and start game
loadMaze('maze.json');

// Game loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
