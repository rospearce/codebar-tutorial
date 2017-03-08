/** Canvas playground for Codebar's tutorial Drawing in Canvas **/

var canvas = document.getElementById('canvas-id');
var context = canvas.getContext("2d");

var x = 0
var y = 0

canvas.addEventListener("mousemove", function(event) {
	x = event.clientX;
	y = event.clientY;
});

draw();

function draw() {

 
 document.onmousemove
 
 var d = new Date();
 var n = d.getSeconds();
 var m = d.getMinutes();
 var h = d.getHours();
 var analogue = h>12? h-12 : h

// context.save();
// context.rotate((Math.PI*2)*(n/60) + (x/10));

 context.fillStyle = 'yellow';
 context.strokeStyle = 'purple';
 context.lineWidth = 3;

 context.beginPath();
 context.arc(x, y, 50, (0-(Math.PI/2)), (((Math.PI*2)*n/60) - (Math.PI/2)), false);
 //context.closePath();
 context.lineWidth = 4;
 context.stroke();
 
 context.beginPath();
 context.arc(x, y, 40, (0-(Math.PI/2)), (((Math.PI*2)*m/60) - (Math.PI/2)), false);
 //context.closePath();
 context.lineWidth = 4;
 context.strokeStyle = 'red';
 context.stroke();
 
 context.beginPath();
 context.arc(x, y, 30, (0-(Math.PI/2)), (((Math.PI*2)*analogue/12) - (Math.PI/2)), false);
 //context.closePath();
 context.lineWidth = 4;
 context.strokeStyle = 'blue';
 context.stroke();


// context.translate(45, 45);

 //context.scale(2,2);

 
// context.restore();
 
 requestAnimationFrame(function() {
	 reset();
	 draw();
 });



 //draw items
}



function reset() {
  var canvas = document.getElementById('canvas-id');
  var context = canvas.getContext("2d");
  
  canvas.width = canvas.width;

  // reset canvas
}


