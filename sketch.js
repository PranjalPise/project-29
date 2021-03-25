
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;




function setup(){
    var canvas = createCanvas(900,500);
    engine = Engine.create();
   world = engine.world;

   ground1=new Ground (350,350,250,10);
   box1 =new Box  (270,300,30,30);
   box2=new Box  (300,300,30,30);
  box3 =new Box   (330,300,30,30);
    box4=new Box   (360,300,30,30); 
    box5 =new Box   (390,300,30,30);
     box6 =new Box   (420,300,30,30);

   box7 =new Box   (285,270,30,30);
    box8=new Box   (315,270,30,30);
    box9 =new Box   (345,270,30,30);
    box10=new Box   (375,270,30,30);
    box11 =new Box   (405,270,30,30);

    box12 =new Box   (300,240,30,30);
   box13=new Box  (330,240,30,30);
   box14 =new Box  (360,240,30,30);
   box15=new Box  (390,240,30,30);

   box16=new Box  (315,210,30,30);
   box17 =new Box  (345,210,30,30);
   box18=new Box  (375,210,30,30);

   box19 =new Box  (330,180,30,30);
   box20=new Box  (360,180,30,30);
   
   box21=new Box  (345,150,30,30);

    polygon=new Polygon (56,241,50,50);
   shot=new Shot (polygon.body,{x:56,y:241});



}
function draw(){
    background("black");

    Engine.update(engine);

   
    
    ground1.display();
    box1.display();
    box2.display();
     box3.display();
    box4.display();
     box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();

     box12.display();
    box13.display();
    box14.display();
    box15.display();

     box16.display();
    box17.display();
    box18.display();

    box19.display();
    box20.display();
   
    box21.display();
    
    polygon.display();
    shot.display();

    
    fill("blue");
    text(mouseX+","+mouseY,mouseX,mouseY);
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon .body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    shot.fly();
}