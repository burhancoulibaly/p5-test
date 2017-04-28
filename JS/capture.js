function setup(){
  console.log(displayWidth+" "+displayHeight);
  createCanvas(displayWidth,displayHeight);
  video = createCapture(VIDEO);
  video.size(320,240);
  video.hide();
}

function draw(){
  tint(255,0,150);
  image(video,0,0);
}
