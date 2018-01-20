// Funcion Constructora
var board = function() {
   this.position = [];

};

board.prototype.drawBoard = function(canvas) {
  var canvas = document.getElementById(canvas);
  var ctx = canvas.getContext("2d");

//   for ( x = 100; x < 800; x = x + 100) {
//     ctx.moveTo(x, 0);
//     ctx.lineTo(x, 800);
//     for (y = 100; y < 800; y = y + 100) {
//       ctx.moveTo(0, y);
//       ctx.lineTo(800, y);

//       this.position.push({"x":x/2, "y":y/2});
    // }
//   }

//   ctx.strokeStyle = "#0f0";
//   ctx.stroke();
 for (x = 0 ; x < 800; x =x+100) {
     for ( y = 0; y < 800; y= y+100){
       ctx.strokeRect(x, y, 100, 100);
        ctx.strokeRect(x+100/2,y+100/2,1,1);
       this.position.push({"x":x+100/2, "y":y+100/2})  
    }
       
     
}
     
 
console.log(this.position);  
};
