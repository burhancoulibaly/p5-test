function setup(){
  console.log(window.innerWidth+" "+window.innerHeight)
  createCanvas(window.innerWidth,window.innerHeight)
}

function draw(){
  if(mouseIsPressed){
    radius = Math.round((Math.random() * 40 + 1))
    ellipse(mouseX,mouseY,radius,radius);
    fill(Math.round((Math.random() * 255)),Math.round((Math.random() * 255)),Math.round((Math.random() * 255)));
    stroke(255)
  }
}
