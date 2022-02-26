//!--Giphy App--!

const gifKeyword = document.getElementById("giphy-keyword")
const gifNumber = document.getElementById("giphy-number")
const gifButton = document.getElementById("giphy-button")
const gifDisplay = document.getElementById("giphy-display")



gifButton.addEventListener("click", () =>{
  const getWord = gifKeyword.value
  const getNumber = gifNumber.value

  const api = `https://api.giphy.com/v1/gifs/search?q=${getWord}&limit=${getNumber}&api_key=OVMdw9YMkayCQT986VoJOzNFS0SJd2M5`
  fetch(api)
  .then((response)=>{
    return response.json()
})
  .then(obj =>{
    console.log(obj);
    const result = obj.data
    result.forEach(element => {
      let gifImages = document.createElement("img")
      gifImages.src = element.images.fixed_height.webp
      gifDisplay.appendChild(gifImages)
    });
  
})

 })
  