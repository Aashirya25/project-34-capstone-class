
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;

var blocksV = []
var blocksH = []
var blocksH2 = []
var triangles = []

var blocksV1 = []
var blocksV2 = []
var triangles2 = []

var blockV3 = []
var blockV4 = []
var blockH3 = []
var blockH4 = []
var triangleH = []

var slingshot


function preload(){
  backgroundImg = loadImage("bg.png");
}

function setup() {
  var canvas = createCanvas(1280,570);
  engine = Engine.create();
  world = engine.world

  //slingshot
  slingshotimg = createImg("slingshot.png");
  slingshotimg.position(10,340);
  slingshotimg.size(150,150);
  
  //shoot button
 

  bird = new Bird(100,330)
  ground4 = new Ground (0,570,10000,20)
  slingshot = new Slingshot(bird.body,{x:110,y:350});
  //first tower objects
  ground1 = new Ground(700,190,200,20)
  for(let i = 0; i<5;i++){
    blocksV[i] = new Block(750,130,30,30)
  }

  for(let i = 0; i<4;i++){
    blocksH[i] = new Block(630-i*-30,130,30,30)
  } 

  for(let i = 0; i<4;i++){
    blocksH2[i] = new Block(630-i*-30,130,30,30)
  } 

  for(let i = 0; i<5;i++){
    triangles[i]= new Triangle(630-i*-30,10)
  } 

  //second tower objects
  ground2 = new Ground(1100,300,200,20)
  for(let i = 0; i<3;i++){
    blocksV1[i] = new Block(1050,130,40,40)
  }

  for(let i = 0; i<3;i++){
    blocksV2[i] = new Block(1130,130,40,40)
  } 
 
  for(let i = 0; i<5;i++){
    triangles2[i]= new Triangle(1090,10)
  } 

  //tower 3 objects
  ground3 = new Ground(900,500,430,20)
  for(let i = 0; i<4;i++){
    blockV3[i] = new Block(825,300,35,35)
  }

  for(let i = 0; i<4;i++){
    blockV4[i] = new Block(950,290,35,35)
  }

  for(let i = 0; i<2;i++){
    blockH3[i] = new Block(895-i*2,290,35,35)
  } 

  for(let i = 0; i<2;i++){
    blockH4[i] = new Block(895-i*2,290,35,35)
  } 

  for(let i = 0; i<4;i++){
    triangleH[i]= new Triangle(830-i*-40,240)
  } 

}


function draw() 
{
  background(51);
  Engine.update(engine);
  image(backgroundImg, 0, 0, width, height);
  ground1.display()
  ground4.display()
  ground2.display()
  ground3.display()
  bird.display()
  slingshot.show()

  //displaying tower 1
  for (let block of blocksV){
  block.display()
  }
  for (let block of blocksH){
    block.display()
  }
  for (let block of blocksH2){
    block.display()
  }

  for (let T1 of triangles){
    T1.display()
    }
  
  //displaying tower 2
  for(let B1 of blocksV1){
  B1.display()
  }
  for(let B1 of blocksV2){
    B1.display()
    }
  for (let T1 of triangles2){
    T1.display()
    }

//displaying tower 3
  for(let B1 of blockV3){
    B1.display()
    }
  for(let B1 of blockV4){
    B1.display()
  }
  for(let B1 of blockH3){
    B1.display()
  }
  for(let B1 of blockH4){
    B1.display()
  }
  for (let T1 of triangleH){
    T1.display()
    }
    if (keyCode === DOWN_ARROW) {
      slingshotimg.position(10,400);
    }
    if (keyCode === UP_ARROW) {
      slingshotimg.position(10,100);
    }

    if (keyCode == 32){
      World.remove(world,bird.body)
      bird = new Bird(100,330)
      slingshot.attach(bird.body)
    }
    if (key == ""){
      World.remove(world,bird.body)
      bird = new Bird(100,330)
      slingshot.attach(bird.body)
    }
    textSize(20)
    text("Use your mouse to shoot the bird, Click the space bar to get a new bird and press R to release it",20,20)
    text("Destory all the towers using the bird",20,40)

  }



function mouseReleased (){
  setTimeout(() => {
  slingshot.fly()
  },100)
}

function keyPressed(){
  if (key == ""){
    World.remove(world,bird.body)
    bird = new Bird(100,330)
    slingshot.attach(bird.body)
  }
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY}); 
}
