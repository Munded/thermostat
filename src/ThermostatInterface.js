var thermostat = new Thermostat();

function colorChange(change){
  $('.thermostat').css('color', change);
};

function color(){
  if(thermostat.tempColor === "Yellow") colorChange("rgb(255, 215, 0)");
  if(thermostat.tempColor === "Red") colorChange("rgb(178, 34, 34)");
  if(thermostat.tempColor === "Green") colorChange("rgb(27,152,27)")
};

function view(){
  color()
  $('#view').html(thermostat.temperature);
};

// function errMessage(){

// };

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
  try{ thermostat.increase(); }
  catch(err){ console.log('Maximum Temperature Reached')};
  view();
});

$('#buttonDown').click(function(){
  try{ thermostat.decrease(); }
  catch(err){ console.log('Minimum Temperature Reached')};
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

