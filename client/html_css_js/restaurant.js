import { readAllReviews } from '../client.js';
const homeButton = document.getElementById('HomeButton');
const favButton = document.getElementById('FavoritesButton');

homeButton.addEventListener("click", () => {
  document.location.href = 'landing.html';
});

const parts = new URLSearchParams(window.location.search);

const reviewButton = document.getElementById("ReviewButton");
let name_param = parts.get('resname');
let rate_param = parts.get('foodrating');
let cost_param = parts.get('cost');
let loc_param = parts.get('location');
let contact_param = parts.get('contact');
let img_param = parts.get('image');

reviewButton.addEventListener("click", () => {
    document.location.href = "review.html?resname=" + name_param + "&foodrating=" + rate_param + "&cost=" + cost_param
    + "&location=" + loc_param + "&contact=" + contact_param + "&image=" + img_param;
});

const restaurant_icon = document.getElementById("res-icon");
const restaurant_photo = document.getElementById("res-photo");
const restaurant_name = document.getElementById("res-name");
const food_rate = document.getElementById("food-rating");
const cost_rate = document.getElementById("cost-rating");
const locate = document.getElementById("LocationBox");
const contact = document.getElementById("ContactBox");
const reviews = document.getElementById("ReviewBox"); 

restaurant_name.innerHTML = name_param;
food_rate.innerHTML = rate_param;
cost_rate.innerHTML = cost_param.length;
locate.innerHTML = loc_param;
contact.innerHTML = contact_param

// Setting photo
const photo = document.createElement("img");
photo.setAttribute('src', img_param);
restaurant_photo.appendChild(photo);

photo.style.width = "100%";
photo.style.height = "100%";
photo.style.borderRadius = "25px";
photo.style.objectFit = "cover";

// Setting icon
const icon = document.createElement("img");
icon.setAttribute('src', img_param);
restaurant_icon.appendChild(icon);

icon.style.width = "100%";
icon.style.height = "100%";
icon.style.borderRadius = "50%";
photo.style.objectFit = "cover";

favButton.addEventListener('click', () => {
  document.location.href = 'collections.html';
});

async function renderReviews(resName){
    //uses a crud call to database to retrieve all reviews from a specfic restaurant
    //returns and array of reviews from specified restaurant
    let resReviews = await readAllReviews(resName);
    if(resReviews.length > 0){
      reviews.innerHTML= "";
      //will embed a random review into the page everytime it is refreshed or called rendered
      let revDisplay = resReviews[Math.floor(Math.random()*resReviews.length)];

      const user = document.createElement("div");
    
      user.classList.add("reviewContent")
      user.innerHTML = `author: ${revDisplay.user}`;
      const rating = document.createElement("div");
      rating.innerHTML = `rating: ${revDisplay.rating}`;
      rating.classList.add("reviewContent")
      const cost = document.createElement("div");
      cost.innerHTML = `cost: ${revDisplay.cost}`;
      cost.classList.add("reviewContent")
      const description = document.createElement("div");
      description.innerHTML = `"${revDisplay.description}"`;
      description.classList.add("reviewContent")
      const ratings = document.createElement("div");
      ratings.appendChild(rating);
      ratings.appendChild(cost);
      reviews.appendChild(user);
      reviews.appendChild(description);
      reviews.appendChild(ratings);
    }
}

renderReviews(restaurant_name.innerHTML);
