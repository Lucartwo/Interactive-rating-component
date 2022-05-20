const buttons = document.querySelectorAll("button.rating")

let ratingVote;

function buttonText(event) {
    ratingVote = event.currentTarget.innerHTML;
    console.log(ratingVote);
}

buttons.forEach(button =>{
   button.addEventListener("click",buttonText)
})


