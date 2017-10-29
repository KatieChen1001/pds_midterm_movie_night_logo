var frontPoly, backPoly, bg;

var letterColor = 168;

var columns = 12;
var smallTriWidth = 30; //isometric triangle width

var colorA, colorB; //lerp bg start and finish color 

// triangles pointing out 
var colorsObjectArrayOut = [
	{ indexNum: 4, coloring: letterColor },
	{ indexNum: 5, coloring: letterColor },
	{ indexNum: 15, coloring: letterColor },
	{ indexNum: 16, coloring: letterColor },
	{ indexNum: 25, coloring: letterColor },
	{ indexNum: 26, coloring: letterColor },
	{ indexNum: 27, coloring: letterColor },
	{ indexNum: 28, coloring: letterColor },
	{ indexNum: 29, coloring: letterColor },
	{ indexNum: 35, coloring: letterColor },
	{ indexNum: 36, coloring: letterColor },
	{ indexNum: 37, coloring: letterColor },
	{ indexNum: 38, coloring: letterColor },
	{ indexNum: 39, coloring: letterColor },
]

// triangles pointing inside
var colorsObjectArrayIn = [
	{ indexNum: 3, coloring: letterColor },
	{ indexNum: 4, coloring: letterColor },
	{ indexNum: 14, coloring: letterColor },
	{ indexNum: 15, coloring: letterColor },
	{ indexNum: 25, coloring: letterColor },
	{ indexNum: 26, coloring: letterColor },
	{ indexNum: 27, coloring: letterColor },
	{ indexNum: 28, coloring: letterColor },
	{ indexNum: 29, coloring: letterColor },
	{ indexNum: 35, coloring: letterColor },
	{ indexNum: 36, coloring: letterColor },
	{ indexNum: 37, coloring: letterColor },
	{ indexNum: 38, coloring: letterColor },

]



	function setup() {
		createCanvas(800, 800);
		backPoly = new polygon(columns,smallTriWidth);
		frontPoly = new FrontPolygon(columns, smallTriWidth);
		bg = new Background(columns, smallTriWidth);
		colorA = color(243,41,236);
		colorB = color(92,232,255);

	}

	function draw() {
		background(255);
		noStroke();
		
		// ====== draw polygon in the back ======= //
		push();
		backPoly.position(300,100,90);
		// ======= first fill bg color ===== //
		bg.myLerpedBg(colorA,colorB);
		// ======= then get into each individual triangle 
		// ======= to create typography/pattern ====== //
		backPoly.drawIsometric(colorsObjectArrayOut,colorsObjectArrayIn);
		pop();

		// ====== draw polygon in the front ===== //
		push();
		frontPoly.restoreCoord(150);
		frontPoly.offsetFrontPolygon(25,-smallTriWidth*cos(radians(30))*2+10);
		frontPoly.drawFrontPoly();
		pop();
		
		noLoop();


	}