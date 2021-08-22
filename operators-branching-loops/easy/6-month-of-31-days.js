const monthInput = document.querySelector("#monthInput");
const outputMessage = document.querySelector("#root");
const btn = document.querySelector("#btn")

btn.addEventListener("click", handleClick)

const months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

const days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


function handleClick(){
    const month = monthInput.value;

    for (let i = 0; i < months.length; i++) {
        if (month === months[i]) {
            outputMessage.innerText = months[i] + " has " + days[i] + " days."
        }
    }
    
}


