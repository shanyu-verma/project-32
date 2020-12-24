
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint = Matter.Constraint;


var ground1,ground2,ground3;
var ball;
var chain;
var block1;
var backgroundImg;

var score=  0;
var gameState = "onSling";



function preload() {

    //backgroundImg = loadImage("sprites/bg.png");

    getTime();


}


function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(600,780,1200,30);
	ground2 = new Ground(550,600,300,10);
	ground3 = new Ground(1000,300,400,10);

	ball = new Ball(200,400,30);

	chain = new SlingShot(ball.body,{x:200,y:400});
	block1 = new Block(550,570,30,50);
	block2 = new Block(520,570,30,50);
	block3 = new Block(490,570,30,50);
	block4 = new Block(460,570,30,50);
	block5 = new Block(430,570,30,50);
	block6 = new Block(580,570,30,50);
	block7 = new Block(610,570,30,50);
	block8 = new Block(640,570,30,50);
	block9 = new Block(670,570,30,50);
	

	block10 = new Block(550,550,30,50);
	block11 = new Block(520,550,30,50);
	block12 = new Block(490,550,30,50);
	block13 = new Block(460,550,30,50);
	block14 = new Block(580,550,30,50);
	block15 = new Block(610,550,30,50);
	block16 = new Block(640,550,30,50);

	

	
	block17 = new Block(550,530,30,50);
	block18 = new Block(520,530,30,50);
	block19 = new Block(490,530,30,50);
	//block20 = new Block(460,530,30,50);
	block21 = new Block(580,530,30,50);
	block22 = new Block(610,530,30,50);
	//block23 = new Block(640,530,30,50);

	
	block24 = new Block(1000,270,30,50);
	
	block26 = new Block(970,270,30,50);
	

	block27 = new Block(940,270,30,50);
	block28 = new Block(910,270,30,50);
	block29 = new Block(880,270,30,50);
	block30 = new Block(850,270,30,50);
	block31 = new Block(820,270,30,50);
	block32 = new Block(1030,270,30,50);
	
	block33 = new Block(1060,270,30,50);
	block34 = new Block(1090,270,30,50);
	block35 = new Block(1120,270,30,50);
	
	
	block36 = new Block(1150,270,30,50);
	block37 = new Block(1170,270,30,50);


	block38 = new Block(1000,250,30,50);
	block39 = new Block(1030,250,30,50);
	block40 = new Block(1060,250,30,50);
	block41 = new Block(1090,250,30,50);
	block42 = new Block(1120,250,30,50);
	block43 = new Block(1150,250,30,50);
	block44 = new Block(970,250,30,50);
	block45 = new Block(940,250,30,50);
	block46 = new Block(910,250,30,50);
	block47 = new Block(880,250,30,50);
	
	//block48 = new Block(850,270,30,50);
	//block49 = new Block(820,270,30,50);
	//block50 = new Block(790,270,30,50);
	/*
	block25 = new Block(1030,270,30,50);
	block25 = new Block(1030,270,30,50);
	block25 = new Block(1030,270,30,50);
	block25 = new Block(1030,270,30,50);
	block25 = new Block(1030,270,30,50);

*/
	Engine.run(engine);
  
}


function draw() {

	rectMode(CENTER);
	if(backgroundImg){
        background(backgroundImg);
    }

	textSize(18);
	fill("white");
	stroke("white");
	text("PRESS SPACE TO RESET THE BALL",200,100);
	text("S C O R E  :  " + score ,200,200);

	ground1.display();
	ground2.display();
	ground3.display();

	ball.display();
	chain.display();
	fill("yellow");
	//stroke("yellow");
	block1.display();
	block2.display();
	block3.display();
	block4.display();
	block5.display();
	block6.display();
	block7.display();
	block8.display();
	block9.display();

	fill("lightblue");
	block10.display();
	block11.display();
	block12.display();
	block13.display();
	block14.display();
	block15.display();
	block16.display();

	fill("lightgreen")
	block17.display();
	block18.display();
	block19.display();
	//block20.display();
	block21.display();
	block22.display();
	//block23.display();
	
	fill("yellow");
	block24.display();
	

	block26.display();
	
	block27.display();

	block28.display();
	block29.display();
	block30.display();
	block31.display();
	block32.display();
	
	block33.display();
	block34.display();
	block35.display();
	block36.display();
	block37.display();

	fill("lightblue");
	block38.display();
	block39.display();
	block40.display();
	block41.display();
	block42.display();
	block43.display();
	block44.display();
	block45.display();
	block46.display();
	block47.display();
	//block48.display();
	//block49.display();
	//block50.display();
	


	block1.score();
	block2.score();
	block3.score();
	block4.score();
	block5.score();
	block6.score();
	block7.score();
	block8.score();
	block9.score();

	//fill("lightblue");
	block10.score();
	block11.score();
	block12.score();
	block13.score();
	block14.score();
	block15.score();
	block16.score();

	//fill("lightgreen")
	block17.score();
	block18.score();
	block19.score();
	//block20.display();
	block21.score();
	block22.score();
	//block23.display();
	
	//fill("yellow");
	block24.score();
	

	block26.score();
	
	block27.score();

	block28.score();
	block29.score();
	block30.score();
	block31.score();
	block32.score();
	
	block33.score();
	block34.score();
	block35.score();
	block36.score();
	block37.score();

	//fill("lightblue");
	block38.score();
	block39.score();
	block40.score();
	block41.score();
	block42.score();
	block43.score();
	block44.score();
	block45.score();
	block46.score();
	block47.score();
	

}	


function mouseDragged(){

	Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
	
}

function mouseReleased(){
	chain.fly();
	
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(ball.body,{x:235,y:420});
		chain.attach(ball.body);
	}
}

async function getTime(){
    
    var response =  await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();
    //console.log("HELLO");
    //console.log(responseJSON);

    var dateTime = responseJSON.currentDateTime;
    var hour = dateTime.slice(11,13);
    if(hour >= 06 && hour<= 19){
        bg = "bg.png";
    }
    else{
        bg = "bg2.jpg";
    }
    backgroundImg = loadImage(bg);
    //console.log(backgroundImg);

}