function Game() {
  this.players = new Player(0, 100, 100, "./img/brucepix.png");
  this.players1 = new Player(0, 400, 400, "./img/alien.png");
  this.bomba = new bomba(200,100,"./img/bomba.png");
  this.board = new Board();
}
