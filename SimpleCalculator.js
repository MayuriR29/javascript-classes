class SimpleCalculator{
    constructor(value){
        this.value=0;
    }
    add(num){
         this.value=this.value+num;
         return this;
    }
    subtract(num){
        this.value=this.value-num;
        return this;
   }
   multiply(num){
    this.value=this.value*num;
    return this;
    }
    divide(num){
        this.value=this.value/num;
        return this;
        }
}
var calculator=new SimpleCalculator();
console.log(calculator.add(12).multiply(2).divide(2).value);
