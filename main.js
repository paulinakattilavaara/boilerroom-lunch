//lagrar inputfält som variabler.
const form = document.getElementById('lunchForm');
const headline = document.getElementById('headline');
const description = document.getElementById('description');
const price = document.getElementById('price');
// const vegcheck = document.getElementById('veg');

const lunchCard = document.querySelector(".lunch-card");

console.log(headline);

form.addEventListener("submit", function (e) {
    //Förhindra standardbeteendet för att'att sidan laddas om
    e.preventDefault();

    lunchCard.style.visibility = 'visible';

    //hämtar värde från input.
    const headlineInput = headline.value;
    const descriptionInput = description.value;
    const priceInput = price.value;
    // const vegcheckInput = vegcheck.value;


    let cardHeading = document.querySelector(".heading");
    cardHeading.textContent = `Dagens lunch är ${headlineInput}`;


    let cardDescription = document.querySelector(".description");
    cardDescription.textContent = descriptionInput;

    let cardPrice = document.querySelector(".price");
    cardPrice.textContent = `Bara ${priceInput} kr!`;

    // let cardVeg = document.querySelector(".veg");
    // cardVeg.textContent = vegcheckInput;



    //Töm textfältet
    headline.value = '';
    description.value = '';
    price.value = '';





})
