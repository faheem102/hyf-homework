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


class myCircle{
    constructor(x, y, r, startAngle, endAngle, fillColor){
        this.x = x
        this.y = y
        this.r = r
        this.startAngle = startAngle
        this.endAngle = endAngle
        this.fillColor = fillColor
    }
    drawCircles(){
        
        getMyCanvas.fillStyle = this.fillColor;
        getMyCanvas.lineWidth = 7;
        getMyCanvas.strokeStyle = "violet"
        getMyCanvas.beginPath()
        getMyCanvas.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        getMyCanvas.stroke();
        getMyCanvas.fill();
        
    
    }
}

const c1 = new myCircle(50, 50, 20, 0, 2 * Math.PI, "blue");
c1.drawCircles();
const c2 = new myCircle(100, 75, 20, 0, 2 * Math.PI, "red");
c2.drawCircles();
const c3 = new myCircle(225, 95, 20, 0, 2 * Math.PI, "orange");
c3.drawCircles();
const c4 = new myCircle(355, 115, 25, 0, 2 * Math.PI, "pink");
c4.drawCircles();
const c5 = new myCircle(465, 120, 30, 0, 2 * Math.PI, "black");
c5.drawCircles();
const c6 = new myCircle(595, 150, 40, 0, 2 * Math.PI, "yellow");
c6.drawCircles();

//Step--3 Make some art with circles


// make a function to generate random colors for each circle 

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;;

  }

  // create a class and inside that class create a draw function in order to draw circles
  
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
        getMyCanvas.closePath()
        
    
    }
       
}

// draw several circles with random positions and radius and colors after 2 seconds
        setInterval(() => {
        getRandomColor();
        const randomX= Math.floor(Math.random() * window.innerWidth);
        const randomY= Math.floor(Math.random() * window.innerHeight);
        const randomRadius= Math.floor(Math.random() * 50);
        const circle= new Circle(randomX, randomY, randomRadius, 0, 2 * Math.PI, getRandomColor());
        
        circle.draw()
        
    }, 2000);