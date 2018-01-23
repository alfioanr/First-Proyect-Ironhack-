    setInterval(update, 40);
    
    
    function update (){
        ctx.clearReact(0,0,width,Height)
              
        updatePjs(ranged);
        updatePjs(melee);
        // para probar si colisionan
        var isColliding = testCollisionPjs(ranged,melee)
            id (isColliding){
                console.log ("they are colliding")
            }
    }
melee : point (x,y)
ranged : point (x,y)

getDistanceBetweenPjs (ranged,melee){//return distance(number)
var vx = ranged.x - melee.x;
var vy = ranged.y - melee.y;
return Math.sqrt(vx*vx*vy*vy);
}
testCollisionPjs (ranged,melee){ // return if colliding  test(true/false)
    var distance = getDistanceBetweenPjs(ranged,melee);
    return distance <

}
