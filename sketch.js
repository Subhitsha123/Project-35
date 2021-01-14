var dog, happyDog, database, food, foodStock;
var database;

function preload()
{
  dogImg = loadImage("images/dogImg.png");
  happyImg = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = createSprite(250,250,100,100);
  dog.addImage(dogImg);
  dog.scale = 0.5;

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
}


function draw() {  

  background(46, 139, 87);

  console.log(food);

  if(food!==undefined){

  if (keyWentDown(UP_ARROW)&&food>=0){
    writeStock(food);
    dog.addImage(happyImg);
    dog.scale = 0.5;
       
    console.log(food);
  }
  /*else{
    dog.addImage(dogImg);
    dog.scale = 0.5;
  }*/
}

if (food<=0){
  dog.addImage(dogImg);
    dog.scale = 0.5;
}

  drawSprites();

  textSize(20);
  fill(255);
  text("Food Remaining:"+food,200,50);


  
  }

function readStock(data){
  food = data.val();

}

function writeStock(x){

  if (x<=0){
    x = 0;
  }
  else{
    x = x-1;
  }

  database.ref('/').update({
    Food:x
  })
}



