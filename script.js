var button = document.querySelector('#button')
var name = document.querySelector('#name')
var date = document.querySelector('.date')
var temp = document.querySelector('#temp')
var icon = document.querySelector('#icon')
var humidity = document.querySelector('#humidity')
var uvIndex = document.querySelector('#uvIndex')
var windSpeed = document.querySelector('#windSpeed')
var fiveday = document.querySelector('#fiveDay')

document.title = 'Weather Dashboard'


// var iconValue
document.querySelector('#button').addEventListener('click', function(){
  event.preventDefault()
  var inputValue = document.querySelector('#inputValue')
  fetch ('https://api.openweathermap.org/data/2.5/weather?zip='+inputValue.value+'&appid=7f517c5b35eadcb0d489ee411ba832f4')
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => {
    
    var nameValue = data['name'];
    document.querySelector('#name').classList.add('now');
    //var tempValue = data['main']['temp']; need to convert
    var tempValue = Math.round((data['main']['temp'] -273.15)*1.8)+32
    document.querySelector('#temp').classList.add('now1')
    //var iconValue = data['weather'][0]['icon'];
    var iconValue = "http://openweathermap.org/img/w/" + data['weather'][0]['icon'] + ".png";
    document.querySelector('#icon').classList.add('now1')
    var humidityValue = data['main']['humidity'];
    document.querySelector('#humidity').classList.add('now1')
    var windSpeedValue = data['wind']['speed'];
    document.querySelector('#windSpeed').classList.add('now1')
    
    document.querySelector('#name').textContent = nameValue;
    document.querySelector('#temp').textContent = tempValue + ' °';
    document.getElementById('icon').src = iconValue;
    document.querySelector('#humidity').textContent = humidityValue + '% Humidity';
    document.querySelector('#windSpeed').textContent = windSpeedValue + ' MPH Wind Speed';

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
document.querySelector('#dateTime').textContent = Date();
document.querySelector('#dateTime').classList.add('now1', 'now')
//console.log(date+' '+time)

        //localStorage.setItem('city', nameValue);
        //document.getElementById('name').innerHTML = localStorage.getItem('name');
        var ul = document.querySelector('#list')
        var button2 = document.querySelector('#button2')
        let itemsArray = localStorage.getItem(nameValue) ? JSON.parse(localStorage.getItem(nameValue)) : [nameValue]

        localStorage.setItem(nameValue, JSON.stringify(itemsArray))
        var data = JSON.parse(localStorage.getItem(nameValue))

        var liMaker = text => {
          var li = document.createElement('li')
          li.textContent = text
          ul.appendChild(li)
        }

      data.forEach(item => {
        liMaker(item)
      })

      button2.addEventListener('click', function() {
        localStorage.clear()
        while (ul.firstChild) {
          ul.removeChild(ul.firstChild)
  }
})

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
      //console.log(data)

      // fetch (`http://api.openweathermap.org/data/2.5/uvi?appid=7f517c5b35eadcb0d489ee411ba832f4&lat=${latValue}&lon=${lonValue}`).then(
      //   data => { console.log(data)
      //     //var uvValue = data['value'];
      //   //document.querySelector('#uvIndex').textContent = uvValue;
      // }
      //)
       //fetch ('http://api.openweathermap.org/data/2.5/uvi?appid=7f517c5b35eadcb0d489ee411ba832f4&lat=latValue&lon=lonValue')

      
       getIndexVal(latValue,lonValue)
    })
  })

  const getIndexVal = function(lon, lat)
  {
    fetch (`https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=7f517c5b35eadcb0d489ee411ba832f4`).then(
        data => data.json()
         
      ).then( dataJson => {
       var uvValue = dataJson['value'];
        document.querySelector('#uvIndex').textContent = 'UV Index: ' + uvValue;
        document.querySelector('#uvIndex').classList.add('now1')
      }
      )
  }

  document.querySelector('#button').addEventListener('click', function(){
    event.preventDefault()

    var inputValue = document.querySelector('#inputValue')
    fetch ('https://api.openweathermap.org/data/2.5/forecast?zip='+inputValue.value+'&appid=7f517c5b35eadcb0d489ee411ba832f4')
      .then(response => response.json())
      .then(data => {
        //console.log(data)
        var fiveDay1 = data.list[4]
        var dt = fiveDay1['dt'];
        var dateTimeString1 = moment.unix(dt).format("MM-DD-YYYY");
        //var s = new Date(1504095567183).toLocaleDateString("en-US")
        //var timestamp = moment.unix(1293683278);
        //var tempValue = Math.round((data['main']['temp'] -273.15)*1.8)+32
        var temp = Math.round((fiveDay1['main']['temp'] -273.15)*1.8)+32
        var humidity = fiveDay1['main']['humidity'];
        //var icon = fiveDay1['weather']['icon']
        var icon = "http://openweathermap.org/img/w/" + fiveDay1['weather'][0]['icon'] + ".png";
        
        //console.log(dt, temp, humidity)
        document.querySelector('#date1').textContent = dateTimeString1;
        document.querySelector('#temp1').textContent = temp + ' °';
        document.querySelector('#humidity1').textContent = humidity + '% HUM';
        document.getElementById('icon1').src = icon;
        
        var fiveDay2 = data.list[12]
        var dt = fiveDay2['dt'];
        var dateTimeString2 = moment.unix(dt).format("MM-DD-YYYY");
        var temp = Math.round((fiveDay2['main']['temp'] -273.15)*1.8)+32
        var humidity = fiveDay2['main']['humidity'];
        var icon = "http://openweathermap.org/img/w/" + fiveDay2['weather'][0]['icon'] + ".png";

        
        document.querySelector('#date2').textContent = dateTimeString2;
        document.querySelector('#temp2').textContent = temp + ' °';
        document.querySelector('#humidity2').textContent = humidity + '% HUM';
        document.getElementById('icon2').src = icon;
        
        var fiveDay3 = data.list[20]
        var dt = fiveDay3['dt'];
        var dateTimeString3 = moment.unix(dt).format("MM-DD-YYYY"); 
        var temp = Math.round((fiveDay3['main']['temp'] -273.15)*1.8)+32
        var humidity = fiveDay3['main']['humidity'];
        var icon = "http://openweathermap.org/img/w/" + fiveDay3['weather'][0]['icon'] + ".png";
      
        document.querySelector('#date3').textContent = dateTimeString3;
        document.querySelector('#temp3').textContent = temp + ' °';
        document.querySelector('#humidity3').textContent = humidity + '% HUM';
        document.getElementById('icon3').src = icon;

        var fiveDay4 = data.list[28]
        var dt = fiveDay4['dt']; 
        var dateTimeString4 = moment.unix(dt).format("MM-DD-YYYY");
        var temp = Math.round((fiveDay4['main']['temp'] -273.15)*1.8)+32
        var humidity = fiveDay4['main']['humidity'];
        var icon = "http://openweathermap.org/img/w/" + fiveDay4['weather'][0]['icon'] + ".png";
        
        document.querySelector('#date4').textContent = dateTimeString4;
        document.querySelector('#temp4').textContent = temp + ' °';
        document.querySelector('#humidity4').textContent = humidity + '% HUM';
        document.getElementById('icon4').src = icon;

        var fiveDay5 = data.list[36]
        var dt = fiveDay5['dt']; 
        var dateTimeString5 = moment.unix(dt).format("MM-DD-YYYY");
        var temp = Math.round((fiveDay5['main']['temp'] -273.15)*1.8)+32
        var humidity = fiveDay5['main']['humidity'];
        var icon = "http://openweathermap.org/img/w/" + fiveDay5['weather'][0]['icon'] + ".png";

        //console.log(dt, temp, humidity)
        document.querySelector('#date5').textContent = dateTimeString5;
        document.querySelector('#temp5').textContent = temp + ' °';
        document.querySelector('#humidity5').textContent = humidity + '% HUM';
        document.getElementById('icon5').src = icon;

      })
    })

        
  

      //Date
      //Icon image (visual representation of weather conditions)
      //Temperature
      //Humidity
      
      
      
      
      
      
        //4 12 20 28 36
        //api.openweathermap.org/data/2.5/weather?zip='+inputValue.value+'&appid=7f517c5b35eadcb0d489ee411ba832f4
  
  //5day
  //api.openweathermap.org/data/2.5/forecast?zip={zip code}

//http://openweathermap.org/img/wn/''@2x.png  to convert code to weather icons
//(0K − 273.15) × 9/5 + 32 = -459.7°F to convert kelvin to farenheit
//W_ICON.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
//W_ICON.alt = `${data.weather[0].description} weather icon`;

// coord:
// lon: -81.83
// lat: 41.25
//api.openweathermap.org/data/2.5/uvi?lat=37.75&lon=-122.37
//"http://website.com/page.aspx?list=" + a + "&sublist=" + b







    