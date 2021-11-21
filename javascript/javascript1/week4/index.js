const personName = []; 
const toDoList = [];
let commandArray = [];
let operator
  
  
function getReply(command){
  
  
  
  commandArray = command.split(" ");
    //console.log(commandArray);
  
    if(commandArray[0]==="Hello"){
      (personName.push(commandArray[4]));
      console.log(`Nice to meet you ${personName[0]}`)
    }
    else if(commandArray[3]==="name?" && personName.length ===1){
       console.log(`your name is ${personName[0]}`)
       

      }
    else if (commandArray[3] === "name?" && personName.length===0){
        console.log("Please mention your name");
      }
     
     
  
  
    
      
        
    if(commandArray[0]===("Add")){
          (toDoList.push(commandArray[1]));
          console.log(toDoList);
        }
    else if(commandArray[0]===("Remove")){
          toDoList.splice(toDoList.indexOf(commandArray[1]),1);
          console.log(toDoList);
        }
    else if(commandArray[4]===("todo?")){
          console.log(toDoList);
        }

  if (command.includes('+')|| command.includes('-') ||command.includes('*')||command.includes('/')||command.includes('%')){
          operatorArray = command.split(" ");
          if(command.includes('+')){
              operator = Math.floor(operatorArray[2]) + Math.floor(operatorArray[4]);
              console.log(`${operatorArray[2]} + ${operatorArray[4]} = ${operator}`)
      
          }
    if(command.includes('-')){
              operator = Math.floor(operatorArray[2]) - Math.floor(operatorArray[4]);
              console.log(`${operatorArray[2]} - ${operatorArray[4]} = ${operator}`)
      
          }
    if(command.includes('*')){
              operator = Math.floor(operatorArray[2]) * Math.floor(operatorArray[4]);
              console.log(`${operatorArray[2]} * ${operatorArray[4]} = ${operator}`)
      
          }
    if(command.includes('/')){
              operator = Math.floor(operatorArray[2]) / Math.floor(operatorArray[4]);
              console.log(`${operatorArray[2]} / ${operatorArray[4]} = ${operator}`)
      
          }
    if(command.includes('%')){
              operator = Math.floor(operatorArray[2]) % Math.floor(operatorArray[4]);
              console.log(`${operatorArray[2]} % ${operatorArray[4]} = ${operator}`)
      
          }
      
      }
      
  if (command.includes("what day is it today?")){
          
        function dateFun(){
          const getDate = Date();
  
          const getDateArray = getDate.split(" ");
          console.log(`${getDateArray[2]}. of ${getDateArray[1]} ${getDateArray[3]}`);
        
        }
        dateFun();
        
    }
if(command.includes("set a timer for 4 minutes")){
    const startingMinutes = 04;
  let time = startingMinutes * 60;


  const timeInterval = setInterval(updateCountDown, 1000);

  function updateCountDown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    time--;
    console.log("Timer set for 04 minutes");
    if(minutes <=0 && seconds <= 0){
    clearInterval(timeInterval);
    console.log("Timer Finished")
    }
    else{
    console.log(`${minutes}: ${seconds}`);

    }

}
}
}