describe('thermostat', function(){

  beforeEach( function(){ 
      thermostat = new Thermostat()
    });

  describe('Changing temperature', function(){

    it('default temperature', function(){
      expect(thermostat.temperature).toEqual(20);
    });

    it('increase by one', function(){
      thermostat.increase();
      expect(thermostat.temperature).toEqual(21);
    });

    it('decrease by one', function(){
      thermostat.decrease();
      expect(thermostat.temperature).toEqual(19);
    });

    it('reset to default temperature', function(){
      thermostat.temperature = 24
      thermostat.resetTemperature();
      expect(thermostat.temperature).toEqual(20);
    });

  });
    
  describe('Maximum and minimum temperature', function(){

    it('can change power saving move', function(){
      thermostat.changeMode();
      expect(thermostat.powerSaving).toEqual(false)
    });

    it('cannot go lower than ten', function(){
      thermostat.temperature = 10;
      expect( function(){ thermostat.decrease(); }).toThrow(new Error ("You cannot go lower than 10 degrees!"));
      expect(thermostat.temperature).toEqual(10);
    });

    it('if powersaving mode is on, max temperature is 25', function(){
      thermostat.powerSaving = true;
      thermostat.temperature = 25;
      expect( function(){ thermostat.increase(); }).toThrow(new Error ("Max temperature has been reached"));
    });

    it('if powersaving mode is off, max temperature is 35', function(){
      thermostat.powerSaving = false;
      thermostat.temperature = 35;
      expect( function(){  thermostat.increase(); }).toThrow(new Error ("Max temperature has been reached"));
    });

  });

  describe('temperature controlled color', function(){

    it('25 or over, color is red', function(){
      thermostat.powerSaving = false;
      thermostat.temperature = 25;
      thermostat.increase();
      expect(thermostat.tempColor).toEqual("Red");
    });

    it('Less than 25, color is yellow', function(){
      thermostat.temperature = 24;
      expect(thermostat.tempColor).toEqual("Yellow");
    });

    it('Less than 18, color is green', function(){
      thermostat.temperature = 18;
      thermostat.decrease()
      expect(thermostat.tempColor).toEqual("Green");
    });
  });
});