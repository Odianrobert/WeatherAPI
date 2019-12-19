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
    var tempValue = data['main']['temp'];
    //var nameValue = data['weather'][0]['icon'];
    var humidityValue = data['main']['humidity'];
    //var nameValue = data['uvIndex'];
    var windSpeedValue = data['wind']['speed'];
    
    document.querySelector('#name').textContent = nameValue;
    document.querySelector('#temp').textContent = tempValue;
    //document.querySelector('#icon').textContent = nameValue;
    document.querySelector('#humidity').textContent = humidityValue + '%';
    document.querySelector('#windSpeed').textContent = windSpeedValue + ' mph';
    
    
  })
})




    