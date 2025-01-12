var canvas = document.querySelector('canvas');

//resizing canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var movingGhost = document.getElementById('moving');
var staticGhost = document.getElementById('static');

var mouse = {
    x: undefined,
    y: undefined,
}

window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

var ghost = {
    width: 268,
    height: 252,
    isFlipped: false,
    x: 100,
    y: 100,
    dx: 2,
    dy: 2,
    state: movingGhost,

    draw() {
        c.save();

        if (this.isFlipped) {
            c.translate(this.x + this.width, this.y);
            c.scale(-1, 1);
        } else {
            c.translate(this.x, this.y);
        }

        c.drawImage(this.state, 0, 0, this.width, this.height);
        c.restore();
    },

    updatePosition() {
        if(((this.x < mouse.x) && (mouse.x < (this.x + this.width))) && ((this.y < mouse.y) && (mouse.y < (this.y + this.height)))){
            this.state = staticGhost;
        }else{
            this.state = movingGhost;
            if (this.x + this.width > innerWidth || this.x < 0) {
                this.dx = -this.dx;
                this.isFlipped = !this.isFlipped;
            }
    
            if (this.y + this.height > innerHeight || this.y < 0) {
                this.dy = -this.dy;
            }
    
            this.x += this.dx;
            this.y += this.dy;
        }
        

        this.draw();
    },
};

//Animation function
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    ghost.updatePosition();
}

animate();