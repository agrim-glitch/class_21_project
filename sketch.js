var bullet, wall;
var speed, weight;
var thickness

function setup() {
  createCanvas(1900,400);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(15,84);

  wall = createSprite(1500, 200, thickness, 500);
  wall.shapeColor=color(80,80,80)
  bullet = createSprite(0,200,100,10);
}

function draw() {
  background(255,255,255);  

  bullet.velocityX = speed;

  if(wall.x-bullet.x <= wall.width/2 + bullet.width/2 )
   {

    bullet.velocityX = 0;
    var  damage = 0.5 * weight *speed* speed/(thickness*thickness*thickness);

    if(damage<10){
      wall.shapeColor= color(0,255,0)
    }
    if(damage>10){

      wall.shapeColor = color(255,0,0);
    }
   
       
  
  


}

  drawSprites();
}

