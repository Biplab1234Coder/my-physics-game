const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ground;


function preload(){

  ground = loadImage('ground.png');



}
  

function setup() 
{
  
  createCanvas(1366,691);
  frameRate(1000);

  engine = Engine.create();
  world = engine.world;

  ground = createSprite(420,620,100,100);




  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);

  push();
  imageMode(CENTER);
  pop();

  Engine.update(engine);

  drawSprites();

}