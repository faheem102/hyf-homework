//Step--1 Movies Exercise

fetch("https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json")
        .then((response)=> response.json())
        .then(myData => {
            const badMovies = myData.filter((rate)=>rate.rating<=6).map((rate)=> rate.title)
            const reqYearMovies = myData.filter((rate)=>rate.rating<=6 && rate.year>=2000).map((rate)=> rate.title)
                
            console.log(badMovies)
            console.log(reqYearMovies)
            
        })

//Step--2 Promise that resolves after set time


async function myDelayFunction(resolveAfter){
    await new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(),resolveAfter*1000)


            })
        }

myDelayFunction(8).then(()=> {
    console.log("I am called asynchronously"); // logged out after 8 seconds
          });

//Step-- Rewrite Time

const setTimeoutPromise = (seconds)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve("called after 3 seconds"),seconds)
    })
}

setTimeoutPromise(3000).then((data) => {
  console.log(data);
})


function getCurrentLocation(){
    return new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition((position) => {
            const lati= position.coords.latitude
            const longi = position.coords.longitude
            resolve(`result is ${lati} and ${longi}`)
            
          });

    })
}

getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });


//Step-- Fetching and waiting Exercise
//using async await
function delay(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms))
}

  async function myFunction(){
      await delay(3000)
      try {
          const myApi = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Copenhagen&units=metric&appid=2e67673623b242fce63358a81c88036e")
          const myData = await myApi.json()
          const feelTemp = myData.main.feels_like
          const temp = myData.main.temp
          console.log(`temperature is ${temp}°C and feels like ${feelTemp}°C`)
      }
      catch(error){
          console.log(`${error} there is an error`)
      }
  }
  myFunction();



// fetching and waiting exercise using promises

  
  const fetchApiData = new Promise ((resolve,reject)=>{
    setTimeout(()=>

    fetch("https://api.openweathermap.org/data/2.5/weather?q=Copenhagen&units=metric&appid=2e67673623b242fce63358a81c88036e")
        .then(response=> response.json())
        .then(data=>{
            resolve(data);
}),3000)

  }) 
  fetchApiData.then((data)=>{
    const sunRise = data.sys.sunrise;
    const sunSet = data.sys.sunset;
    const date1 = new Date(sunRise * 1000);
    const hours1 = date1.getHours();
    const minutes1 = date1.getMinutes();
    const date2 = new Date(sunSet * 1000);
    const hours2 = date2.getHours();
    const minutes2 = date2.getMinutes();
console.log(`Sunrise in Copenhagen:- 0${hours1}:${minutes1}am and Sunset:-${hours2}:${minutes2}pm`)
  }).catch((error)=>{})