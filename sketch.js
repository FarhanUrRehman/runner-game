var road,boy,bomb,coin,energyDrink;
var roadImg,boyImg,coinImg,energyDrinkImg

function preload(){
  //pre-load images
  roadImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");

  
}

function setup(){
  createCanvas(400,400);
  //create sprites here

  road = createSprite(200,200);
  road.addImg("path.png")
path.velocityY = 4;
  road.scale=1.2

  boy = createSprite(70,580,20,20);
  boy.addAnimation("runner-1.png","Runner-2.png");
 boy.scale= 0.08;

 
}

function draw() {
  background(0);

 


}
