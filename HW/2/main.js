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
    Shape.prototype.display = function () {
        console.log("name :" + this.name);
        console.log("color :" + this.color);
    };
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
        console.log("edge :" + this.edge);
    };
    Rectangular.prototype.getArea = function (height, length) {
        var area = (2 * height) + (2 * length);
        console.log("the Area of " + this.name + " is " + area);
        return area;
    };
    Rectangular.prototype.getPerimeter = function (height, length) {
        var perimeter = height * length;
        console.log("the perimeter of " + this.name + " is " + perimeter);
        return perimeter;
    };
    return Rectangular;
}(Shape));
var shapeArr = [];
shapeArr.length = 19;
// shapeArr[0] = new Rectangular("box1","blue",10)
for (var i = 0; i < shapeArr.length; i++) {
    var rand1 = Math.floor(Math.random() * Math.floor(201));
    var rand2 = Math.floor(Math.random() * Math.floor(201));
    shapeArr.push(new Rectangular("shape" + rand1 * rand2, "blue", 10));
    for (var _i = 0, shapeArr_1 = shapeArr; _i < shapeArr_1.length; _i++) {
        var item = shapeArr_1[_i];
        if (item instanceof Rectangular) {
            shapeArr[i].getArea(rand1, rand2);
            shapeArr[i].getPerimeter(rand1, rand2);
        }
    }
}
