
var hasDocked=false
function preload(){
  bg = loadImage("spacebg.jpg");
  issimg = loadImage("iss.png");
 scimg = loadImage("spacecraft1.png");
 scimg1 = loadImage("spacecraft2.png");
 scimg2= loadImage("spacecraft3.png");
 scimg3= loadImage("spacecraft4.png");

}

function setup() {
  createCanvas(600,350);
  sc=createSprite(285,240);
  sc.addImage(scimg)
  sc.scale=0.15

  iss=createSprite(330,130);
  iss.addImage(issimg)
  iss.scale=0.25
}

function draw() {
  background(bg);  
  sc.addImage(scimg);
  if(!hasDocked){
    sc.x=sc.x+random(-1,1)

    if(keyDown("UP_ARROW")){
      sc.y=sc.y-2;
    }
    if(keyDown("LEFT_ARROW")){
      sc.addImage(scimg3)
      sc.x=sc.x-1;
    }

    if(keyDown("RIGHT_ARROW")){
      sc.addImage(scimg2)
      sc.x=sc.x+1;
  }

  if(keyDown("DOWN_ARROW")){
    sc.addImage(scimg1)
  }}
  if(sc.y<=(iss.y+70)&& sc.x<=(iss.x-10)){
    hasDocked=true;
    textSize(25)
    fill("white")
    text("Docking succesful",200,300)
  }

  drawSprites();
}