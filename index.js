const quoteElement = document.querySelector('.quote');

// Fetch a random quote from an API
fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    const quote = data.content;
    quoteElement.textContent = quote;
  })
  .catch(error => {
    quoteElement.textContent = 'Failed to fetch quote';
    console.log(error);
  });