function Bomba(ctx,positionX,positionY) {
     this.ctx = ctx;
     this.range =  6;
     this.positionX = positionX;
     this.positionY = positionY;
     this.image = new Image();
     this.radius = 25;
    //  this.image.src = img;

}
Bomba.prototype.drawBomba = function(a){
    // console.log("pintobomba")
    
    if(a==true){
        this.ctx.drawImage(this.image, this.positionX, this.positionY);
        this.image.src = "img/bomba.png";
    } 
    if(a==false) {
        this.ctx.drawImage(this.image, this.positionX, this.positionY);
        this.image.src = "img/Explosion_0.png";
    }

}

Bomba.prototype.explode = function(){
console.log("pinto explosion")
    this.ctx.drawImage(this.image,this.positionX,this.positionY)
    this.image.src = "img/Explosion_0.png"
}


