const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  world= myEngine.world;

  ground = new Ground(600,380,1200,20);

  rock = new Rock(1000,250,300,300)

  coach1 = new Boggie(100,370,60,60)
  coach2 = new Boggie(180,370,60,60)
  coach3 = new Boggie(260,370,60,60)
  coach4 = new Boggie(340,370,60,60)
  coach5 = new Boggie(420,370,60,60)

   s1 = new SlingShot(coach1.body,coach2.body)
   s2 = new SlingShot(coach2.body,coach3.body)
   s3 = new SlingShot(coach3.body,coach4.body)
   s4 = new SlingShot(coach4.body,coach5.body)
}

function draw() {
  background(bg);  
  Engine.update(myEngine);

  
  ground.show();
  coach1.show();
  coach2.show();
  coach3.show();
  coach4.show();
  coach5.show();


  s1.show();
  s2.show();
  s3.show();
  s4.show();

  rock.show();

  var collision = Matter.SAT.collides(coach5.body,rock.body)
   if(collision.collided)
   {
          flag = 1
   }
   if(flag === 1 )
   {
       textSize(30)
       text("Train Crash",500,50)
       crashSound.play()

   }


}

  function keyPressed()
  {
       if(keyCode === RIGHT_ARROW){
          
        Matter.Body.applyForce(coach5.body,{x:coach5.body.position.x, y:coach5.body.position.y},{x:0.5,y:0})
        trainSound.play()

       }
     
  }
