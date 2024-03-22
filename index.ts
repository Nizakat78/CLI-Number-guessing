#! usr/bin/env
import inquirer  from "inquirer";

// 1) computer will gerenate a random number
// 2) user input for guesting number
// 3)  compare user input with computr generated number and show the number

//const randomNumber = 14;
const randomNumber = Math.floor(Math.random()*10+1);
console.log(randomNumber)

const  answer = await inquirer.prompt([
    {name :"UserGuessedNumber",
    type: "number",
    message: "Please guess a number 1-10:"},
])

console.log(answer)

if (answer.UserGuessedNumber===randomNumber){
    console.log("Congutuation your are right Number")

}
else{
    console.log(`Your are generate a wrong Number `)

}