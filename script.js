const buttons = document.querySelectorAll("button.rating")

let ratingVote;

function buttonText(event) {
    ratingVote = event.currentTarget.innerHTML;
    buttons.forEach(button=>{
        button.classList.remove("selected")
    })
    event.currentTarget.classList.toggle("selected")
    console.log(ratingVote);
}

buttons.forEach(button =>{
   button.addEventListener("click",buttonText)
})


