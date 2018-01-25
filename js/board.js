  // Funcion Constructora
  function Board() {
    this.position = [];
    this.canvas = canvas;
    this.ctx = ctx;
  }

  Board.prototype.drawBoard = function(canvas) {
    for (x = 0; x < 800; x = x + 100) {
      for (y = 0; y < 800; y = y + 100) {
        this.ctx.strokeRect(x, y, 100, 100);
        this.ctx.font = "15px arial"
        this.ctx.fillText("x:"+x+" , y:"+y, x+50, y+50);
        this.position.push({ x: x, y: y });
      }
    }
  };
  // board.prototype.deletePlayer = function (position){
  //   this.ctx.clearRect(position.x, position.y, 100, 100);
  //   this.ctx.strokeRect(position.x, position.y, 100, 100);
  // }
