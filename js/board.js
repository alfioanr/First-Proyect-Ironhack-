// Funcion Constructora
var board = function() {
   this.position = [];
   this.canvas;
   this.ctx ;
   

};

board.prototype.drawBoard = function(canvas) {
  this.canvas = document.getElementById(canvas);
  this.ctx = this.canvas.getContext("2d");

  for (x = 0 ; x < 800; x =x+100) {
     for ( y = 0; y < 800; y= y+100){
       this.ctx.strokeRect(x, y, 100, 100);
       this.ctx.strokeRect(x+100/2,y+100/2,1,1);
       this.position.push({"x":x, "y":y})  
    }     
}
  console.log(this.position);
};
// posible funcion que dibujes los pjs
drawPlayer = function (position,name){
    ctx.save();
    ctx.image = // imagen de sprite;
    ctx.filltext()
    ctx.restore
    ctx.clearRect()
 
