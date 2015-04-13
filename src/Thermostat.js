var Thermostat = function() {
  var temperature = 20;
  
  this.getTemperature = function(){
    return temperature;
  };
};

// Thermostat.prototype.getTemperature = function() {
//   return this._temperature;
// };