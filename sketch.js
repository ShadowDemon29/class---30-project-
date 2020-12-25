const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var enging, world;
var block1
var polygon, slingshot
var gameState = "onSling"

function preload() {

}
function setup() {
    var canvas = createCanvas(1200,400);
    background("black")
    enging = Engine.create();
    world = enging.world;

    block1 = new Block(330,235,30,40);
    block2 = new Block(360,235,30,40);
    block3 = new Block(390,235,30,40);
    block4 = new Block(420,235,30,40);

    polygon = new Polygon(200,50);

    slingshot = new SlingShot(polygon.body,{x:200, y:50});


    
}
function draw() {
    block1.display();
    block2.display();
    block3.display();
    block4.display();

    slingshot.display();
    polygon.display();
    
    

}