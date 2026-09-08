
const arr = [
  {
    quote:"Life is 10 percent what you make it and 90 percent how you take it." ,
    author:"Irving Berlin"
  },
  {
    quote:"The only journey is the journey within."  ,
    author:"Rainer Maria Rilke"
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
    author:"Confucius"
  },
  {
    quote:" The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    author:"Ralph Waldo Emerson"
  },
  {
    quote:"Life is a succession of lessons which must be lived to be understood."  ,
    author:" Helen Keller"
  },
  {
    quote:"Education is the most powerful weapon which you can use to change the world."  ,
    author:"Nelson Mandela"
  },
  {
    quote:"The function of education is to teach one to think intensively and to think critically. Intelligence plus character – that is the goal of true education."  ,
    author:"Martin Luther King Jr."
  },
  {
    quote:"Education is not preparation for life; education is life itself."  ,
    author:"John Dewey"
  },
   {
    quote:"The beautiful thing about learning is that no one can take it away from you."  ,
    author:"B.B.King"
  },
   {
    quote: "The roots of education are bitter, but the fruit is sweet." ,
    author:"Aristotle"
  },
   {
    quote:"There is only one happiness in this life, to love and be loved." ,
    author:"George Sand"
  },
   {
    quote:"The best thing to hold onto in life is each other."  ,
    author:"Audrey Hepburn"
  },
   {
    quote:"Treasure your connections with others—your relationships will shape your happiness more than any achievement."  ,
    author:"Frank Sonnenberg"
  },
   {
    quote:"A real friend is one who walks in when the rest of the world walks out." ,
    author:" Walter Winchell"
  },
   {
    quote:"True love stories never have endings." ,
    author:"Richard Bach"
  },
   {
    quote: "The earth has music for those who listen.",
    author:"William Shakespeare"
  },

]

let quoteOnPage = document.querySelector(".js-quote");
let authorOfQuote = document.querySelector(".js-author");

let newQuoteButton = document.querySelector(".js-new-button");
let copyQuoteButton = document.querySelector(".js-copy-button");
let darkModeButton = document.querySelector(".js-dark-button");


quoteOnPage.innerHTML = "The only place where success comes before work is in the dictionary." ;
authorOfQuote.innerHTML="Vidal Sassoon";

newQuoteButton.addEventListener('click' , ()=>{
  const randomIndex = Math.floor(Math.random()*arr.length);

   quoteOnPage.innerHTML=arr[randomIndex].quote;
   authorOfQuote.innerHTML=arr[randomIndex].author;
});

copyQuoteButton.addEventListener("click", () => {
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

