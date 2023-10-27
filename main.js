//lagrar inputfält som variabler.
const form = document.getElementById('lunchForm');
const headline = document.getElementById('headline');
const description = document.getElementById('description');
const price = document.getElementById('price');
const vegcheck = document.getElementById('veg');


console.log(headline);

form.addEventListener("submit", function (e) {
    //Förhindra standardbeteendet för att'att sidan laddas om
    e.preventDefault();

    //hämtar värde från input.
    const headlineInput = headline.value;
    const descriptionInput = description.value;
    const priceInput = price.value;
    const vegcheckInput = vegcheck.value;













    console.log(headlineInput);
    console.log(descriptionInput);
    console.log(priceInput);
    console.log(vegcheckInput);

})
