// Funcion Constructora
function Player(name, strength, position) {
  //Propiedadesh
  this.range = 0;
  this.MAX_MOVE = 0;
  this.position = position;
  // this.position.y = position.y;
  this.name = name;
  this.health = 100;
  this.stregth = Math.floor(Math.random()) * strength;
}
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
// metodos
Player.prototype.isAt = function() {
  return this.position;
};
Player.prototype.attackMethod = function() {
  return this.stregth / 2;
};
Player.prototype.Move = function(direction) {
  oldX = this.position.x
  oldY = this.position.y

  switch (direction) {
    case "U":
      if (this.position.y - 100 >= 0) {
        this.position.y = this.position.y - 100;
      } 
      
      break;
    case "D":
      if (this.position.y + 100 < 800) {
        this.position.y = this.position.y + 100;
      }
      break;
    case "L":
      if (this.position.x - 100 >= 0 ) {
        this.position.x = this.position.x - 100;
      }
      break;
    case "R":
      if (this.position.x + 100 < 800) {
        this.position.x = this.position.x + 100;
      } 
    default:
      break;
  }
  Player.prototype.takeDamageFrom = function(enemy) {
    // enemy.isIntanceOf
  };
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

function updatePjs() {}
