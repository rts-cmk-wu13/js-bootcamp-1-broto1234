let quote = document.querySelector(".quote");

let quotesList = [
  "A rose by any other name would smell as sweet. - William Shakespeare",
  "All that glitters is not gold. - William Shakespeare",
  "All the world’s a stage, and all the men and women merely players. - William Shakespeare",
  "Ask not what your country can do for you; ask what you can do for your country. - John Kennedy",
  "Ask, and it shall be given you; seek, and you shall find. - the Bible",
  "Eighty percent of success is showing up.	",
  "Elementary, my dear Watson. - Sherlock Holmes",
  "For those to whom much is given, much is required. -the Bible",
  "Genius is one percent inspiration and ninety-nine percent perspiration. -Thomas Edison",
  "I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character. - Martin Luther King"
]


function showQuote() {

  let quoteRandom = Math.floor(Math.random() * quotesList.length);
    quote.textContent = quotesList[quoteRandom];
}
showQuote();

