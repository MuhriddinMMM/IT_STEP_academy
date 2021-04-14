var example = document.getElementById('example');
var canvas = example.getContext('2d');

/*----*/
var x = 0;
var y = 0;
var width = 60;
var height = 60;
var copies = 20;
canvas.translate(100,100);
/*canvas.rotate(4);
canvas.rect(x, y, width, height);*/

for(var i = 0; i < copies; i++){
    canvas.rect(x, y, width, height);
    canvas.rotate(2*Math.PI * 1/copies);
    
}
canvas.strokeStyle = 'red';
canvas.stroke();
console.log(Math.PI);