$(document).ready(function() {

  var thermostat = new Thermostat();
  updateTemperature();
  boxColour();

  $("#power-saving-status").text(thermostat.returnMode());

  $("#powerModeOff").click(function() {
    thermostat.powerModeOff();
  $("#power-saving-status").text(thermostat.returnMode());
});

  $("#powerModeOn").click(function() {
    thermostat.powerModeOn();
  $("#power-saving-status").text(thermostat.returnMode());
  updateTemperature();
});

  $("#increaseTemperature").click(function() {
    thermostat.increaseTemperature();
    updateTemperature();
    boxColour();
});

  $("#decreaseTemperature").click(function() {
        thermostat.decreaseTemperature();
        updateTemperature();
        boxColour();
});

  $("#resetTemperature").click(function() {
    thermostat.resetTemperature();
    updateTemperature();
    boxColour();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.returnTemperature());
    $("#usage").text(thermostat.tellUsUsage());
  };

  function boxColour() {
    if (thermostat.tellUsUsage() === "low-usage") {
      $('#box').css('background-color', 'blue');
    } else if (thermostat.tellUsUsage() === "medium-usage") {
      $('#box').css('background-color', 'green');
    } else if (thermostat.tellUsUsage() === "high-usage") {
      $('#box').css('background-color', 'red');
  }
  };

});
