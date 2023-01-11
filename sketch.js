var towerImg, tower;
var doorImg, door, doorsGroup;
var railImg, rail, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg=loadImage("tower.png")
  ghostImg=loadImage("ghost-standing.png")
  doorImg=loadImage("door.png")
  railImg=loadImage("climber.png")
}

function setup() {
  createCanvas(600, 600);
 tower=createSprite(300,300)
 tower.addImage("tower",towerImg)
tower.velocityY = 1

ghost=createSprite(200,200);
ghost.addImage("ghost",ghostImg)
ghost.scale=0.35
console.log(ghost.depth)
  
}

function draw() {
  background(200);
  drawSprites()
if (tower.y>600){
  tower.y=300
}

if(keyDown(RIGHT_ARROW)){
  ghost.x=ghost.x+5
}

if(keyDown(LEFT_ARROW)){
  ghost.x=ghost.x-5
}

if(keyDown(UP_ARROW)){
  ghost.velocityY=-10
}

ghost.velocityY=ghost.velocityY+1

rails()
}
function rails(){
  if(frameCount%250===0){
  door=createSprite(100,100)
  door.addImage("door",doorImg)
  door.velocityY=1
  door.x=Math.round(random(50,550))
  door.depth=ghost.depth
  ghost.depth=ghost.depth+1

  rail=createSprite(100,150)
  rail.addImage("rail",railImg)
  rail.velocityY=1
  rail.x=door.x
  invisibleBlock=createSprite(100,155)
  invisibleBlock.x=door.x
  invisibleBlock
  }
}