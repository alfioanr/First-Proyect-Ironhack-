function Game() {
  this.counter = 0,
  this.status = true;
  this.players = new Player(0, 100, 100, "./img/brucepix.png");
  this.players1 = new Player(0, 400, 400, "./img/alien.png");
  // this.bomba = new bomba(Math.floor(Math.random() * 700), Math.floor(Math.random() * 700), "./img/bomba.png");
  // this.bomba1 = new bomba(Math.floor(Math.random() * 700), Math.floor(Math.random() * 700), "./img/bomba.png");
  // this.bomba2 = new bomba(Math.floor(Math.random() * 700), Math.floor(Math.random() * 700), "./img/bomba.png");
  // this.bomba3 = new bomba(Math.floor(Math.random() * 700), Math.floor(Math.random() * 700), "./img/bomba.png");
  // this.bomba4 = new bomba(Math.floor(Math.random() * 700), Math.floor(Math.random() * 700), "./img/bomba.png");
  // this.bomba5 = new bomba(Math.floor(Math.random() * 700), Math.floor(Math.random() * 700), "./img/bomba.png");
  this.bombas = [];
  
  this.board = new Board();
}
var z = Math.floor(Math.random() * 8+6 ) * 50;
var p = Math.floor(Math.random() * 8 + 6) * 50;
Game.prototype.createBombas = function() {
 
  this.bombas = [
  this.bomba = new bomba (Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba = new bomba (Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba = new bomba (Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba1 = new bomba(Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba2 = new bomba(Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba3 = new bomba(Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba4 = new bomba(Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba5 = new bomba(Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba6 = new bomba(Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba7 = new bomba(Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba8 = new bomba(Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba9 = new bomba(Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba10 = new bomba(Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba11 = new bomba(Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba12 = new bomba(Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba12 = new bomba(Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba13 = new bomba(Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba14 = new bomba(Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
  this.bomba15 = new bomba(Math.floor(Math.random() * 8+1 ) * 100,Math.floor(Math.random() * 8 +1) * 100),
]};
