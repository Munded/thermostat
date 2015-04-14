
var Thermostat = function(){
  this.temperature = 20
  this.powersaving = true
  this.tempColor = "Yellow"
};

// Thermostat.prototype.colorChange = function() {
//   if(this.temperature < 18){ this.tempColor = "Green"

//   };
// };

Thermostat.prototype.increase = function() {
  if(this.powersaving === true && this.temperature >= 25){ 
      throw new Error("Max temperature has been reached")
  };
  
  if(this.powersaving === false && this.temperature >= 35){
      throw new Error("Max temperature has been reached")
  };

  this.temperature ++
  if(this.temperature >= 25){ this.tempColor = "Red"

  };
};

Thermostat.prototype.decrease = function() {
  if(this.temperature <= 10)
  {
    throw new Error("You cannot go lower than 10 degrees!");
  }

  this.temperature --
  if(this.temperature =< 18){ this.tempColor = "Green"

  };
};

Thermostat.prototype.resetTemperature = function() {
   this.temperature = 20
   this.tempColor = "Yellow"
};
