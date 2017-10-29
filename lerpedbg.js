"use strict"

class Background{
	constructor(_cols, tw){
		this.col = _cols;
		this.row = this.col/2;
		this.w = tw;
		this.tileNumberR = 0;
		this.tileNumberL = 0;
	}


	position(x,y,angle){
		translate(x,y);
		rotate(radians(angle));
	}

	// colorLerping the entire isometric grid 
	myLerpedBg(colorFrom, colorTo){
		push();
		colorMode(RGB);
		stroke(0);
		var from = colorFrom;
		var to = colorTo;
		var lerpInBetween = [];

		for (var i =0; i < this.col; i ++){
			lerpInBetween[i] = lerpColor(from, to, 0.1 * (i+1));
		}

		var w = this.w;
		var h = w * sin(radians(60));

		for(var j = 0; j < this.row; j++) {
			for (var i = 0; i < this.col; i++) {
				fill(lerpInBetween[i]);
				triangle(w * i, 0, w / 2 + w * i, -h, w + w * i, 0);
				if(i < this.col-1) {
					triangle(w + w * i, 0, w + w * i - w / 2, -h, w + w * i + w / 2, -h);  
				}
			}
			translate(w/2, -h);
			this.col--;  
		}

		translate(-w/2 * this.row, h * this.row);

		for(var j = 0; j < this.row; j++) {
			for (var i = 0; i < this.col + this.row; i++) {
				fill(lerpInBetween[i])
				triangle(w * i, 0, w / 2 + w * i, h, w + w * i, 0);
				if(i < this.col+this.row-1) {
					triangle(w + w * i, 0, w + w * i - w / 2, h, w + w * i + w / 2, h);  
				}
			}
			translate(w/2, h);
			this.col--;  
		}
		pop();
	}

}