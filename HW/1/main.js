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
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.display = function () {
        console.log("First Name :" + this.firstName);
        console.log("Last Name :" + this.lastName);
    };
    return Person;
}());
var AirportEmployee = /** @class */ (function (_super) {
    __extends(AirportEmployee, _super);
    function AirportEmployee(firstName, lastName, experience, nationality) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.experience = experience;
        _this.nationality = nationality;
        return _this;
    }
    AirportEmployee.prototype.display = function () {
        _super.prototype.display.call(this);
    };
    return AirportEmployee;
}(Person));
var Passanger = /** @class */ (function (_super) {
    __extends(Passanger, _super);
    function Passanger(firstName, lastName, passport) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.passport = passport;
        return _this;
    }
    Passanger.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Passport number :" + this.passport);
    };
    return Passanger;
}(Person));
var GroundAttendant = /** @class */ (function (_super) {
    __extends(GroundAttendant, _super);
    function GroundAttendant(firstName, lastName, experience, nationality, groundPosition) {
        var _this = _super.call(this, firstName, lastName, experience, nationality) || this;
        _this.groundPosition = groundPosition;
        return _this;
    }
    GroundAttendant.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Ground Position :" + this.groundPosition);
    };
    return GroundAttendant;
}(AirportEmployee));
var FlightAttendant = /** @class */ (function (_super) {
    __extends(FlightAttendant, _super);
    function FlightAttendant(firstName, lastName, experience, nationality, flightClass) {
        var _this = _super.call(this, firstName, lastName, experience, nationality) || this;
        _this.flightClass = flightClass;
        return _this;
    }
    FlightAttendant.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Flight Class (buissness/first/economy):" + this.flightClass);
    };
    return FlightAttendant;
}(AirportEmployee));
var Pilot = /** @class */ (function (_super) {
    __extends(Pilot, _super);
    function Pilot(firstName, lastName, experience, nationality, license) {
        var _this = _super.call(this, firstName, lastName, experience, nationality) || this;
        _this.license = license;
        return _this;
    }
    Pilot.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("License number :" + this.license);
    };
    return Pilot;
}(AirportEmployee));
// let airportPeople : Person = []
var airportPeople = [];
airportPeople[0] = new Passanger("John", "Philips", 555155456);
airportPeople[1] = new GroundAttendant("Homer", "Samsung", 35, "American", "Lobby");
airportPeople[2] = new FlightAttendant("Homer", "Samsung", 35, "Israeli", "Economy");
airportPeople[3] = new Pilot("Philips", "Philips", 10, "Zimbabue", 17709759);
for (var _i = 0, airportPeople_1 = airportPeople; _i < airportPeople_1.length; _i++) {
    var item = airportPeople_1[_i];
    item.display();
    if (item instanceof Passanger) {
        console.log("Passport number : " + item.passport);
    }
    if (item instanceof GroundAttendant) {
        console.log("this ground attendent position is : " + item.groundPosition);
    }
    if (item instanceof FlightAttendant) {
        console.log("the class of the flight attendant : " + item.flightClass);
    }
    if (item instanceof Pilot) {
        console.log("Pilot license number: " + item.license);
    }
    console.log("-------");
}
for (var _a = 0, airportPeople_2 = airportPeople; _a < airportPeople_2.length; _a++) {
    var item = airportPeople_2[_a];
    item.display();
}
// Flight attendant + ground
