const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;

var engine,world;
var thunder,thunderImg;
var boy,boyImg,drops;
var umbrella;
var maxDrops = 100;

function preload(){
    thunderImg = loadAnimation("images/thunderbolt/1.png","images/thunderbolt/2.png","images/thunderbolt/3.png","images/thunderbolt/4.png");
    boyImg = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png"
    ,"images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png",
    "images/Walking Frame/walking_8.png");
}

function setup(){
    engine = Engine.create();
	world = engine.world;
  
    thunder = createSprite(190,90,300,100);
    thunder.addAnimation("strike",thunderImg);
    thunder.scale = 0.25;

    boy = createSprite(190,400,300,100);
    boy.addAnimation("walking",boyImg);
    boy.scale = 0.25;

drops1 = new Drops(random(0,400),random(0,400),3,3);
drops2 = new Drops(random(0,400),random(0,400),3,3);
drops3 = new Drops(random(0,400),random(0,400),3,3);
drops4 = new Drops(random(0,400),random(0,400),3,3);
drops5 = new Drops(random(0,400),random(0,400),3,3);
drops6 = new Drops(random(0,400),random(0,400),3,3);
drops7 = new Drops(random(0,400),random(0,400),3,3);
drops8 = new Drops(random(0,400),random(0,400),3,3);
drops9 = new Drops(random(0,400),random(0,400),3,3);
drops10 = new Drops(random(0,400),random(0,400),3,3);
drops11 = new Drops(random(0,400),random(0,400),3,3);
drops12 = new Drops(random(0,400),random(0,400),3,3);
drops13 = new Drops(random(0,400),random(0,400),3,3);
drops14 = new Drops(random(0,400),random(0,400),3,3);
drops15 = new Drops(random(0,400),random(0,400),3,3);
drops16 = new Drops(random(0,400),random(0,400),3,3);
drops17 = new Drops(random(0,400),random(0,400),3,3);
drops18 = new Drops(random(0,400),random(0,400),3,3);
drops19 = new Drops(random(0,400),random(0,400),3,3);
drops20 = new Drops(random(0,400),random(0,400),3,3);
drops21 = new Drops(random(0,400),random(0,400),3,3);
drops22 = new Drops(random(0,400),random(0,400),3,3);
drops23 = new Drops(random(0,400),random(0,400),3,3);
drops24 = new Drops(random(0,400),random(0,400),3,3);
drops25 = new Drops(random(0,400),random(0,400),3,3);
drops26 = new Drops(random(0,400),random(0,400),3,3);
drops27 = new Drops(random(0,400),random(0,400),3,3);
drops28 = new Drops(random(0,400),random(0,400),3,3);
drops29 = new Drops(random(0,400),random(0,400),3,3);
drops30 = new Drops(random(0,400),random(0,400),3,3);
drops31 = new Drops(random(0,400),random(0,400),3,3);
drops32 = new Drops(random(0,400),random(0,400),3,3);
drops33 = new Drops(random(0,400),random(0,400),3,3);
drops34 = new Drops(random(0,400),random(0,400),3,3);
drops35 = new Drops(random(0,400),random(0,400),3,3);
drops36 = new Drops(random(0,400),random(0,400),3,3);
    umbrella = new Umbrella(190,360,35);

    
}

function draw(){
    
    Engine.update(engine);
    createCanvas(400,500);
    background("black");
    
    //drops.display();
    drops1.display();
    drops2.display();
    drops3.display();
    drops4.display();
    drops5.display();
    drops6.display();
    drops7.display();
    drops8.display();
    drops9.display();
    drops10.display();
    drops11.display();
    drops12.display();
    drops13.display();
    drops14.display();
    drops15.display();
    drops16.display();
    drops17.display();
    drops18.display();
    drops19.display();
    drops20.display();
    drops21.display();
    drops22.display();
    drops23.display();
    drops24.display();
    drops25.display();
    drops26.display();
    drops27.display();
    drops28.display();
    drops29.display();
    drops30.display();
    drops31.display();
    drops32.display();
    drops33.display();
    drops34.display();
    drops35.display();
    drops36.display();
    
 
      
    umbrella.display();
    
 
    drawSprites();

    
}   

