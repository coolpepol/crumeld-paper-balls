class stationary {
	constructor(x,y,w,h){
	  this.width = w
	  this.height = h
	  this.body = Bodies.rectangle(x,y,w,h,{isStatic:true})
	  World.add(world,this.body)
	  console.log(this.body)
  }
	 show() {
	var p = this.body.position
	rectMode(CENTER)
	fill(255,0,0)
	rect(p.x,p.x,p.width,p.height)
  }
  


}
var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var yeet
var right
var left
var botem
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:0.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200,200,30)
	World.add(world,ball)
	Engine.run(engine);
	yeet = new stationary(200,20,200,50)
	left = new stationary(20,200,50,200)
	right = new stationary(380,200,50,200)
	botem = new stationary(20,400,200,50)
  
  
}


function draw() {
	
	rectMode(CENTER);
	ellipseMode(RADIUS);
	yeet.show()
	left.show()
	right.show()
	botem.show()
	background(51);
	Engine.update(engine);
	ellipse(ball.position.x,ball.position.y,30)
  }




