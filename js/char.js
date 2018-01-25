// Funcion Constructora
function Player(strength, positionX, positionY, img) {
  //Propiedadesh
  this.ctx = ctx;
  this.canvas = canvas;
  this.range = 0;
  this.MAX_MOVE = 0;
  this.positionX = positionX;
  this.positionY = positionY;
  this.strength = strength;
  this.health = 100;
  this.image = new Image();
  this.image.src = img;
}
// metodos
Player.prototype.drawPlayer = function(src) {

  this.ctx.drawImage(this.image, this.positionX, this.positionY);
  
};

Player.prototype.MovePlayer = function(direction) {
  switch (direction) {
    case "up":
      // console.log("entro parriba");
      if (this.positionY - 100 >= 0) {
        this.positionY = this.positionY - 100;
      }
      break;
    case "down":
      if (this.positionY + 100 < 800) {
        this.positionY = this.positionY + 100;
      }
      break;
    case "left":
      if (this.positionX - 100 > 0) {
        this.positionX = this.positionX - 100;
      }
      break;
    case "right":
      if (this.positionX + 100 < 800) {
        this.positionX = this.positionX + 100;
      }
  }
};

Player.prototype.takeDamage = function(damage) {
  this.health -= damage;
};

Player.prototype.isAlive = function() {
  if (health > 0) {
    return true;
  } else {
    return false;
  }
};

Player.prototype.isAt = function() {
  return this.position;
};

Player.prototype.attackMethod = function() {
  return this.stregth / 2;
};

Player.prototype.takeDamageFrom = function(enemy) {
  enemy.isIntanceOf;
};

// funcion para crear melee
function Melee(name, stregth, position, race) {
  Player.call(this, name, stregth, position);
  this.range = 1;
  this.MAX_MOVE = 3;
  this.race = race;
}
Melee.prototype = Object.create(Player.prototype);

// funcion para crear rango
function Ranged(name, stregth, position, race) {
  Player.call(this, name, stregth, position);
  this.range = 3;
  this.MAX_MOVE = 1;
  this.race = race;
}
Ranged.prototype = Object.create(Player.prototype);
