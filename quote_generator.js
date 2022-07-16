// Tableau de citations personnelles
let quoteList = [
    ["La vie est simple, mais on la complique de ouf 😶‍🌫️", "Julie TZNS Lananas"],
    ["Si il-elle ne croit pas en toi, pas la peine de forcer 👣", "Julie TZNS Lananas"],
    ["N'oublies jamais ton noyau dure 🪖", "Julie TZNS Lananas"],
    ["T'es du-per ? Reviens vers tes racines pour voir plus loin 🌳", "Julie TZNS Lananas"],
    ["Une prise de décision liée à la peur mènera nul part t'sais 🌀 ?", "Julie TZNS Lananas"],
    ["Celles et ceux qui t'aiment te soutiendront même si c'est dure 🔔", "Julie TZNS Lananas"],
    ["Le + précieux à tes yeux est ton moteur : bats-toi pour ça 🥊", "Julie TZNS Lananas"],
    ["Tu es légitime comme n'importe qui d'avoir une vie meilleure 🎱", "Julie TZNS Lananas"],
    ["Ne doute pas de ta force, elle est juste cachée t'sais 🏆 ?", "Julie TZNS Lananas"],
    ["Je, elle, nous, vous, toi, sommes BADASS 💪🏾", "Julie TZNS Lananas"],
];

let quote = document.querySelector("#a-quote");
let author = document.querySelector("#author");
let buttonQuote = document.querySelector("#button-quote");

let lastQuote = 0;
let randomQuote = 0;

function numberGenerator(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

buttonQuote.addEventListener("click", () => {
do {
    randomQuote = numberGenerator(quoteList.length);
} while (randomQuote == lastQuote)

quote.textContent = quoteList[randomQuote][0];
author.textContent = quoteList[randomQuote][1];
lastQuote = randomQuote;
});
