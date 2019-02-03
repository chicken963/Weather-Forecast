class UI{
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = Array.from(document.querySelectorAll('.w-desc'));
    this.datetime = Array.from(document.querySelectorAll('.datetime'));
    this.string = Array.from(document.querySelectorAll('.w-string'));
    this.details = Array.from(document.querySelectorAll('.w-details'));
    this.icon = Array.from(document.querySelectorAll('.w-icon'));
    this.humidity = Array.from(document.querySelectorAll('.w-humidity'));
    this.feelsLike = Array.from(document.querySelectorAll('.w-feels-like'));
    this.dewpoint = Array.from(document.querySelectorAll('.w-dewpoint'));
    this.wind = Array.from(document.querySelectorAll('.w-wind'));
  }
  

  paint(weather){
    
    let location = `${weather.location.name}, ${weather.location.country}`;
    let objDates = weather.forecast.forecastday.map(dayWeather => dayWeather.date);
    let objDesc = weather.forecast.forecastday.map(dayWeather => dayWeather.day.condition.text);
    let objCelsium = weather.forecast.forecastday.map(dayWeather => dayWeather.day.avgtemp_c);
    let objIcon = weather.forecast.forecastday.map(dayWeather => {
      return 'https:' + dayWeather.day.condition.icon;
    });
    let objHumidity = weather.forecast.forecastday.map(dayWeather => dayWeather.day.avghumidity);
    let objWind = weather.forecast.forecastday.map(dayWeather => dayWeather.day.maxwind_kph);

    
    
    
    this.fillLocation(location);
    fillFieldSet('', '', this.datetime, objDates);
    fillFieldSet('', '', this.desc, objDesc);
    fillFieldSet('', `${String.fromCharCode(176)}C`, this.string, objCelsium);
    fillFieldSet('Отн. влажность: ', '%', this.humidity, objHumidity);
    fillFieldSet('Скорость ветра: ', ' км/ч', this.wind, objWind);
    
    this.icon.forEach((dayContainer) =>{
      dayContainer.setAttribute('src', objIcon[this.icon.indexOf(dayContainer)]);
    })

    


  }


  fillLocation(place){
    console.log('fill loc', place);
    this.location.textContent = `${place}`;
  }

  fillDesc(desc){
    console.log(desc);
    fillFieldSet('', '', this.desc, desc);
  }
}

function fillFieldSet(preDesc, postDesc, fieldSet, dataSet){
  // console.log(fieldSet, dataSet);
 fieldSet.forEach((field) =>{
    field.textContent = preDesc + dataSet[fieldSet.indexOf(field)] + postDesc;
  })

}