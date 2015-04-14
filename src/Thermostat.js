var Thermostat = function() {
  this.temperature = 20;
};

Thermostat.prototype.up = function() {
  this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this.temperature === 10) throw 'Minimum Temperature Reached';
  this.temperature -= 1;
};
