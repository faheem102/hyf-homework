console.log("hello world");
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
    return daysOfWeek[day.getDay()];
    

}
console.log(getEventDay(5));

//Weather Wear

function clothesToWear (temperature) {
    const myClothes = "t-shirt and jeans";
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

//Student Manager

const class07Students = [];

function addStudentToClass(studentName) {

  // You write code here

    if (class07Students.indexOf(studentName) != -1 &&

          studentName !== "Queen")

        console.log("Student " + studentName + " is already in the class");

     else if(studentName !== "Queen" && class07Students.length > 5) 

        console.log("Cannot add more students to class 07");

  

    else if (studentName !== "" || studentName !== undefined)  

        class07Students.push(studentName);

}

function getNumberOfStudents() {

  // You write code here

  return class07Students.length;

}

//Add 6 students

addStudentToClass("Moeed");

addStudentToClass("Fatima");

addStudentToClass("Dua");

addStudentToClass("Ayaan");

addStudentToClass("Ishah");

addStudentToClass("Ishah2");

//Add same student errors

addStudentToClass("Dua");

//Add another student error

addStudentToClass("Samar");
