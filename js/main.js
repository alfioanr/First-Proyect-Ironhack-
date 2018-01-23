board = new board();
board.drawBoard("canvas");
var randomPos = Math.floor(Math.random() * 63);
var randomPos2 = Math.floor(Math.random() * 63);
console.log(board.position[13]);
var Player1 = new Melee("estrella", 100, board.position[randomPos], "human");

var Player2 = new Ranged("circulo", 100, board.position[randomPos2], "human");
console.log(board.position[14]);
board.drawPlayer(Player1.position, Player1.name);
board.drawPlayer(Player2.position, Player2.name);
board.deletePlayer(board.position[0]);

document.onkeyup = function(event) {
  console.log(event.keyCode);
  board.deletePlayer(Player1.position);
  board.deletePlayer(Player2.position);
  switch (event.keyCode) {
    case 87:
      Player1.Move("U");
      break;
    case 83:
      Player1.Move("D");
      break;
    case 65:
      Player1.Move("L");
      break;
    case 68:
      Player1.Move("R");
      break;
    case 38:
      Player2.Move("U");
      break;
    case 40:
      Player2.Move("D");
      break;
    case 37:
      Player2.Move("L");
      break;
    case 39:
      Player2.Move("R");
      break;

    default:
      break;
  }
  board.drawPlayer(Player1.position, Player1.name);
  board.drawPlayer(Player2.position,Player2.name)

};

