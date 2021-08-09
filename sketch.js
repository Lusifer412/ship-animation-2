var ship,ship_running, edges;
var groundImage;

function preload(){
ship_running = loadAnimation("ship1.png", "ship2.png", "ship3.png", "ship4.png")
groundImage = loadImage("sea.png")

}

function setup(){
  createCanvas(400,400);

//ship creating
ship = createSprite(50,50,20,50)
ship = loadAnimation("running", ship_running)
 edges = createEdgeSprites();
}

function draw() {
  background("blue");

  console.log(ship.y)
  ship.collide(edges[3])
  drawSprites();
}