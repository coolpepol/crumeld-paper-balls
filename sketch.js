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
	rect(p.x,p.y,this.width,this.height)
  }
  


}
var shoot = true
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
		density:0.5
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200,200,30,ball_options)
	World.add(world,ball)
	Engine.run(engine);
	yeet = new stationary(780,350,20,700)
	left = new stationary(700,550,50,200)
	right = new stationary(500,550,50,200)
	botem = new stationary(400,650,800,50)
  
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball, ball.position,{x:4,y:-89})
		shoot = false
	}

}



function draw() {
	background(51);
	rectMode(CENTER);
	ellipseMode(RADIUS);
	yeet.show()
	left.show()
	right.show()
	botem.show()
	
	Engine.update(engine);
	ellipse(ball.position.x,ball.position.y,30)
    console.log(ball.position)

  }




