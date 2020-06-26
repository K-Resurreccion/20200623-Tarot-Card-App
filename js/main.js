import { allCards } from './deckOfCards.js';
console.log(document.getElementById('card').innerHTML);
const source = document.getElementById('card').innerHTML;
const template = Handlebars.compile(source);

const tarotCards = allCards;

const compiledHtml = template(tarotCards);
const fill = document.getElementById('cardBox');
console.log(fill);
fill.innerHTML = compiledHtml;
console.log(fill.innerHTML)
