"use strict"

class FrontPolygon{
	constructor(_cols, tw){
		this.col = _cols;
		this.row = this.col/2;
		this.w = tw; // width of each individual triangle
	}

	restoreCoord(angle){
		var x = (this.col / 4) * this.w + this.w / 2;
		var y = -(this.col / 2 - 1) * this.w * cos(radians(30));
		translate(x,y);
		rotate(radians(angle));
	}

	offsetFrontPolygon(x,y){
		translate(x,y)
	}

	// draw the polygon in the front
	drawFrontPoly(){
		push();
		var frontPolyWidth = this.row * this.w;
		var hy = frontPolyWidth / 2;
		var hx = frontPolyWidth * cos(radians(30));

		stroke(0);
		strokeWeight(4);
		triangle(0,0, 0, -frontPolyWidth, hx, -hy);
		triangle(0,0, 0, frontPolyWidth, -hx, hy);

		triangle(0,0, 0, frontPolyWidth, hx, hy);
		triangle(0,0, 0, -frontPolyWidth, -hx, -hy);

		triangle(0,0, -hx, hy, -hx,-hy);
		triangle(0,0, hx, hy, hx,-hy);
		pop();
	}



}