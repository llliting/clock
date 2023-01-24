
// ArrayList<(int,int)> hours = new ArrayList();
// ArrayList<(int,int)> minutes = new ArrayList();
// // ArrayList<int,int> seconds = new ArrayList();

function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
	noStroke();
	reset();
	begin();
	s = second();

}

function draw() {
	if(second() != s){
		if(second() == 0){
			s = 0;
			console.log(minute())

			if(minute() == 0){
				if(hour() == 0){
					reset();
				}
				fill(69, 180, 212);
				square(350, 200, 300);
				fill(random()*255);
				circle(random(90,330), random(90,410), 30);
			}
			fill(27, 102, 126);
			square(300, 400 ,150);
			fill(random()*255);
			if(minute()%2 ==0){
				circle(random(360,620), random(210,390), 10);
			}
			else{
				circle(random(460,620), random(390,490), 10);
			}
		}
		else{
			fill(random()*255);
			circle(random(310,440), random(410,540), 5);
			s++;
		}
	}
}

function reset(){
	background(225);
	translate(0,0);
	fill(84, 142, 163);
	square(50, 50, 400);
	fill(69, 180, 212);
	square(350, 200, 300);
	fill(27, 102, 126);
	square(300, 400 ,150);
}

function begin(){
	for(let i = 0; i < hour(); i++){
		fill(random()*255);
		circle(random(90,330), random(90,410), 30);
	}
	for(let i = 0; i < minute(); i++){
		fill(random()*255);
		if(i%2 ==0){
			circle(random(360,620), random(210,390), 10);
		}
		else{
			circle(random(460,620), random(390,490), 10);
		}
	}
	for(let i = 0; i < second(); i++){
		fill(random()*255);
		circle(random(310,440), random(410,540), 5);
	}
}