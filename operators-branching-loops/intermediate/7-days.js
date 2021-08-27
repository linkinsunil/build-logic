let days = {
    "Monday": "Weekday", 
    "Tuesday": "Weekday", 
    "Wednesday": "Weekday", 
    "Thursday": "Weekday", 
    "Friday": "Weekday", 
    "Saturday": "Weekend", 
    "Sunday": "Weekend"
}

function isWeekday(){

    let userInput = prompt("Enter a day - ")
let normalisedcase=userInput[0].toUpperCase().concat(userInput.substr(1).toLowerCase());
    if(days.hasOwnProperty(normalisedcase))
    {
        console.log(`${normalisedcase} is a ${days[normalisedcase]}`)
    } else {
        console.log(`Input is not recognized. Please use proper format.`)
    }

}

isWeekday()