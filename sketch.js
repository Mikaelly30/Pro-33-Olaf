var backgroundImg;
var engine, world;
var olaf;
var snow;

function preload(){
  backgroundImg = loadImage("bg.jpg");
  olaf1 = loadAnimation("olafAndando1.png")
  olafandando = loadAnimation("olafAndando2.png");
  olafsentado = loadAnimation("olafSentado.png");
  neve = loadImage("neve.png");
}

function setup() {
  createCanvas(800,400);
  
  
  olaf = createSprite(450,280);
  olaf.addAnimation("olafEmPe", olaf1);
  olaf.addAnimation("olafAndando", olafandando);
 
  olaf.addAnimation("olafSentado", olafsentado);
  olaf.scale = 0.2;

  

}

function draw() {
  background(backgroundImg);  
  textSize(30);
  fill("white")
  text("Oi eu sou o Olaf e gosto de abraços quentinhos!!!",35,50);

  textSize(25);
  fill("white")
  text("Clique nas setas do seu teclado para mover o Olaf!",70,80);

  if (World.frameCount % 50 == 0) {
    var snow = createSprite(Math.round(random(50, width-50),40, 10, 10));
    snow.addImage(neve);
    snow.scale = 0.1;
    snow.velocityY = 3;
  
  }
  

  drawSprites();
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    olaf.changeAnimation("olafAndando", olafandando);
    olaf.x = olaf.x - 20;
  }

  if(keyCode === RIGHT_ARROW){
    olaf.changeAnimation("olafAndando", olafandando);
    olaf.x = olaf.x + 20;
  }

  if(keyCode === DOWN_ARROW){
    olaf.changeAnimation("olafSentado", olafsentado);
  }
  
  

}

