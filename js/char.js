// Funcion Constructora
function Player(name, strength, position) {
  //Propiedadesh
  this.range = 0;
  this.MAX_MOVE = 0;
  this.position.x = position.x;
  this.position.y = position.y;
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
  switch (direction) {
    case "U":
      this.position.y = this.position.y - 50;
      break;
    case "D":
      this.position.y = this.position.y + 50;
      break;
    case "L":
      this.position.x = this.position.x - 50;
      break;
    case "R":
      this.position.x = this.position.x + 50;
    default:
      break;
  }
  function takeDamageFrom (Player) {

  }

};
// funcion para crear melee
function Melee(race) {
  Player.call(this, name, stregth, position);
  this.range = 1;
  this.MAX_MOVE = 3;
  this.race = race;
} 
Melee.prototype = Object.create(Player.prototype);

// funcion para crear rango
function Ranged(race) {
  Player.call(this.name, stregth, position);
  this.range = 3;
  this.MAX_MOVE = 1;
  this.race = race;
}
Ranged.prototype = Object.create(Player.prototype);

function updatePjs (){
  
}