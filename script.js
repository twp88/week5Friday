$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.returnTemperature());

  $("#power-saving-status").text(thermostat.returnMode());

  $("#powerModeOff").click(function() {
    thermostat.powerModeOff();
  $("#power-saving-status").text(thermostat.returnMode());
  });

  $("#powerModeOn").click(function() {
    thermostat.powerModeOn();
  $("#power-saving-status").text(thermostat.returnMode());
  });


});
