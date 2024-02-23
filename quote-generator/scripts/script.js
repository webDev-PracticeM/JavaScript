const newQuoteBtn = document.getElementById('quote-btn');
const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');

let apiQuotes = [];

/**Get quotes from API */
async function getQuotes(){
    console.log('fetching for quotes!...');
    const apiUrl = "https://type.fit/api/quotes";

    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();

    } catch (error) {
        console.log("Failed to fetch quote", error);
        //create another page to present user we are working diligently to resolve this issue.
    }
}

/**A new quote is selected among fetched quotes from API */
function newQuote(){

    //pick a random quote 
   let index = Math.floor(Math.random() * apiQuotes.length);
   let quote = apiQuotes[index].text;
   let author = apiQuotes[index].author;

   displayQuote(quote);
   displayAuthor(author);
}

/**display quote */
function displayQuote(quote){
    quoteText.textContent = quote;
}

/**display author */
function displayAuthor(author){
    quoteAuthor.textContent = author;
}

//Event listener
newQuoteBtn.addEventListener('click', newQuote);

getQuotes();