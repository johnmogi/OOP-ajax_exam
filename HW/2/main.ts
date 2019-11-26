
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
            console.log("edge :"+ this.edge)
        }
        public getArea(height:number,length:number):number{

            let area = (2*height)+ (2*length)
            console.log("the Area of " + this.name + " is " + area)
            return area
        }
        public getPerimeter(height:number,length:number):number{
            let perimeter = height *length
            console.log("the perimeter of " + this.name + " is " + perimeter)
            return perimeter
        }
    }

    let shapeArr: Shape[] = [];
    shapeArr.length=19;

    // shapeArr[0] = new Rectangular("box1","blue",10)

    for (let i = 0; i < shapeArr.length; i++) {
        let rand1 = Math.floor(Math.random() * Math.floor(201));
        let rand2 = Math.floor(Math.random() * Math.floor(201));
        shapeArr.push(new Rectangular("shape" + rand1 * rand2 ,"blue",10))

    for (let item of shapeArr){
        if (item instanceof Rectangular){
      shapeArr[i].getArea(rand1,rand2)
      shapeArr[i].getPerimeter(rand1,rand2)
        }
    }
}