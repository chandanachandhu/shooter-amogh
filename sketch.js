const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ball;
var slingShot;


function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
 


  
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(56,44,44); 
 
  


  slingShot.display();
}
