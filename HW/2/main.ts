
abstract class Shape{
    public name: string
    public color: string
  
    public constructor(name: string,color: string){
        this.name = name;
        this.color= color;
       
    }
    public display() :void{};
    public abstract getArea(height:number,length:number):number;
    public abstract getPerimeter(height:number,length:number): number;
    }

    class Rectangular extends Shape{
        public edge:number
        public constructor(name: string,color:string, edge:number){
            super(name,color)
            this.edge = edge;
        }
        public display() :void{
            super.display();
            // console.log("edge :"+ this.edge)
        }
        public getArea(height:number,length:number):number{

            let area = (2*height)+ (2*length)
            console.log("the Area of this rect:" + this.name + " is " + area)
            return area
        }
        public getPerimeter(height:number,length:number):number{
            let perimeter = height *length
            console.log("the perimeter of this rect: " + this.name + " is " + perimeter)
            return perimeter
        }
    }
   
    class Circle extends Shape{
        public radius:number
        public constructor(name: string,color:string, radius:number){
            super(name,color)
            this.radius = radius;
        }
        public display() :void{
            super.display();
            // console.log("radius :"+ this.radius)
        }
        public getArea(height:number,length:number):number{

            let area = (2*height)+ (2*length)
            console.log("the Area of this circle is: " + this.name + " is " + area)
            return area
        }
        public getPerimeter(height:number,length:number):number{
            let perimeter = height *length
            console.log("the perimeter of this circle is: " + perimeter)
            return perimeter
        }
    }
    let shapeArr: Shape[] = [];
    shapeArr.length=20;

    // shapeArr[0] = new Rectangular("box1","blue",10)

    for (let i = 0; i < shapeArr.length; i++) {
        let rand1 = Math.floor(Math.random() * Math.floor(100));
        let rand2 = Math.floor(Math.random() * Math.floor(100));

    // let's say rand 1 is the rect side
        if(rand1>49){ 
        shapeArr[i] = new Rectangular("shape" + rand1 * rand2 ,"blue",rand1)
        console.log(i,shapeArr[i].getArea(rand1,rand2))
        console.log(i,shapeArr[i].getPerimeter(rand1,rand2))
        }
        // let's assume rand2 is the circle radius
        else{
            shapeArr[i] = new Circle("shape" + rand1 * rand2 ,"red",rand2)
            console.log(i,shapeArr[i].getArea(rand1,rand2))
            console.log(i,shapeArr[i].getPerimeter(rand1,rand2))    
        }
    }

        for (let item of shapeArr){

        }