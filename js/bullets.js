function bomba(positionX,positionY,img) {
     this.ctx = ctx;
     this.range =  6;
     this.positionX = positionX;
     this.positionY = positionY;
     this.image = new Image();
     this.image.src = img;
     this.explode = function (){
     }
}
bomba.prototype.drawBomba = function(){
    console.log("pintobomba")
    this.ctx.drawImage(this.image, this.positionX, this.positionY);
    this.image.src = "./img/bomba.png";
}


