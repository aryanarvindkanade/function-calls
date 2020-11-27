function setup() {
  createCanvas(800,400);
  fixedrectangle = createSprite(400, 200, 50, 50);
  fixedrectangle.shapeColor = ("green");
  movingrectangle = createSprite(700, 200, 30, 30);
  movingrectangle . shapeColor = ("green");
  gameobject1 = createSprite(200, 200, 30, 30);
  gameobject1.shapeColor = ("green");
  gameobject2 = createSprite(300, 100, 30, 30);
  gameobject2.shapeColor = ("green");
  gameobject3 = createSprite(600, 100, 30, 30);
  gameobject3.shapeColor = ("green");
  gameobject4 = createSprite(350, 300, 30, 30);
  gameobject4.shapeColor = ("green"); 
}

function draw() {
  background("black"); 
  
  movingrectangle.x = mouseX
  movingrectangle.y = mouseY

  if(isTouching(movingrectangle, gameobject2)){
    gameobject2.shapeColor = ("red")
    movingrectangle.shapeColor = ("red")
  }else{
    gameobject2.shapeColor = ("green")
    movingrectangle.shapeColor = ("green")
  }

  drawSprites();
}


