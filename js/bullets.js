function bomba(positionX,positionY,img) {
     this.ctx = ctx;
     this.range =  6
     this.positionX = positionX
     this.positionY = positionY
     this.width =  50;
     this.height= 50;
     this.img = img
}
bomba.prototype.drawBomba = function(src){
    this.ctx.drawBomba (this.img, this.positionX,this.positionY)
}


