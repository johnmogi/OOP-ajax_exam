
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
let airportPeople : Person = []

// Flight attendant + ground