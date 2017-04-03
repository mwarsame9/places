function Places(location, country, year, reason, memory, weather) {
  this.location = location;
  this.country = country;
  this.year = year;
  this.reason = reason;
  this.memory = memory;
  this.weather = weather;
}



$(document).ready(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();

    var locationInput = $("input[name=location]").val();
    var countryInput = $("input[name=country]").val();
    var yearInput = $("input[name=year]").val();
    var reasonInput = $("input[name=reason]").val();
    var memoryInput = $("input[name=memory]").val();
    var weatherInput = $("input[name=weather]").val();

    $("input[name=location]").val("");
    $("input[name=country]").val("");
    $("input[name=year]").val("");
    $("input[name=reason]").val("");
    $("input[name=memory]").val("");
    $("input[name=weather]").val("");

    var newPlace = new Places(locationInput, countryInput, yearInput, reasonInput, memoryInput, weatherInput);

    $("#output").append("<li><span class='clickable'>" + newPlace.location + "</span></li>");

    $("#output").show();

    $(".clickable").last().click(function() {
      $("#show-output").show();
      $(".location").text(newPlace.location);
      $(".country").text(newPlace.country);
      $(".year").text(newPlace.year);
      $(".reason").text(newPlace.reason);
      $(".memory").text(newPlace.memory);
      $(".weather").text(newPlace.weather);

    })

  });
});








// var sanDiego = new location ("USA", "2016", "lived there", "surfing", "always sunny");
//
// var northCarolina = new location ("USA", "2015", "lived there", "offroading in the mountains", "snowy");
//
// var sanFrancisco = new location ("USA", "2014", "lived there", "working at a startup", "sunny and windy");
//
// var toronto = new location ("Canada", "2014", "");
