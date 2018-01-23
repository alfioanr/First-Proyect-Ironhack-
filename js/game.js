    // setInterval(update, 40);
    
    
    // function update (){
    //     ctx.clearReact(0,0,width,Height)
              
    //     updatePjs(ranged);
    //     updatePjs(melee);
    //     updatebullets()
    //     // para probar si colisionan
    //     var isColliding = testCollisionPjs(ranged,melee)
    //         if (isColliding){
    //             console.log ("they are colliding")
    //         }
    // }
// melee : point (x,y)
// ranged : point (x,y)
// //return distance(number)
// getDistanceBetweenPjs (ranged,melee){
// var vx = ranged.x - melee.x;
// var vy = ranged.y - melee.y;
// return (VX,VY) 
// };
// testCollisionPjs (ranged,melee){ // return if colliding  test(true/false)
//     var distance = getDistanceBetweenPjs(ranged,melee);
//     return distance < 50 

// }

// Game.prototype.nextTurn = function(action) {
//    if (this.currentTurno == 0) {
//        this.player.doAction(action);
//        this.player.endTurno();
//        setTimeout(nextTurn.bind(this),3000);
//    } else if (this.currentTurno == 1) {
//        this.enemies.forEach( function(enemy) {
//            enemy.doActionRandom();
//            enemy.endTurno();
//        })
//    }
//    this.currentTurno = (this.currentTurno + 1) % 2;
//    console.log("Se ha pasado al siguiente turno, " + this.continueTurno);
// }


// // quizas sirva como bono convertir el juego en cooperativo y que salgan enemigos aleatorios
// randomGeneratorEnemy = function (){
//     Math.random()
// }