describe('Thermostat', function(){

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });
  describe('it can vary it\'s temperature', function(){

    it('starts with a value of 20', function(){
      expect(thermostat.temperature).toEqual(20);
    });

    it('can increase the temp by 1', function(){
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it('can decrease the temp by 1', function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it('has a minimum temperature', function(){
      thermostat.temperature = 11
      expect( thermostat.down ).toThrow(new Error('Minimum Temperature Reached'))
    });
  });

});