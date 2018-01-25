var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var game;

window.onload = function() {
  game = new Game();
  game.board.drawBoard();
  game.players.drawPlayer();
  game.players1.drawPlayer();
};

function update() {
    if (game.players.positionX != game.players1.positionX && game.players.positionY != game.players1.positionY ){
    game.players.drawPlayer();
    game.players1.drawPlayer();
}
    // console.log("olis")
    // console.log(game.players.positionX)
     
  ctx.clearRect(0, 0, 800, 800);
  game.board.drawBoard();
    
}

setInterval(update, 50);

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      game.players.MovePlayer("up");
      break;
    case 40:
      game.players.MovePlayer("down");
      break;
    case 37:
      game.players.MovePlayer("left");
      break;
    case 39:
      game.players.MovePlayer("right");
      break;
    case 87:
      game.players1.MovePlayer("up");
      break;
    case 83:
      game.players1.MovePlayer("down");
      break;
    case 65:
      game.players1.MovePlayer("left");
      break;
    case 68:
      game.players1.MovePlayer("right");
      break;
     
  }console.log (e.keyCode)
   
};
