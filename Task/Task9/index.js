let age = "11";
let raceNumber = Math.floor(Math.random() * 1000);
if(age>18)
    raceNumber += 1000;
let startTime = "";
if(age>18)
    startTime = "9:30 am";
else if(age<=18)
    startTime = "11:00 am";
else
    startTime = "12:30 pm";

console.log(`raceNumber is: ${raceNumber}`);
console.log(`startTime is: ${startTime}`);

let registrationEarly = true;
let runnerAge = 19;

if(runnerAge>=18 && registrationEarly)
    raceNumber += 1000;

if(runnerAge>18 && registrationEarly)
    console.log(`Runner with the age ${runnerAge} will race at 9:30 am with their raceNember as ${raceNumber}`);
else if(runnerAge>18 && !(registrationEarly))
    console.log(`Runner with the age ${runnerAge} will race at 11:00 am with their raceNember as ${raceNumber}`);
else if(runnerAge<18)
    console.log(`Runner with the age ${runnerAge} will race at 12:30 am with their raceNember as ${raceNumber}`);
else
    console.log(`The runner has to see the registration desk`);