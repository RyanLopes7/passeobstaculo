var wall1,
  wall2,
  wall3,
  wall4,
  wall5,
  wall6,
  wall7,
  wall8,
  wall9,
  wall10,
  wall11,
  wall12;

var bola;

var bola1, bola2, bola3, bola4;
var areaInicio, areaFim;

var count = 0;

var level = 1;
var start = 1;

function preload() {}

function setup() {
  wall1 = createSprite(190, 120, 250, 3);
  wall2 = createSprite(190, 260, 250, 3);
  wall3 = createSprite(67, 145, 3, 50);
  wall4 = createSprite(67, 235, 3, 50);
  wall5 = createSprite(313, 145, 3, 50);
  wall6 = createSprite(313, 235, 3, 50);
  wall7 = createSprite(41, 170, 50, 3);
  wall8 = createSprite(41, 210, 50, 3);
  wall9 = createSprite(337, 210, 50, 3);
  wall10 = createSprite(337, 170, 50, 3);
  wall11 = createSprite(18, 190, 3, 40);
  wall12 = createSprite(361, 190, 3, 40);

  bola1 = createSprite(100, 130, 10, 10);
  bola1.shapeColor = "red";
  bola2 = createSprite(215, 130, 10, 10);
  bola2.shapeColor = "red";
  bola3 = createSprite(165, 250, 10, 10);
  bola3.shapeColor = "red";
  bola4 = createSprite(270, 250, 10, 10);
  bola4.shapeColor = "red";

  areaInicio = createSprite(45, 190, 50, 40);
  areaInicio.shapeColor = "lightblue";
  areaFim = createSprite(335, 190, 50, 40);
  areaFim.shapeColor = "lightblue";

  bola = createSprite(40, 190, 13, 13);
  bola.shapeColor = "green";
}

function draw() {
  background("write");

  text("Mortes: " + count, 80, 80);
  text("Level: " + level, 250, 80);
  if (keyDown("right")) {
    bola.x = bola.x + 4;
  }

  if (start == 1) {
    bola1.velocityY = 8;
    bola2.velocityY = 8;
    bola3.velocityY = -8;
    bola4.velocityY = -8;
    start = 0;
  }

  if (start == 2) {
    bola1.velocityY = 10;
    bola2.velocityY = 10;
    bola3.velocityY = -10;
    bola4.velocityY = -10;
    start = 0;
  }

  if (keyDown("left")) {
    bola.x = bola.x - 4;
  }

  bola1.bounceOff(wall1);
  bola1.bounceOff(wall2);
  bola2.bounceOff(wall1);
  bola2.bounceOff(wall2);
  bola3.bounceOff(wall1);
  bola3.bounceOff(wall2);
  bola4.bounceOff(wall1);
  bola4.bounceOff(wall2);

  if (
    bola.isTouching(wall11) ||
    bola.isTouching(bola1) ||
    bola.isTouching(bola2) ||
    bola.isTouching(bola3) ||
    bola.isTouching(bola)
  ) {
    bola.x = 40;
    bola.y = 190;
    count = count + 1;
  }

  if (bola.isTouching(wall12)) {
    bola.x = 40;
    bola.y = 190;

    level = level + 1;
    start += 2;
  }

  drawSprites();
}
