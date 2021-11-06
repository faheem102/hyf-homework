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