function preload(){
}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();



}
function draw(){
    image(video, 200, 150, 220, 200);
   
    
    
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 460, 20);
    rect(90, 420, 460, 20);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(40, 50, 20, 350);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(540, 50, 20, 350);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(550, 50, 80);
  
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(550, 430, 80);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 430, 80);
}

function take_snapshot(){
    save('with_border.png')
}

