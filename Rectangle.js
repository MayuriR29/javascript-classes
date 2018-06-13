class Rectangle{
    constructor(breadth,length){
        this.breadth=breadth;
        this.length=length;
    }
    area(){
        return this.length*this.breadth;
    }
    perimeter(){
        return (2*this.length+2*this.breadth)
    }
}
var rec1=new Rectangle(5,10);
console.log(rec1.area());
console.log(rec1.perimeter());
