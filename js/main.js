var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var game;

window.onload = function() {
  game = new Game(ctx);
  game.board.drawBoard();
  game.players.drawPlayer();
  game.players1.drawPlayer();
  game.createBombas()
  game.bombas.forEach(function(e){
    e.drawBomba(game.status)
  })
};

function update() {
  game.counter++
  if(game.counter > 20){game.status = false}
  // console.log(game.counter)
  ctx.clearRect(0, 0, 800, 800);
  game.board.drawBoard();
  game.players.drawPlayer();
  game.players1.drawPlayer();
  game.bombas.forEach(function(e) {
    e.drawBomba(game.status);
    game.players.hitBombas(e)
    game.players1.hitBombas(e)
  });
}


setInterval(update, 50);

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      if (game.players.positionX == game.players1.positionX) {
        if (game.players.positionY - 100 == game.players1.positionY) {
          console.log("NO TE MUEVAS");
        } else {
          game.players.MovePlayer("up");
        }
      } else {
        game.players.MovePlayer("up");
      }
      break;
    case 40:
      if (game.players.positionX == game.players1.positionX) {
        if (game.players.positionY + 100 == game.players1.positionY) {
          console.log("NO TE MUEVAS");
        } else {
          game.players.MovePlayer("down");
        }
      } else {
        game.players.MovePlayer("down");
      }
      break;
    case 37:
      if (game.players.positionX - 100 == game.players1.positionX) {
        if (game.players.positionY == game.players1.positionY) {
          console.log("NO TE MUEVAS");
        } else {
          game.players.MovePlayer("left");
        }
      } else {
        game.players.MovePlayer("left");
      }
      break;
    case 39:
      if (game.players.positionX + 100 == game.players1.positionX) {
        if (game.players.positionY == game.players1.positionY) {
          console.log("NO TE MUEVAS");
        } else {
          game.players.MovePlayer("right");
        }
      } else {
        game.players.MovePlayer("right");
      }
      break;
    case 87:
      if (game.players1.positionX == game.players.positionX) {
        if (game.players1.positionY - 100 == game.players.positionY) {
          console.log("NO TE MUEVAS");
        } else {
          game.players1.MovePlayer("up");
        }
      } else {
        game.players1.MovePlayer("up");
      }

      break;
    case 83:
      if (game.players1.positionX == game.players.positionX) {
        if (game.players1.positionY + 100 == game.players.positionY) {
          console.log("NO TE MUEVAS");
        } else {
          game.players1.MovePlayer("down");
        }
      } else {
        game.players1.MovePlayer("down");
      }
      break;
    case 65:
      if (game.players1.positionX - 100 == game.players.positionX) {
        if (game.players1.positionY == game.players.positionY) {
          console.log("NO TE MUEVAS");
        } else {
          game.players1.MovePlayer("left");
        }
      } else {
        game.players1.MovePlayer("left");
      }
      break;
    case 68:
      if (game.players1.positionX + 100 == game.players.positionX) {
        if (game.players1.positionY == game.players.positionY) {
          console.log("NO TE MUEVAS");
        } else {
          game.players1.MovePlayer("right");
        }
      } else {
        game.players1.MovePlayer("right");
      }
      break;
  }
  console.log(e.keyCode);
};
// document.onkeydown = function(z) {
//   switch (z.keyCode) {
//     case 70:
//      game.bomba.drawBomba();
//       break;
//   }
// };
