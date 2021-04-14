var example = document.getElementById('example');
var canvas = example.getContext('2d');

/*----*/
canvas.moveTo(10,10);
canvas.lineTo(200,10);
canvas.lineTo(200,50);
canvas.closePath();
canvas.lineJoin = 'round';

canvas.fillStyle = 'blue';
canvas.fill();

canvas.lineWidth = 10;
canvas.strokeStyle = 'red';
canvas.stroke();

canvas.beginPath();
canvas.fillStyle = 'red';
canvas.fill();
canvas.fillRect(10, 50, 50,50);

canvas.beginPath();
canvas.lineWidth = 2;
canvas.fillStyle = 'yellow';
canvas.fill();
canvas.strokeStyle = 'green';
canvas.fillRect(10, 110, 50, 50);
canvas.strokeRect(10, 110, 50, 50);

canvas.beginPath();
/*----*/
var centerX = 150;
var centerY = 150;
var radius = 50;
var startingAngle = 1.25 * Math.PI;
var endingAngle = 1.75 * Math.PI;
canvas.arc(centerX, centerY, radius, startingAngle, endingAngle);
canvas.closePath();
canvas.stroke();