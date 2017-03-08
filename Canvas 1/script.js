/** Canvas playground for Codebar's tutorial Drawing in Canvas **/

var canvas = document.getElementById('canvas-id');
var context = canvas.getContext("2d");

var x = 0
var y = 0

canvas.addEventListener("mousemove", function(event) {
	x = event.clientX;
	y = event.clientY;
});

function draw() {

 
 document.onmousemove
 
 var d = new Date();
 var n = d.getSeconds();

// context.save();
 context.rotate((Math.PI*2)*(n/60) + (x/10));

 context.fillStyle = 'yellow';
 context.strokeStyle = 'purple';
 context.lineWidth = 3;

 context.fillRect(100, 100, 50, 100);
 context.strokeRect(400, 100, 50, 100);

 context.moveTo(0,300);
 context.lineTo(400,500);
 context.stroke();

 context.beginPath();

 context.lineWidth = 1;
 context.strokeStyle = 'purple';

 context.moveTo(0,0);
 context.lineTo(0,200);
 context.lineTo(200,200);
 context.lineTo(200,0);
 context.lineTo(0,0);

 context.stroke();

 context.beginPath();
 context.arc(200, 100, 50, 0, Math.PI*2, true);
 context.closePath();
 context.lineWidth = 4;
 context.stroke();
 context.fill();


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


