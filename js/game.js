function Game(ctx) {
  this.ctx = ctx;
  this.counter = 0,
  this.status = true;
  this.players = new Player(0, Math.floor(Math.random() * 8+1 ) * 100, Math.floor(Math.random() * 8+1 ) * 100, "./img/brucepix.png");
  this.players1 = new Player(0, Math.floor(Math.random() * 8+1 ) * 100, Math.floor(Math.random() * 8+1 ) * 100, "./img/alien.png");
  this.bombas = [];
  
  this.board = new Board();
}
Game.prototype.createBombas = function() {
  for(var i=0; i<50; i++){
    var b = new Bomba (this.ctx, Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100);
    this.bombas.push(b)
  }
}
