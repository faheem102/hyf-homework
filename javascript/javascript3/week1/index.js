//!--Music JSON file--!
    
[
    {
      "Name": "Enrique Inglesias",
      "image":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Robin_Wong_Enrique_013.JPG/220px-Robin_Wong_Enrique_013.JPG",
      "Age":"46",
      "Nationality": "Spain",
      "favorite song": "Bailamos"


    },
    {
      "Name": "Ricky Martin",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Ricky_Martin_in_store_appearance%2C_Sydney_Australia_%281%29.jpg/220px-Ricky_Martin_in_store_appearance%2C_Sydney_Australia_%281%29.jpg",
      "Age": "49",
      "Nationality": "Spain",
      "favorite song": "Livin' la Vida Loca"

    }
  ]
  // I have used openweather api and used it. it is a very cool api to fetch data about weather to use in own apps.
  // This api is has different endpoints. If someone is looking for current weather data then the following api endpoint 
  //should be used api.openweathermap.org/data/2.5/weather
  // Along with above URL one need to use parameters like cityname, zip code, geolocation and api key as well
  // one example of using this api with different parameters is following 
  //'https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=2e67673623b242fce63358a81c88036e'
  
// !--Weather app--!

const cityName = document.getElementById("heading")
      const temperature = document.getElementById("temppara")
      const feeltemp = document.getElementById("feelslike")
      const wind = document.getElementById("cl-1")
      const description = document.getElementById("cl-2")
      const riseTime = document.getElementById("cl-3")
      const sunTime = document.getElementById("cl-4")
      
      const myButton = document.getElementById("location")
      function getWeather(myData){
        
        
        const city =  myData.name
        const mytemp = myData.main.temp
        const feeling = myData.main.feels_like
        const windSpeed = myData.wind.speed
        const weatherDes = myData.weather[0].description
        const sunRise = myData.sys.sunrise
        const sunSet = myData.sys.sunset
        const date1 = new Date(sunRise * 1000)
        const hours1 = date1.getHours()
        const minutes1 = date1.getMinutes()
        const date2 = new Date(sunSet * 1000)
        const hours2 = date2.getHours()
        const minutes2 = date2.getMinutes()
        
        cityName.innerHTML = city
        temperature.innerHTML = mytemp + " °C "
        feeltemp.innerHTML = `feels like ${feeling}°C`
        const icon = myData.weather[0].icon
        const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
        const myImage = document.getElementById("image")
        myImage.src=imageUrl
        wind.innerHTML = windSpeed
        description.innerHTML = weatherDes
        riseTime.innerHTML = `0${hours1} : ${minutes1}`
        sunTime.innerHTML = `${hours2} : ${minutes2}`
        }
      
        
        
      
      fetch('https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=2e67673623b242fce63358a81c88036e')
      .then(response => response.json())
      .then(myData =>getWeather(myData))

//!--Weather app with geoLocation--!

myButton.addEventListener("click", () =>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position) => {
        const lati = position.coords.latitude;
        const long = position.coords.longitude;
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&units=metric&appid=2e67673623b242fce63358a81c88036e`;
        fetch(api) 
       .then((response) =>{
           return response.json();
       })
       .then(myData => getWeather(myData))

    })
  } 
})