var canvas = document.querySelector('canvas');

//resizing canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

//Circle class
function Circle (color){
    //Circle random parameters
    this.radius = (Math.floor(Math.random() * 50)) + 20;
    this.x = (Math.random() * (innerWidth - this.radius * 2)) + this.radius;
    this.y = (Math.random() * (innerHeight - this.radius * 2)) + this.radius;
    this.dx = (Math.random() - 0.5);
    this.dy = (Math.random() - 0.5);
    this.color = color;

    //Method to "spawn" the circle
    this.draw = function(){
        c.beginPath();
        c.strokeStyle = this.color;
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
    }

    //Method to update the circle's position
    this.update = function(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx
        }
    
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

//Circle array
let circleArray = [];

//Color array
let colorArray = [
    'lightgreen',
    'greenyellow',
    'mediumseagreen',
    'royalblue',
    'aquamarine',
    'lightseagreen',
    'cyan'];

//Create 100 randomized circles
for(var i = 0; i < 130; i++){
    color = colorArray[Math.floor(Math.random() * colorArray.length)];
    circleArray.push(new Circle(color));
}

//Animation function
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    for(var i = 0; i < circleArray.length; i++){
        circleArray[i].update();
    }
}

animate();