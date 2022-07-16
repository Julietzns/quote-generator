// Tableau de citations personnelles
let quoteList = [
    ["La vie est simple, mais on la complique de ouf 😶‍🌫️", "Julie TZNS Lananas"],
    ["Si il-elle ne croit pas en toi, c'est pas la peine de forcer 👣", "Julie TZNS Lananas"],
    ["N'oublies jamais ton noyau dure 🪖", "Julie TZNS Lananas"],
    ["Si t'es du-per, reviens vers tes racines, tu auras plus de recule pour voir plus loin 🌳", "Julie TZNS Lananas"],
    ["Une prise de décision liée à la peur ne mènera pas à quelque chose de bon pour toi t'sais 🌀 ?", "Julie TZNS Lananas"],
    ["Celles et ceux qui t'aiment te soutiendront et te conseilleront, même si c'est dure à attendre 🔔", "Julie TZNS Lananas"],
    ["Ce qui est le plus précieux à tes yeux est ton moteur : bats-toi pour ça 🥊", "Julie TZNS Lananas"],
    ["Tu es légitime comme n'importe qui, d'avoir une vie meilleure 🎱", "Julie TZNS Lananas"],
    ["Ne doute pas de toi et de te force. Parfois cette force est juste cachée t'sais 🏆 ?", "Julie TZNS Lananas"],
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
    //si randomQuote == 0 ?
    //on veut que la fonction nous retourne tous les éléments de notre tableau
    randomQuote = numberGenerator(quoteList.length);
} while (randomQuote == lastQuote)

quote.textContent = quoteList[randomQuote][0];
author.textContent = quoteList[randomQuote][1];
lastQuote = randomQuote;
});
