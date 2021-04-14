var example = document.getElementById('example');
example.width = 200;
example.height = 200;

var canvas = example.getContext('2d');
var btnLeft = document.getElementById('btnLeft');
var btnRight = document.getElementById('btnRight');
var btnTop = document.getElementById('btnTop');
var btnBottom = document.getElementById('btnBottom');

var i = 0;
var j = 0;

/*Размеры*/
/*отрисовка*/
canvas.fillStyle = 'red';
canvas.fill();
canvas.fillRect(0,0,50,50);
canvas.stroke();
/*----*/
btnRight.onclick = function(){
    if(i != 150){
        canvas.clearRect(0,0,example.width,example.height);
        canvas.translate(50,0);
        canvas.fillRect(0,0,50,50);
        i +=50;
    }else{
        return false;
    }
    
}
btnLeft.onclick = function(){
    if(i != 0){
        canvas.clearRect(0,0,50,50);
        canvas.translate(-50,0);
        canvas.fillRect(0,0,50,50);
        i -=50;
    }else{
        return false;
    }
    
}
btnTop.onclick = function(){
    if(j != 0){
        canvas.clearRect(0,0,50,50);
        canvas.translate(0,-50);
        canvas.fillRect(0,0,50,50);
        j -=50;
    }else{
        return false;
    }
    
}
btnBottom.onclick = function(){
    if(j != 150){
       canvas.clearRect(0,0,50,50);
        canvas.translate(0,50);
        canvas.fillRect(0,0,50,50);
        j +=50;
    }else{
        return false;
    }
    
}
//console.log(canvas.width);