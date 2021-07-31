let raceNumber = Math.floor(Math.random() * 1000);

let isEarlyReg = false;

let runnerAge = 18;

//gives race number, and determines race time
if(runnerAge > 18 && isEarlyReg===true){
   console.log(`You will race at 9:30am. Your race number is ${raceNumber += 1000}`);
} else if(runnerAge > 18 && isEarlyReg===false){
  console.log(`You will race at 11:00am. Your race number is ${raceNumber}`);
}else if(runnerAge < 18){
  console.log(`You will race at 12:30pm. Your race number is ${raceNumber}`);
}else{
  console.log('See the registration desk');
}



