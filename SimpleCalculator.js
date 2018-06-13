class SimpleCalculator{
    constructor(value=0){
        this.value=value;
    }
    add(num){
         this.value += num;
         return this;
    }
    subtract(num){
        this.value -= num;
        return this;
   }
   multiply(num){
    this.value *= num;
    return this;
    }
    divide(num){
        this.value /= num;
        return this;
        }
}
var calculator=new SimpleCalculator();
console.log(calculator.add(12).multiply(2).divide(2));
