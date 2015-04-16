var Thermostat = function(){
  this.temperature = 20
  this.powerSaving = true
  this.tempColor = "Yellow"
};

// Thermostat.prototype.colorChange = function() {
//   if(this.temperature < 18){ this.tempColor = "Green"

//   };
// };

Thermostat.prototype.increase = function() {
  if(this.powerSaving === true && this.temperature >= 25){ 
      throw new Error("Max temperature has been reached")
  };
  
  if(this.powerSaving === false && this.temperature >= 35){
      throw new Error("Max temperature has been reached")
  };

  this.temperature ++
  this.colorChange();
};

Thermostat.prototype.decrease = function() {
  if(this.temperature <= 10)
  {
    throw new Error("You cannot go lower than 10 degrees!");
  }

  this.temperature --
  this.colorChange();
};

Thermostat.prototype.resetTemperature = function() {
   this.temperature = 20
   this.tempColor = "Yellow"
};

Thermostat.prototype.colorChange = function() {
  if(this.temperature >= 25){ this.tempColor = "Red"};
  if(this.temperature <= 18){ this.tempColor = "Green"};
  if(this.temperature > 18 && this.temperature < 25){ this.tempColor = "Yellow"}
};

Thermostat.prototype.changeMode = function() {
  this.powerSaving = !(this.powerSaving);
};
