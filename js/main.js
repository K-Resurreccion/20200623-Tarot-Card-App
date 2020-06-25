console.log(document.getElementById('card').innerHTML);
const source = document.getElementById('card').innerHTML;
const template = Handlebars.compile(source);

const tarotCards = {
  cards: [
    {name: 'The Fool',
      img: './images/cards/major (0).jpg'},
    {name: 'card two',
      color: 'red'}]
}

const compiledHtml = template(tarotCards);
const fill = document.getElementById('cardBox');
console.log(fill);
fill.innerHTML = compiledHtml;
console.log(fill.innerHTML)
