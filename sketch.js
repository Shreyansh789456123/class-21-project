const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var ball
var wall1, wall2

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	
	var ball_options =
	{
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
      
	

	ball = Bodies.circle(200,11,20,ball_options)
	World.add(world,ball)

	ground = new Ground(width/2,590,width,20)
	wall1 = new Ground(600,530,20,120)
	wall2 = new Ground(800,530,20,120)
	






	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background(0);
  ground.show();
  wall1.show()
  wall2.show()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  
  drawSprites();
  Engine.update(engine);
 
}

function keyPressed()
{
	if ( keyCode === UP_ARROW)
	{
		console.log("applying force")
		console.log(ball.position)
        Body.applyForce(ball,{x:0,y:0},{x:7,y:-5.5})
	    console.log(ball.position)
	}



}



