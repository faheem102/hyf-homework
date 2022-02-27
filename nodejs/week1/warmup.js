console.log("inside warmup file");
class myCircle{
    constructor(radius){
        this.radius = radius
    }
    getDiameter(){
        return 2 * this.radius
    }
    getCircumference(){
        return 2 * 3.14 * this.radius
    }
    getArea(){
        return 3.14 * this.radius * this.radius
    }
}
const circle1 = new myCircle(10);
console.log(circle1.getDiameter());
const circle2 = new myCircle(10);
console.log(circle2.getArea());
const circle3 = new myCircle(10);
console.log(circle3.getCircumference());