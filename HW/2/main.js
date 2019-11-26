var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(name, color) {
        this.name = name;
        this.color = color;
    }
    Shape.prototype.display = function () { };
    ;
    return Shape;
}());
var Rectangular = /** @class */ (function (_super) {
    __extends(Rectangular, _super);
    function Rectangular(name, color, edge) {
        var _this = _super.call(this, name, color) || this;
        _this.edge = edge;
        return _this;
    }
    Rectangular.prototype.display = function () {
        _super.prototype.display.call(this);
        // console.log("edge :"+ this.edge)
    };
    Rectangular.prototype.getArea = function (height, length) {
        var area = (2 * height) + (2 * length);
        console.log("the Area of this rect:" + this.name + " is " + area);
        return area;
    };
    Rectangular.prototype.getPerimeter = function (height, length) {
        var perimeter = height * length;
        console.log("the perimeter of this rect: " + this.name + " is " + perimeter);
        return perimeter;
    };
    return Rectangular;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(name, color, radius) {
        var _this = _super.call(this, name, color) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.display = function () {
        _super.prototype.display.call(this);
        // console.log("radius :"+ this.radius)
    };
    Circle.prototype.getArea = function (height, length) {
        var area = (2 * height) + (2 * length);
        console.log("the Area of this circle is: " + this.name + " is " + area);
        return area;
    };
    Circle.prototype.getPerimeter = function (height, length) {
        var perimeter = height * length;
        console.log("the perimeter of this circle is: " + perimeter);
        return perimeter;
    };
    return Circle;
}(Shape));
var shapeArr = [];
shapeArr.length = 20;
// shapeArr[0] = new Rectangular("box1","blue",10)
for (var i = 0; i < shapeArr.length; i++) {
    var rand1 = Math.floor(Math.random() * Math.floor(100));
    var rand2 = Math.floor(Math.random() * Math.floor(100));
    // let's say rand 1 is the rect side
    if (rand1 > 49) {
        shapeArr[i] = new Rectangular("shape" + rand1 * rand2, "blue", rand1);
        console.log(i, shapeArr[i].getArea(rand1, rand2));
        console.log(i, shapeArr[i].getPerimeter(rand1, rand2));
    }
    // let's assume rand2 is the circle radius
    else {
        shapeArr[i] = new Circle("shape" + rand1 * rand2, "red", rand2);
        console.log(i, shapeArr[i].getArea(rand1, rand2));
        console.log(i, shapeArr[i].getPerimeter(rand1, rand2));
    }
}
for (var _i = 0, shapeArr_1 = shapeArr; _i < shapeArr_1.length; _i++) {
    var item = shapeArr_1[_i];
}
