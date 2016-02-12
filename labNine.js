var shape = { // create an object called shape
	type: "shape",
	getType: function() {
		return this.type;
	}
};

// Triangle's properties
function Triangle(a, b, c) {
	this.a = a;
	this.b = b;
	this.c = c;
}

// Triangle prototype
Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;
Triangle.prototype.type = "triangle";

// getPerimeter method
Triangle.prototype.getPerimeter = function() {
	return "Perimeter: " + this.a + this.b + this.c + " units";
};

// testing implementation
var t = new Triangle(1, 2, 3); 
console.log(t.constructor);
console.log("Is a prototype of shape: " + shape.isPrototypeOf(t));
console.log(t.getPerimeter());
console.log("Type of shape: " + t.getType());



// STARTED WORKING ON ISOCELES, EQUILATERAL SUBCLASSES BUT COULD NOT FIGURE OUT

// Isoceles subclass
function Isoceles(a, b, c) {
	this.a = a;
	this.b = b;
	this.c = c;
}

Isoceles.prototype = Triangle;
Isoceles.prototype.constructor = Isoceles;
Triangle.prototype.type = "triangle";

// Equilateral subclass
function Equilateral(a) {
	this.a = a;
}

Equilateral.prototype = Triangle;
Equilateral.prototype.constructor = Equilateral;
Equilateral.prototype.type = "triangle";