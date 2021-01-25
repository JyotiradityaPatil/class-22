const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);

  // console.log(box);
  // console.log(box.position.x);
  // console.log(box.position.y);

  var ball_options = {
    restitution: 1
  }
  ball = Bodies.circle(200,0,15, ball_options);
  World.add(world,ball);

}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,15,15);
}