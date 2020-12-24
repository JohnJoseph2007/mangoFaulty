
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var treeImage;
var boyImage;

function preload()
{
  treeImage = loadImage("sprites/tree.png");
  boyImage = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	gr = new Ground();

  stone = new Stone();
  cnstrnt = new ConstraintClass(stone.body, {x:120, y:560});
  
  //mangoes
  m1 = new Mangoes(490, 270);
  m2 = new Mangoes(580, 230);
  m3 = new Mangoes(620, 300);
  m4 = new Mangoes(470, 400);
  m5 = new Mangoes(380, 350);
  m6 = new Mangoes(640, 360);
  m7 = new Mangoes(450, 310);

  //boy
  boy = createSprite(170, 600, 50, 100);
  boy.addImage("boy image", boyImage);
  boy.scale = 0.1;

  //tree
  tree = createSprite(565, 450, 50, 100);
  tree.addImage("tree image", treeImage);
  tree.scale = 0.4;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  drawSprites();

  gr.display();
  stone.display();
  cnstrnt.display();
  
  //mango display
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();
  m6.display();
  m7.display();

  drop(stone, m1);
  drop(stone, m2);
  drop(stone, m3);
  drop(stone, m4);
  drop(stone, m5);
  drop(stone, m6);
  drop(stone, m7);
 
}

function mouseDragged() {
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
  cnstrnt.fly();
}

function drop(bodya, bodyb) {
  stpos = bodya.body.position;
  manpos = bodyb.body.position;
  var distance = dist(stpos.x, stpos.y, manpos.x, manpos.y);
  if(distance<=50) {
      Matter.Body.setStatic(bodyb.body, false);
  } else {
      Matter.Body.setStatic(bodyb.body, true);
  }
}

function keyPressed() {
  if(keyCode === 32) {
    cnstrnt.goback();
  }
}