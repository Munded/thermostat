describe('thermostat interface', function(){

  beforeEach( function(){
    jasmine.getFixtures().fixturesPath = '.';
    loadFixtures('index.html');
    thermostat = new Thermostat()
  });

  describe('temperature display', function(){

    it('shows the default temperature', function(){
      expect('#view').toContainText('20');
    });

    it('in powersave mode, max temp is 25', function(){
      for (i=0; i < 6; i++){
        $('#buttonUp').click();
      }
      // expect('#maxMin').toContainText('Maximum Temperature Reached');
      expect('#view').toContainText('25');
    });

    it('without powersave mode, max temp is 35', function(){
      $('#powerSavingSwitch').click();
      for (i=0; i < 16; i++){
        $('#buttonUp').click();
      }
      // expect('#maxMin').toContainText('Maximum Temperature Reached');
      expect('#view').toContainText('35');
    });

    it('minimum temp is 10', function(){
      for (i=0; i < 11; i++){
        $('#buttonDown').click();
      }
      // expect('#maxMin').toContainText('Minimum Temperature Reached');
      expect('#view').toContainText('10');
    });

  });

  describe('has colour according to temperature', function(){

    it('if temp is between 18 and 25, colour is yellow', function(){
      expect('.thermostat').toHaveCss({color: "rgb(255, 215, 0)"});
    });

    it('is green below 18', function(){
      for (i=0; i< 3; i ++){
        $('#buttonDown').click()
      };
      expect('.thermostat').toHaveCss({color: "rgb(27, 152, 27)"});
    });

    it('is red above 25', function(){
      $('#powerSavingSwitch').click()
    for (i=0; i< 6; i ++){
      $('#buttonUp').click()
    };
      expect('.thermostat').toHaveCss({color: "rgb(178, 34, 34)"});
    });
  });

  describe('Changing the temperature', function(){

    it('can increase temp by pressing up button', function(){
      $('#buttonUp').click();
      expect('#view').toContainText('21');
    });

    it('can decrease temp by pressing "down" button', function(){
      $('#buttonDown').click();
      expect('#view').toContainText('19');
    });

    it('temperature resets to default when click reset button', function(){
      $('#buttonUp').click();
      $('#buttonReset').click();
      expect('#view').toContainText('20');
    });

    it('displays power saving mode', function(){
      expect('#powerSave').toContainText('On');
    });

    it('can change power saving mode', function(){
      $('#powerSavingSwitch').click();
      expect('#powerSave').toContainText('Off');
    });

  });

});