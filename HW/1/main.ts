
abstract class Person{

    public firstName: string
    public lastName: string
    public constructor(firstName: string,lastName: string){
        this.firstName= firstName;
        this.lastName= lastName;
    }
    public display() :void{
        console.log("First Name :"+ this.firstName)
        console.log("Last Name :"+ this.lastName)
    
    }
    }
 class AirportEmployee extends Person{
    public experience: number
    public nationality: string
    public constructor(firstName: string,lastName: string, experience: number,nationality: string){
super(firstName,lastName)
this.experience=experience;
this.nationality=nationality;
    }
public display() :void{
    super.display();
}
}
class Passanger extends Person{
    public passport:number
    public constructor(firstName: string,lastName: string, passport:number){
super(firstName,lastName);
this.passport=passport;
}
public display():void{
    super.display(); 
    console.log("Passport number :"+ this.passport)
}
}

class GroundAttendant extends AirportEmployee{
    public groundPosition:string
    public constructor(firstName: string,lastName: string, experience: number,nationality: string,  groundPosition:string){

   super(firstName,lastName,experience,nationality)
this.groundPosition=groundPosition;
}
public display():void{
    super.display(); 
    console.log("Ground Position :"+ this.groundPosition)
}
}
class FlightAttendant extends AirportEmployee{
    public flightClass:string
    public constructor(firstName: string,lastName: string, experience: number,nationality: string, flightClass:string){

   super(firstName,lastName,experience,nationality)
this.flightClass=flightClass;
}
public display():void{
    super.display(); 
    console.log("Flight Class (buissness/first/economy):"+ this.flightClass)
}
}
class Pilot extends AirportEmployee{
    public license:number
    public constructor(firstName: string,lastName: string, experience: number,nationality: string,  license:number){

   super(firstName,lastName,experience,nationality)
this.license=license;
}
public display():void{
    super.display(); 
    console.log("License number :"+ this.license)
}
}
// let airportPeople : Person = []
let airportPeople: Person[] = [];
airportPeople[0] = new Passanger("John","Philips",555155456);
airportPeople[1] = new GroundAttendant("Homer","Samsung",35,"American","Lobby");
airportPeople[2] = new FlightAttendant("Homer","Samsung",35,"Israeli","Economy");
airportPeople[3] = new Pilot("Philips","Philips",10,"Zimbabue",17709759);

for (let item of airportPeople){
    item.display();
    if (item instanceof Passanger){ 
        console.log("Passport number : " + (item as Passanger).passport)
        }
        if (item instanceof GroundAttendant){ 
            console.log("this ground attendent position is : " + (item as GroundAttendant).groundPosition)
            }
            if (item instanceof FlightAttendant){ 
                console.log("the class of the flight attendant : " + (item as FlightAttendant).flightClass)
                }
    if (item instanceof Pilot){ 
        console.log("Pilot license number: " + (item as Pilot).license)
        }
    console.log("-------")
}
for (let item of airportPeople){
    item.display();
}
// Flight attendant + ground