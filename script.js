const main = document.querySelector("main");
const submitBtn = document.querySelector(".submit");
const ratingBtn = document.querySelectorAll(".rating");

ratingBtn.forEach(rate => {
  rate.addEventListener("click", event => {
    ratingBtn.forEach(rating => {
      if (rating !== rate) {
        rating.classList.remove("active");
      }
    });
    rate.classList.toggle("active");
  });
});

// SUBMIT BUTTON
submitBtn.addEventListener('click', event => {
  ratingBtn.forEach(select => {
    const selected = select.classList.contains("active");
    if (selected) {
        const value = select.value;
        // CREATE NEW DIV AND REPLACE CARD CONTENT
        main.innerHTML = '';
        const newCard = document.createElement('div');
        newCard.className = "card";
        newCard.innerHTML = `<div class="icon | mb-3">
                              <img src="images/illustration-thank-you.svg" alt="Thank you icon">
                            </div>
                            <div class="selected-rating | rounded mb-3">You selected ${value} out of 5</div>
                            <h1 class="header | text-center mb-1">Thank you!</h1>
                            <p class="description | text-center mb-2">We appreciate you taking the time to give a rating. If you ever need more support, 
                              don’t hesitate to get in touch!</p>`;
        main.appendChild(newCard);
        // RELOAD PAGE TO RATE AGAIN
        setTimeout(function() {
            window.location.reload();
        }, 3000); // CHANGE THE VALUE BASED ON THE DESIRED TIMING FOR PAGE RELOAD.
    }
  })
});