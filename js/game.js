    setInterval(update, 40);
    
    
    function update (){
        ctx.clearReact(0,0,width,Height)
              
        updatePjs(ranged);
        updatePjs(melee);
        updatebullets()
        // para probar si colisionan
        var isColliding = testCollisionPjs(ranged,melee)
            id (isColliding){
                console.log ("they are colliding")
            }
    }
melee : point (x,y)
ranged : point (x,y)
//return distance(number)
getDistanceBetweenPjs (ranged,melee){
var vx = ranged.x - melee.x;
var vy = ranged.y - melee.y;
return (VX,VY) 
};
testCollisionPjs (ranged,melee){ // return if colliding  test(true/false)
    var distance = getDistanceBetweenPjs(ranged,melee);
    return distance < 50 

}


// quizas sirva como bono convertir el juego en cooperativo y que salgan enemigos aleatorios
randomGeneratorEnemy = function (){
    Math.random()
}