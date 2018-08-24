let cam, can;

function setup() {
	can = createCanvas(windowWidth, windowHeight);
	background(100);
	cam = createCapture(VIDEO);
	cam.hide();
	// cam.size(windowWidth/2-10, 400);
}

function draw() {
	
	image(cam, 0, 0, width, height);
	noStroke();
	fill(random(200,255),random(100,200));
	ellipse(random(width), random(height), random(10,30));
}

setInterval(changeColor,1000);

function changeColor(){
	tint(random(255),random(255),random(255));
}