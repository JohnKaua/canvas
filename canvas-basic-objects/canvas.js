var canvas = document.querySelector('canvas');

//resizing canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//drawing squares
var c = canvas.getContext('2d');

c.fillStyle = "rgba(255, 0, 0, 0.7)"
c.fillRect(100, 100, 100, 100);
c.fillStyle = "rgba(0, 255, 0, 0.7)"
c.fillRect(100, 200, 100, 100);
c.fillStyle = "rgba(0, 0, 255, 0.7)"
c.fillRect(200, 100, 100, 100);
c.fillStyle = "rgba(255, 255, 0, 0.7)"
c.fillRect(200, 200, 100, 100);

//drawing lines
c.beginPath();
c.moveTo(400, 300);
c.lineTo(500, 100);
c.lineTo(600, 300);
c.lineTo(400, 300);
c.strokeStyle = "#78CEFF"
c.stroke();

//random circles
let colorArray = ['lightblue','lightgreen','lightpink'];

for(var i = 0; i < 10; i++){
    colorIndex = Math.floor(Math.random() * 3);
    x = Math.random() * window.innerWidth;
    y = Math.random() * window.innerHeight;

    c.beginPath();
    c.arc(x, y, 50, 0, Math.PI * 2, false);
    c.strokeStyle = colorArray[colorIndex];
    c.fillStyle = colorArray[colorIndex];
    c.stroke();
    c.fill();
}