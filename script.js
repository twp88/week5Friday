$(document).ready(function() {

  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.returnTemperature());

  $("#power-saving-status").text(thermostat.returnMode());

  $("#powerModeOff").click(function() {
    thermostat.powerModeOff();

  $("#power-saving-status").text(thermostat.returnMode());
});

  $("#powerModeOn").click(function() {
    //console.log("Hello")
    thermostat.powerModeOn();
  $("#power-saving-status").text(thermostat.returnMode());
});

  $("#increaseTemperature").click(function() {
    thermostat.increaseTemperature();
    $('#temperature').text(thermostat.returnTemperature());
});

  $("#decreaseTemperature").click(function() {
        thermostat.decreaseTemperature();
        $('#temperature').text(thermostat.returnTemperature());
});

  $("#resetTemperature").click(function() {
    thermostat.resetTemperature();
    $('#temperature').text(thermostat.returnTemperature());
  });

});
