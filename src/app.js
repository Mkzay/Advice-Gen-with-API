const adviceNo = document.querySelector('#Advice-no');
const adviceQuote = document.querySelector('#Advice-quote');
const adviceButton = document.querySelector('#Advice-Button-Generator');

adviceButton.addEventListener('click', () => {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      const advice = data.slip.advice;
      const adviceId = data.slip.id;

      adviceNo.textContent = `${adviceId}`;
      adviceQuote.textContent = `"${advice}"`;
    })
    .catch(error => {
      console.error('Error fetching advice:', error);
    });
});
