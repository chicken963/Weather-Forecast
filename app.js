const ui = new UI();


const weather = new Weather('Samara');
weather.getWeatherPromise()
  .then(results => results.json())
  .then(results => {
    ui.paint(results);
    })
  .catch(err => console.log(err));

  

