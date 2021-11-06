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