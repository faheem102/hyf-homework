//Assignment--Step--1


function makeCircle(){
    const getMyCanvas = document.getElementById("mycanvas").getContext("2d");
    getMyCanvas.fillStyle = "#FF0000";
    
    getMyCanvas.strokeStyle = "orange"
    getMyCanvas.beginPath()
    getMyCanvas.arc(100, 75, 50, 0, 2 * Math.PI);
    getMyCanvas.stroke();
    getMyCanvas.fill();
    

}
makeCircle();

//Assignment--Step--2


const getMyCanvas = document.getElementById("mycanvas").getContext("2d");
	getMyCanvas.canvas.width = innerWidth;
    getMyCanvas.canvas.height = innerHeight;


class Circle{
    constructor(x, y, r, startAngle, endAngle, fillColor){
        this.x = x
        this.y = y
        this.r = r
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.fillColor = fillColor
    }
    draw(){
        
        getMyCanvas.fillStyle = this.fillColor;
        getMyCanvas.lineWidth = 7;
        getMyCanvas.strokeStyle = "violet"
        getMyCanvas.beginPath()
        getMyCanvas.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        getMyCanvas.stroke();
        getMyCanvas.fill();
        
    
    }
}

const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "blue");
c1.draw();
const c2 = new Circle(100, 75, 20, 0, 2 * Math.PI, "red");
c2.draw();
const c3 = new Circle(225, 95, 20, 0, 2 * Math.PI, "orange");
c3.draw();
const c4 = new Circle(355, 115, 25, 0, 2 * Math.PI, "pink");
c4.draw();
const c5 = new Circle(465, 120, 30, 0, 2 * Math.PI, "black");
c5.draw();
const c6 = new Circle(595, 150, 40, 0, 2 * Math.PI, "yellow");
c6.draw();