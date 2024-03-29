"use strict";

function cardRating() {
    // Card Variables
    const cardSubmit = document.querySelector('.card-submit');
    const ratings = document.querySelectorAll('input[type="radio"]');
    const score = document.querySelector('.score');
    const cardRate = document.querySelector('.card-rate');
    const cardResult = document.querySelector('.card-result');
    const cardError = document.querySelector('.card-error');

    // Setting Up Initial Result
    let result = 0;

    // Loop Ratings Array then assign result if clicked
    for(let rating of ratings) {
        rating.addEventListener('click', function(e) {
            cardError.classList.remove('show');
            cardError.classList.add('hide');

            switch(e.target.id) {
                case "rating-1":
                    result = 1;
                    break;
                case "rating-2":
                    result = 2;
                    break
                case "rating-3":
                    result = 3;
                    break
                case "rating-4":
                    result = 4;
                    break;
                case "rating-5":
                    result = 5;
                    break;
            }
        });
    }

    // Card submits if any selected ratings
    cardSubmit.addEventListener('click', function(e) {
        e.preventDefault();

        if(result) {
            score.textContent = `${String(result)}`;
            cardRate.classList.add('hide');
            cardResult.classList.remove('hide');
        } else {
            cardError.classList.remove('hide');
            cardError.classList.add('show');
        }
    });
}

cardRating();