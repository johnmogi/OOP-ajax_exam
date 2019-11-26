
abstract class Shape{
    public name: string
    public color: string
  
    public constructor(name: string,color: string){
        this.name = name;
        this.color= color;
       
    }
    public display() :void{
        console.log("name :"+ this.name);
        console.log("color :"+ this.color);

    }
    public abstract getArea(height:number,length:number):void;
    public abstract getPerimeter():void;

    }

    class Rectangular extends Shape{
        public edge:number
        public constructor(name: string,color:string, edge:number){
            super(name,color)
            this.edge = edge;
        }
        public display() :void{
            super.display();
            console.log("edge :"+ this.edge)
        }
        public getArea(height:number,length:number):number{

            let area = (2*height)+ (2*length)
            console.log("the Area of the " + this.name + " is " + area)
            return area
        }
        public getPerimeter():number{
            let perimeter = 0
            return perimeter
        }
    }

    let shapeArr: Shape[] = [];
    shapeArr[0] = new Rectangular("box1","blue",10);
    for (let item of shapeArr){
        console.log(shapeArr[0].getArea(10,10))
    }