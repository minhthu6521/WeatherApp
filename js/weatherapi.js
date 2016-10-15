

function getWeather(lat, lon){
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"32&appid=9206ce8afda2f891654617959048070e", function(obj){
        $(".description").html(obj["name"] + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + titleCase(obj["weather"][0]["description"]));
        $("#weathericon").addClass("wi wi-owm-" + obj["weather"][0]["id"]);
        var celius = Math.round(obj["main"]["temp"] - 273.15);
        var fahrenheit =  Math.round(obj["main"]["temp"] * 9/5 - 459.67);
        $(".temp").html(celius + "&#8451 / " +fahrenheit + "&#8457");
        console.log(obj);
    });
}

function titleCase(str) {
     words = str.toLowerCase().split(' ');

     for(var i = 0; i < words.length; i++) {
          var letters = words[i].split('');
          letters[0] = letters[0].toUpperCase();
          words[i] = letters.join('');
     }
     return words.join(' ');
}

if(navigator.geolocation){
     navigator.geolocation.getCurrentPosition(function(position){
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        console.log("latitude: " + lat + ", longitude: " + lon);
        getWeather(lat,lon);
    });
}