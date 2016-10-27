$(document).ready(function() {

  var thermostat = new Thermostat();
  updateTemperature();

  $("#power-saving-status").text(thermostat.returnMode());

  $("#powerModeOff").click(function() {
    thermostat.powerModeOff();

  $("#power-saving-status").text(thermostat.returnMode());
});

  $("#powerModeOn").click(function() {
    //console.log("Hello")
    thermostat.powerModeOn();
  $("#power-saving-status").text(thermostat.returnMode());
  updateTemperature();
});

  $("#increaseTemperature").click(function() {
    thermostat.increaseTemperature();
    updateTemperature();
});

  $("#decreaseTemperature").click(function() {
        thermostat.decreaseTemperature();
        updateTemperature();
});

  $("#resetTemperature").click(function() {
    thermostat.resetTemperature();
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.returnTemperature());
    $("#usage").text(thermostat.tellUsUsage());
  };

});
