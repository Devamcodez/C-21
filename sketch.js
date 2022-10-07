var ball

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction: 0,
	density:1.2
	
}
ball= new Ball(100,600,10)
ground=new Ground(400,680,800,20)

leftSide=new Bin(550,620,20,100)
bottom= new Bin(610,660,100,20)
rightSide=new Bin(670,620,20,100)

matter.Bodies.circle(100,600,3,options)
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine
	ball.show()
	ground.show()
)
  drawSprites();
 
}



