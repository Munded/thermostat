var thermostat = new Thermostat();

function view(){
  $('#view').html(thermostat.temperature);
};

function switchStatus(mode){
  $('#powerSave').html(mode);
};

function powerSaveSwitch(){
  if (thermostat.powerSaving){
   switchStatus('On');}
  else {
    switchStatus('Off');
  };
};

view();
powerSaveSwitch();


$('#buttonUp').click(function(){
  thermostat.increase();
  view();
});

$('#buttonDown').click(function(){
  thermostat.decrease();
  view();
});

$('#buttonReset').click(function(){
  thermostat.resetTemperature();
  view();
});

$('#powerSavingSwitch').click(function(){
  thermostat.changeMode();
  powerSaveSwitch();
  view();
});

