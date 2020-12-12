var movingrect,fixedrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 100);
  movingrect=createSprite(400, 200, 100, 50);
  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
  fixedrect.debug=true;
  movingrect.debug=true;
}

function draw() {
  background(0);
  movingrect.x=mouseX;
  movingrect.y=mouseY;

  console.log(fixedrect.x-movingrect.x);
  if(movingrect.x-fixedrect.x<=fixedrect.width/2+movingrect.width/2 &&
    fixedrect.x-movingrect.x<=fixedrect.width/2+movingrect.width/2 &&
    fixedrect.y-movingrect.y<=fixedrect.height/2+movingrect.height/2 &&
    movingrect.y-fixedrect.y<=fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  drawSprites();
}