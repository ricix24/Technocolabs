let userName = "Rishi";
if(userName)
    console.log(`Hello, ${userName}`);
else
    console.log("Hello!");
let userQuestion = "";

console.log(`User ${userName} asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
if(eightBall===0)
    console.log("It is certain");
else if(eightBall===1)
    console.log("It is decidedly so");
else if(eightBall===2)
    console.log("Reply hazy try again");
else if(eightBall===3)
    console.log("Cannot predict now");
else if(eightBall===4)
    console.log("Do not count on it");
else if(eightBall===5)
    console.log("My sources say no");
else if(eightBall===6)
    console.log("Outlook not so good");
else
    console.log("Signs point to yes");

console.log(`The Magic Eight Ball’s value is ${eightBall}`);