function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent("p5container");
}

function draw() {
    background(220);

    if(mouseX > 0 && mouseX < width/2) {
    //left - Smiley face
    ellipse(mouseX > 0 && mouseX < width/2, 50, 50);


    }else{
        //right - Frowny face
        fill(255,0,0);
        ellipse(mouseX > 0 && mouseX < width/2, 50, 50);
    }

}