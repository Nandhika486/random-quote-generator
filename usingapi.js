let quoteOnPage = document.querySelector(".js-quote");
let authorOfQuote = document.querySelector(".js-author");

let newQuoteButton = document.querySelector(".js-new-button");
let copyQuoteButton = document.querySelector(".js-copy-button");
let darkModeButton = document.querySelector(".js-dark-button");

async function getRandomQuote() {
  try {
    const response = await fetch("https://dummyjson.com/quotes/random");

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    alert("Failed to fetch Quote");
  }
}

async function loadQuote() {
    const data = await getRandomQuote();

    if (!data) {
        return
    }

    quoteOnPage.textContent = data.quote;
    authorOfQuote.textContent = data.author;
}

loadQuote();

newQuoteButton.addEventListener('click' , ()=>{
  loadQuote();
  
});

copyQuoteButton.addEventListener("click" ,() =>{
  const copyQuote =quoteOnPage.textContent;
  const copyAuthor = authorOfQuote.textContent;
   const textToCopy = `"${copyQuote}"

- ${copyAuthor}`;

  navigator.clipboard.writeText(textToCopy).then(() =>{
    copyQuoteButton.textContent = "Copied!";

    setTimeout(() =>{
      copyQuoteButton.textContent = "Copy Quote";
    },2000);
  })
  .catch(() =>{
    alert("Failed to Copy!!");
  });
});

darkModeButton.addEventListener('click' , () =>{
  document.body.classList.toggle("dark-mode");

  if(document.body.classList.contains("dark-mode")){
    localStorage.setItem("theme", "dark");
    darkModeButton.textContent="Light Mode";
    
  }
  else{
    localStorage.setItem("theme", "light");
    darkModeButton.textContent="DarkMode";
    
  }
});

const savedTheme = localStorage.getItem("theme");
if(savedTheme === 'dark'){
  document.body.classList.toggle("dark-mode");
  darkModeButton.textContent="Light Mode";
}





