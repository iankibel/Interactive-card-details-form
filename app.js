/******************************* Dom calling *********************************/
const cardName = document.querySelector("#card-name");
const cardNumber = document.querySelector("#card-number");
const cardMonth = document.querySelector("#card-month");
const cardYear = document.querySelector("#card-year");
const cardCVC = document.querySelector("#card-cvc");

const inputName = document.querySelector("#input-name");
const inputNumber = document.querySelector("#input-number");
const inputMonth = document.querySelector("#input-month");
const inputYear = document.querySelector("#input-year");
const inputCVC = document.querySelector("#input-cvc");

const button = document.querySelector("#btn-confirm");
const buttonContinue = document.querySelector("#continue");

const form = document.querySelector("#form");
const confirmPage = document.querySelector("#thank-you");

/******************************* Change card info *********************************/
inputName.addEventListener("input", () => {
    cardName.innerText = inputName.value

    if (inputName.value.length === 0) {
        cardName.innerText = "Jane Appleseed"
    }
})

/******************************* Library Credit Card *********************************/
var cleave = new Cleave('#input-number', {
    creditCard: true,
});

inputNumber.addEventListener("input", () => {
    cardNumber.innerText = inputNumber.value

    if (inputNumber.value.length === 0) {
        cardNumber.innerText = "0000 0000 0000 0000"
    }
})

inputMonth.addEventListener("input", () => {
    cardMonth.innerText = inputMonth.value

    if (inputMonth.value.length === 0) {
        cardMonth.innerText = "00"
    }
})

inputYear.addEventListener("input", () => {
    cardYear.innerText = inputYear.value

    if (inputYear.value.length === 0) {
        cardYear.innerText = "00"
    }
})

inputCVC.addEventListener("input", () => {
    cardCVC.innerText = inputCVC.value

    if (inputCVC.value.length === 0) {
        cardCVC.innerText = "000"
    }
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.classList.add("disabled");
    confirmPage.classList.remove("disabled")
})

buttonContinue.addEventListener("click", (e) => {
    form.classList.remove("disabled");
    confirmPage.classList.add("disabled");
    form.reset();
    cardName.innerText = "Jane Appleseed"
    cardNumber.innerText = "0000 0000 0000 0000"
    cardMonth.innerText = "00"
    cardYear.innerText = "00"
    cardCVC.innerText = "000"
})