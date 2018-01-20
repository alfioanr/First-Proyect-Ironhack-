// Funcion Constructora
var board = function() {
   this.position = [];
   this.ctx ;
   this.canvas;

};

board.prototype.drawBoard = function(canvas) {
  var canvas = document.getElementById(canvas);
  var ctx = canvas.getContext("2d");

  for (x = 0 ; x < 800; x =x+100) {
     for ( y = 0; y < 800; y= y+100){
       ctx.strokeRect(x, y, 100, 100);
        ctx.strokeRect(x+100/2,y+100/2,1,1);
       this.position.push({"x":x+100/2, "y":y+100/2})  
    }     
}
  console.log(this.position);
};

board.prototype.personajes = function(img){
 var image = document.getElementById(img);
 ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
console.log("olis");
}