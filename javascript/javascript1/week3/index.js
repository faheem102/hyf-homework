//Step- 1: Item Array Removal

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  
  // Write some code here
  const nameToRemove = names.splice(1,1);
  // Code done
  console.log(names);

  //Step- 2 : When we will be there?

function travelTime(speed, distance) {
    //const timeInnumbers = distance/speed;
    const timeInnumbers = (distance/speed) * 60;
    const hours = Math.floor(timeInnumbers/60); 
    const minutes = Math.round(timeInnumbers % 60);
    return `${hours} hours ${minutes} minutes`;
}
console.log (travelTime(50, 432));

//Step- 3 Series Duration 

const seriesDurations = [
    {
        title: "Game of thrones",
        days: 7,
        hours: 18,
        minutes: 6,
    },
    {
        title: "Vikings",
        days: 2,
        hours: 17,
        minutes: 16,
    },
    {
        title: "Money Heist",
        days: 4,
        hours: 17,
        minutes: 6,
    },
    {
        title: "Squid Game",
        days: 8,
        hours:2,
        minutes:12,
    },
  ];

function logOutSeriesText() {
    // write code here
    //Game of thrones took 0.01% of my life
  //Sopranos took 0.012% of my life
  //The Wire took 0.007% of my life
  
  //In total that is 0.2% of my life
    var totalYearsPerectage = 0;
    for(i=0; i<seriesDurations.length; i++){
    var durationInYears = ((seriesDurations[i].days * 24) + (seriesDurations[i].hours) + (seriesDurations[i].minutes/60))/8470;
      var percentInLife = (durationInYears/80)*100;
      console.log(seriesDurations[i].title + " took " + durationInYears.toFixed(3) + " of my life" )
      totalYearsPerectage += percentInLife;
    }
  console.log("In total that is "+ totalYearsPerectage.toFixed(2) +"% of my life");
  }
  
logOutSeriesText(); // logs out the text found above


//Step- 4 Taking Notes


const notes = [];

function saveNote(content, id) {
  // write some code here
  
  var noteTaking = {"id": id, "content": content};
  notes.push(noteTaking);
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("take children out", 3);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

//Step- 5 CactusIO-interactive

const activities = [];
  function addActivity(date, activity, duration){
      const activityVar = {"date": date, "activity":activity, "duration":duration };
      activities.push(activityVar);

      
  }
  addActivity("23/7-18", "Youtube", 30);
  addActivity("23/7-18", "facebook", 40);
  addActivity("23/7-18", "twitter", 50);
  
  console.log(activities);

function showStatus(activities){
    var duration = 0;
    for (i = 0; i<activities.length; i++){
        duration += activities[i].duration;


    }
console.log("You have added "+activities.length +" activities. They amount to "+duration +" min. of usage")

}


  showStatus(activities); 


  // Sorry ! Could not work on adding special features to this assignment questions. hopefully will work in the class.
  //need some help and guidance to add special features to the activity and notes taking apps. 

