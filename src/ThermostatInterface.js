var thermostat = new Thermostat();

function colorChange(change){
  $('.thermostat').css('color', change);
}

function color(){
  if(thermostat.tempColor === "Yellow") colorChange("rgb(255, 215, 0)");
  if(thermostat.tempColor === "Red") colorChange("rgb(178, 34, 34)");
  if(thermostat.tempColor === "Green") colorChange("rgb(27,152,27)")
};

function maxMinFade(){
  if(thermostat.temperature === 11){
    $('#maxMin').fadeOut([2]);
  }
  if(thermostat.temperature === 24  && thermostat.powerSaving === true){
    $('#maxMin').fadeOut([2]);
  }
  if(thermostat.temperature === 34  && thermostat.powerSaving === false){
  $('#maxMin').fadeOut([2]);
  }
}

function background(){
  if(thermostat.tempColor === 'Yellow'){
    $('body').css('background', "url('/css/images/sunny.jpg')");
  };
  if(thermostat.tempColor === 'Green'){
    $('body').css('background', "url('/css/images/cloudy.jpg')");
  };
  if(thermostat.temperature <= 13){
    $('body').css('background', "url('/css/images/cold.jpg')");
  };
    if(thermostat.tempColor === 'Red'){
    $('body').css('background', "url('/css/images/desert.jpg')");
  };
};

function view(){
  color();
  background();
  $('#view').html(thermostat.temperature);
  maxMinFade();
};

function temperatureConverter(temp){
    temp = temp - 273.15;
    return temp.toFixed(1);
}

function switchStatus(mode){
  $('#powerSave').html(mode);
}

function powerSaveSwitch(){
  if (thermostat.powerSaving){
   switchStatus('On');
 }
  else {
    switchStatus('Off');
  }
}



view();
powerSaveSwitch();


$('#buttonUp').click(function(){
  try{ thermostat.increase(); }
  catch(err){
   $('#maxMin').text('Maximum Temperature Reached');
   $('#maxMin').fadeIn();
  }
  view();
});

$('#buttonDown').click(function(){
  try{ thermostat.decrease(); }
  catch(err){
    $('#maxMin').text('Minimum Temperature Reached');
    $('#maxMin').fadeIn()
  };
  view();
});

$('#buttonReset').click(function(){
  thermostat.resetTemperature();
  view();
  $('#maxMin').fadeOut([2]);
});

$('#powerSavingSwitch').click(function(){
  thermostat.changeMode();
  powerSaveSwitch();
  view();
  $('#maxMin').fadeOut([2]);
});

var OpenWeather = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk';

  $.getJSON(OpenWeather, function(data) {
    getTemp = data.main.temp;
    temp = temperatureConverter(getTemp);
    $('#outsideTemperature').html(temp);
  });
