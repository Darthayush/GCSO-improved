var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(2600,800);
  gr =createSprite(50,500,50,50);
  gr.shapeColor="green";
  red =createSprite(50,600,50,50);
  red.shapeColor="red";
  yw =createSprite(50,550,50,50);
  yw.shapeColor="yellow";
  car =createSprite(50,200,50,50);
car.shapeColor="white";

wall=createSprite(1300,250,50,height/2);
wall.shapeColor="blue";
speed=random(55,90);
weight=random(400,900);
}

function draw() {
  background(0);  
  deformation=0.5*weight*speed*speed/22500
fill("green");
text("= speed 50 km/hr, safe from serious damage ",100,500);
fill("red");
text("= speed 150 km/hr,there has been a severe Brain damage",100,600);
fill("yellow");
text("= speed 100 km/hr, you are badly injured but safe",100,550);
    car.velocityX=speed;  
   if(car.isTouching(wall)&&deformation<100){
     car.shapeColor="green"
   }
   if(car.isTouching(wall)&&deformation<180 && deformation>100){
    car.shapeColor="yellow"
  }
   if(car.isTouching(wall)&&deformation>180){
    car.shapeColor="red"
  }

    car.collide(wall);  
    drawSprites();

}