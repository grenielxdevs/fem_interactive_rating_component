"use strict";

const cardLink = document.querySelector('.card-submit');
const ratings = document.querySelectorAll('input[type="radio"]');
const score = document.querySelector('.score');
const cardRate = document.querySelector('.card-rate');
const cardResult = document.querySelector('.card-result');

let result = 0;
for(let rating of ratings) {
    rating.addEventListener('click', function(e) {
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

cardLink.addEventListener('click', function(e) {
    e.preventDefault();

    if(result) {

        score.textContent = str(result);
    }
});