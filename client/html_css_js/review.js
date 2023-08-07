
import { createReview } from '../client.js';

const star1 = document.getElementById('star1');
const star2 = document.getElementById('star2');
const star3 = document.getElementById('star3');
const star4 = document.getElementById('star4');
const star5 = document.getElementById('star5');

const dollar1 = document.getElementById('dollar1');
const dollar2 = document.getElementById('dollar2');
const dollar3 = document.getElementById('dollar3');
const dollar4 = document.getElementById('dollar4');
const dollar5 = document.getElementById('dollar5');

const descriptionText = document.getElementById('descriptionText');
const name = document.getElementById('restaurantName');
const pic = document.getElementById('restaurantPic');
const logo = document.getElementById('restaurantLogo');

const params = new URLSearchParams(window.location.search);
const url = new URL(window.location.href);
const urlString = url.href.replace("review", "restaurant");

name.innerHTML = params.get('resname');

const photo = document.createElement("img");
photo.setAttribute('src', params.get('image'));
pic.appendChild(photo);

photo.style.width = "100%";
photo.style.height = "100%";
photo.style.borderRadius = "25px";
photo.style.objectFit = "cover";

const logo_img = document.createElement("img");
logo_img.setAttribute('src', params.get('image'));
logo.appendChild(logo_img);

logo_img.style.width = "100%";
logo_img.style.height = "100%";
logo_img.style.borderRadius = "50%";
logo_img.style.objectFit = "cover";
const homeButton = document.getElementById('HomeButton');

homeButton.addEventListener("click", () => {
  document.location.href = 'landing.html';
});

reviewButton.addEventListener("click", async(e) =>{
    createReviewJS();
    // document.location.href = "restauran.html";
    document.location.href = urlString;
});

async function createReviewJS(){
    //TODO place holder
    let user = 'jran';
    let resNam = name.innerHTML;
    let rating = 0;
    let cost = 0;
    let description = descriptionText.value;

    //star rating
    if(star5.classList.contains("selected")){
        rating = 5;
    }
    else if(star4.classList.contains("selected")){
        rating = 4;
    }
    else if(star3.classList.contains("selected")){
        rating = 3;
    }
    else if(star2.classList.contains("selected")){
        rating = 2;
    }
    else if(star1.classList.contains("selected")){
        rating = 1;
    }
    
    //dollar rating
    if(dollar5.classList.contains("selected")){
        cost = 5;
    }
    else if(dollar4.classList.contains("selected")){
        cost = 4;
    }
    else if(dollar3.classList.contains("selected")){
        cost = 3;
    }
    else if(dollar2.classList.contains("selected")){
        cost = 2;
    }
    else if(dollar1.classList.contains("selected")){
        cost = 1;
    }

    let reviewObj = {user: user, restaurantName: resNam, rating: rating, 
                    cost: cost, description: description};

    // console.log(reviewObj);
    await createReview(reviewObj);
}

//star and dollar color event listeners
star1.addEventListener("click", function(){
    star1.classList.add("selected");
    star2.classList.remove("selected");
    star3.classList.remove("selected");
    star4.classList.remove("selected");
    star5.classList.remove("selected");
});

star2.addEventListener("click", function(){
    star1.classList.add("selected");
    star2.classList.add("selected");   
    star3.classList.remove("selected");
    star4.classList.remove("selected");
    star5.classList.remove("selected");
});

star3.addEventListener("click", function(){
    star1.classList.add("selected");
    star2.classList.add("selected");
    star3.classList.add("selected");
    star4.classList.remove("selected");
    star5.classList.remove("selected");
});

star4.addEventListener("click", function(){
    star1.classList.add("selected");
    star2.classList.add("selected");
    star3.classList.add("selected");
    star4.classList.add("selected");
    star5.classList.remove("selected");
});

star5.addEventListener("click", function(){
    star1.classList.add("selected");
    star2.classList.add("selected");
    star3.classList.add("selected");
    star4.classList.add("selected");
    star5.classList.add("selected");
});

dollar1.addEventListener("click", function(){
    dollar1.classList.add("selected");
    dollar2.classList.remove("selected");
    dollar3.classList.remove("selected");
    dollar4.classList.remove("selected");
    dollar5.classList.remove("selected");
});

dollar2.addEventListener("click", function(){
    dollar1.classList.add("selected");
    dollar2.classList.add("selected");   
    dollar3.classList.remove("selected");
    dollar4.classList.remove("selected");
    dollar5.classList.remove("selected");
});

dollar3.addEventListener("click", function(){
    dollar1.classList.add("selected");
    dollar2.classList.add("selected");
    dollar3.classList.add("selected");
    dollar4.classList.remove("selected");
    dollar5.classList.remove("selected");
});

dollar4.addEventListener("click", function(){
    dollar1.classList.add("selected");
    dollar2.classList.add("selected");
    dollar3.classList.add("selected");
    dollar4.classList.add("selected");
    dollar5.classList.remove("selected");
});

dollar5.addEventListener("click", function(){
    dollar1.classList.add("selected");
    dollar2.classList.add("selected");
    dollar3.classList.add("selected");
    dollar4.classList.add("selected");
    dollar5.classList.add("selected");
});