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


