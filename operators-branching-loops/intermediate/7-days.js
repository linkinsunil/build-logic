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

    if(userInput in days){
        console.log(`${userInput} is a ${days[userInput]}`)
    } else {
        console.log(`Input is not recognized. Please use proper format.`)
    }

}

isWeekday()