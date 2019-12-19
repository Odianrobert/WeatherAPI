var button = document.querySelector('#button')
var name = document.querySelector('#name')
var date = document.querySelector('.date')
var temp = document.querySelector('#temp')
var icon = document.querySelector('#icon')
var humidity = document.querySelector('#humidity')
var uvIndex = document.querySelector('#uvIndex')
var windSpeed = document.querySelector('#windSpeed')
var fiveday = document.querySelector('.fiveDay')

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
document.querySelector('#dateTime').textContent = Date();
//console.log(date+' '+time)

document.querySelector('#button').addEventListener('click', function(){
  event.preventDefault()
  var inputValue = document.querySelector('#inputValue')
  fetch ('https://api.openweathermap.org/data/2.5/weather?zip='+inputValue.value+'&appid=7f517c5b35eadcb0d489ee411ba832f4')
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => {
    
    var nameValue = data['name'];
    //var tempValue = data['main']['temp']; need to convert
    var tempValue = Math.round((data['main']['temp'] -273.15)*1.8)+32
    //var iconValue = data['weather'][0]['icon'];
    var iconValue = "http://openweathermap.org/img/w/" + data['weather'][0]['icon'] + ".png";
    var humidityValue = data['main']['humidity'];
    var windSpeedValue = data['wind']['speed'];
    
    document.querySelector('#name').textContent = nameValue;
    document.querySelector('#temp').textContent = tempValue + ' Degrees Farenheit';
    document.querySelector('#icon').textContent = iconValue;
    document.querySelector('#humidity').textContent = humidityValue + '% Humidity';
    document.querySelector('#windSpeed').textContent = windSpeedValue + ' MPH Wind Speed';
    
  })
})

//var nameValue = data['uvIndex'];
document.querySelector('#button').addEventListener('click', function(){
  event.preventDefault()
  var inputValue = document.querySelector('#inputValue')
  fetch ('https://api.openweathermap.org/data/2.5/weather?zip='+inputValue.value+'&appid=7f517c5b35eadcb0d489ee411ba832f4')
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => {

      var latValue = data['coord']['lat'];
      var lonValue = data['coord']['lon'];
      console.log(latValue, lonValue)

      //fetch ('http://api.openweathermap.org/data/2.5/uvi?appid=7f517c5b35eadcb0d489ee411ba832f4&lat={lat}&lon={lon}')
       //fetch ('http://api.openweathermap.org/data/2.5/uvi?appid=7f517c5b35eadcb0d489ee411ba832f4&lat=latValue&lon=lonValue')

      
      // var uvValue = data['value'];
      // document.querySelector('#uvIndex').textContent = uvValue;
    })
  })

  




//http://openweathermap.org/img/wn/''@2x.png  to convert code to weather icons
//(0K − 273.15) × 9/5 + 32 = -459.7°F to convert kelvin to farenheit
//W_ICON.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//W_ICON.alt = `${data.weather[0].description} weather icon`;

// coord:
// lon: -81.83
// lat: 41.25
//api.openweathermap.org/data/2.5/uvi?lat=37.75&lon=-122.37
//"http://website.com/page.aspx?list=" + a + "&sublist=" + b







    