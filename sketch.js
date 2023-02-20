let luz = true;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if(luz){
    background(255);
  }else{
    background(0);
  }
}

function mouseClicked() {
  luz = !luz;
}
