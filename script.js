const buttons = document.querySelectorAll("button.rating");
const sub = document.querySelector("#sub");
const enterjs = document.querySelector(".enterjs");
const thankscard = document.querySelector("#thankscard")
const principalcard = document.querySelector("#principalcard")

let ratingVote;

function buttonText(event) {
    ratingVote = event.currentTarget.innerHTML;
    buttons.forEach(button => {
        button.classList.remove("selected")
    })
    event.currentTarget.classList.toggle("selected")
    console.log(ratingVote);
}

buttons.forEach(button => {
    button.addEventListener("click", buttonText)
})

function Send(sent) {
    enterjs.innerHTML = `You selected ${sent} out of 5`;
    principalcard.innerHTML = thankscard.innerHTML;
}
sub.addEventListener("click", () => {
    Send(ratingVote)
})


