const game = new Game();
const player = new Player();
const obstacle = new Obstacle();

function preload() {}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  game.draw();
  player.draw();
  obstacle.draw();
}
