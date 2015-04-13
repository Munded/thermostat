describe('Thermostat', function(){

  var thermostat;

  describe('it starts with a default value', function(){

    it('starts with a value of 20', function(){
      thermostat = new Thermostat();
      expect(thermostat.getTemperature()).toEqual(20);
    });

  });

});