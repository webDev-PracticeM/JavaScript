const newQuoteBtn = document.getElementById('quote-btn');

let apiQuotes = [];

/**Get quotes from API */
async function getQuotes(){
    console.log('fetching for quotes!...');
    const apiUrl = "https://type.fit/api/quotes";

    try {
        const response = await fetch(apiUrl);
        apiQuotes = response.json();
        console.log(apiQuotes);
    } catch (error) {
        console.log("Failed to fetch quote", error);
        //create another page to present user we are working diligently to resolve this issue.
    }
}

//Event listener
newQuoteBtn.addEventListener('click', getQuotes);