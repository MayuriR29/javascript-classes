class Circle{
    constructor(radius){
        this.radius=radius;
    }
    area(){
          
        return (Math.PI*this.radius*this.radius).toFixed(1);
    }
    perimeter(){
        return (2*Math.PI*this.radius).toFixed(1);
    }
}
var circle1=new Circle(1);
var circle2=new Circle(2);
console.log(circle1.area());
console.log(circle1.perimeter());
console.log(circle2.area());
console.log(circle2.perimeter());
