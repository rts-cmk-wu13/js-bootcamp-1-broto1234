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

let quoteRandom = Math.floor(Math.random() * quotesList.length);

function showQuote() {
    quote.textContent = quotesList[quoteRandom];
}

showQuote();


// The Math.random() static method returns a floating-point that's greater than or equal to 0 and less than 1

// The Math.floor() method rounds a number DOWN to the nearest integer. The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
//Math.floor(5.95) # 5;  Math.floor(5.05)  # 5;  Math.floor(5)   #5; Math.floor(-5.05)  # -6


// Example:
//  quotesList.length = 2
// Math.random() * quotesList.length = Math.random() * 2 = 0.4 * 2 = 0.8
// Math.floor(Math.random() * quotesList.length) = Math.floor(0.8) = 0

//  quotesList.length = 4
// Math.random() * quotesList.length = Math.random() * 4 = 0.6 * 4 = 2.4
// Math.floor(Math.random() * quotesList.length) = Math.floor(2.4) = 2
