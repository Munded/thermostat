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