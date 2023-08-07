const homeButton = document.getElementById('HomeButton');

homeButton.addEventListener("click", () => {
  document.location.href = 'landing.html';
});

const signinButton = document.getElementById('sign-in');

signinButton.addEventListener("click", () => {
  document.location.href = 'dialog.html';
});

const signupButton = document.getElementById('sign-up');

signupButton.addEventListener("click", () => {
  document.location.href = 'signup.html';
});

const collectionsButton = document.getElementById('collections');

collectionsButton.addEventListener('click', () => {
  document.location.href = 'collections.html';
})

const userInput = document.getElementById('search-bar');
let formatted_input = userInput;

/* Runs when submit button is clicked, carries over user input */
function submit() { 
  formatted_string = userInput.value;
  formatted_string = formatted_string.toLowerCase().replace(/[^\s\w]/g, "")
  .replace(/ /g, "+");
  document.location.href = 'rank-res.html?filtered=' + formatted_string;
}