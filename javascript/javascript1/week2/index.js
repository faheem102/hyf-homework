function getFullname (firstname, surname, useFormalname, gender){
    if(firstname===""  || surname===""){
        return "firstname and surname needs to be filled."
    }
    
   else if(useFormalname === true &&  gender==="male"  ){
       return("lord " + firstname + " " + surname);
   }
   else if (useFormalname ===true && gender === "female"){
       return("Lady " + firstname + " " + surname);
   }
   else{
        return(firstname + " " + surname);
   }
   
}
console.log(getFullname("faheem", "hassan", true, "male"));

//Second stage Event day application
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
function getEventDay (daysremaining){
    const day = new Date();
    day.setDate(day.getDate() + daysremaining);
    console.log(day.getDay());
    let eventDay = daysOfWeek[day.getDay()];
    return eventDay;

}
console.log(getEventDay(5));

//Weather Wear

function clothesToWear (temperature) {
    let myClothes = "t-shirt and jeans";
    if (temperature <= 5) {
        console.log("Put jacket and warm cap on top of " + myClothes + " .drink tea or coffee");
    }
    else if (temperature < 12) {
        console.log ("Wear normal upper on top of " + myClothes);
    }
    else if (temperature >= 26){
        console.log ("Wear flipflops t-shirt and shorts. drink lot of water")
    }
    else {
        console.log(myClothes + " is okay to wear")
    }
}
console.log(clothesToWear(4));