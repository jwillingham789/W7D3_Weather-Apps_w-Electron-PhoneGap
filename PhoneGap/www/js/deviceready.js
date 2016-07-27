function kelvin (degK) {
  return Number.parseInt((degK * (9/5)) - 459.67)
}

function deviceReady() {
  fetch('http://api.openweathermap.org/data/2.5/weather?id=4259418&APPID=c85f930bc85698958515238c970fbda0')
    .then(function(response){
      return response.json()
    })
    .then(function(current){

      var cityName = document.getElementById('cityTitle')
      cityName.innerHTML = current.name

      var date = document.getElementById('date')
      var newDate = moment(Date.now()).format('MMMM Do h:mm a')
      date.innerHTML = newDate

      var temp = document.getElementById('temp')
      temp.innerHTML = kelvin(current.main.temp) + '°'

      var currentCond = document.getElementById('currentCond')
      currentCond.innerHTML = current.weather[0].description

    })
    // api.openweathermap.org/data/2.5/forecast/daily?id=4259418&cnt=5&APPID=c85f930bc85698958515238c970fbda0
  fetch('http://api.openweathermap.org/data/2.5/forecast/daily?id=4259418&cnt=6&APPID=c85f930bc85698958515238c970fbda0')
    .then(function(response){
      return response.json()
    })
    .then(function(weather){
          weather.list.forEach(function(result, i){
          if (i === 0) {

          }
          else {
            var forecast = document.getElementById('forecast')

            var div = document.createElement('div')
            div.classList.add('dayContainer')

            var h4 = document.createElement('h4')
            h4.innerHTML = kelvin(result.temp.day) + '°'
            h4.classList.add('forecastTemp')

            var div2 = document.createElement('div')
            div2.classList.add('singleContainer')

            var div3 = document.createElement('div')
            div3.classList.add('singleContainer')

            var i = document.createElement('i')
            i.classList.add('owf')
            i.classList.add('owf-' + result.weather[0].id)
            i.classList.add('weatherSymbols')


            div2.appendChild(h4)
            div3.appendChild(i)
            div.appendChild(div3)
            div.appendChild(div2)
            forecast.appendChild(div)
          }
        })
  })
}
