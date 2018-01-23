function Bullet(position,width,height) {
    
     this.range =  2
     this.position.x = position.x
     this.position.y =position.y
     this.width:
     this.height:
     this.color = "green"  
    

    this.bulletUpdate = function() {}
    this.bulletDraw = function() {}
}





//moving chars and bullets
function moving(X,Y){
this.directionX
this.directionY

}

// para escribir eventos 
document.onkeyup = function(event){
    if (event.keyCode === 68){
        player.pressingRight = true;
    }
    else if (event.keyCode === 83){
        player.pressingDown = true;
}
}

