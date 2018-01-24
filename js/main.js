var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var game;

window.onload = function() {
  game = new Game();
  game.board.drawBoard();
  game.players.drawPlayer();
};

function update() {
  ctx.clearRect(0, 0, 800, 800);
  game.board.drawBoard();
  game.players.MovePlayer();
   game.players.drawPlayer();
}

setInterval(update, 40);

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      game.players.MovePlayer("up");
      break;
    case 40:
    game.players.MovePlayer("down"); 
    break;
    case 37:
    game.players.MovePlayer("left")
    break;
    case 39:
    game.players.MovePlayer("right")
  }
};
