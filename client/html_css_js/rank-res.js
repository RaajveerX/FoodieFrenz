const homeButton = document.getElementById('HomeButton');

homeButton.addEventListener("click", () => {
  document.location.href = 'landing.html';
});

const restaurant1 = document.getElementById("ResButton1");
const info_1 = document.getElementById("border1");

const restaurant2 = document.getElementById("ResButton2");
const info_2 = document.getElementById("border2");

const restaurant3 = document.getElementById("ResButton3");
const info_3 = document.getElementById("border3");

const parts = new URLSearchParams(window.location.search);
const res_name = parts.get('filtered');
console.log("this is res_name: " + res_name);
let filter_arr = res_name.split(" ");
console.log(filter_arr);

let request = { // Wil be received by user, filters will be included in request
    location: 'Amherst',
    term: 'fast food',
    categories: filter_arr
};

// Fetching results from Yelp API based on requested categories
let results = [];
async function getRes() {
  try {
    const response = await fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?' + new URLSearchParams(request), {
        headers: {
            Authorization: 'Bearer _Usr6Buro10xqgVqCKUIDG-6hd1_DZNViLcWGGNWtg0p07w_ZvjSChpfM-btbrleALOkWRaqQDjWf3XShd41cdjKIeubdj2tme3cFrq9I1f626cFkayBZMGySyZdZHYx'
        }
    });
    results = await response.json();
    results = results.businesses;
  } catch (error) {
    console.log('Error: ' + error);
  }
}
await getRes();

let res_data = [];
function addRes(n) { 
  let copy = [...results];
  for (let i = 0; i < n; i++) {
    let randomIdx = Math.floor(copy.length * Math.random())
    let res = copy.splice(randomIdx, 1)[0];
    let parsed_restaurant = {resname: res.name, foodrating: res.rating, cost: res.price, location: res.location.address1, contact: res.display_phone, image: res.image_url};
    res_data.push(parsed_restaurant);
  }
}

switch (results.length) { 
  case 0: 
    info_1.innerHTML = "No restaurants found! Try another query.";
    restaurant1.style.visibility = 'hidden';
    restaurant2.style.visibility = 'hidden';
    info_2.style.visibility = 'hidden';
    restaurant3.style.visibility = 'hidden';
    info_3.style.visibility = 'hidden';
    break;
  case 1: 
    addRes(1);
    restaurant1.innerHTML = res_data[0].resname;
    info_1.innerHTML = "Location: " + res_data[0].location + " | Rating: " + res_data[0].foodrating;
    restaurant2.style.visibility = 'hidden';
    info_2.style.visibility = 'hidden';
    restaurant3.style.visibility = 'hidden';
    info_3.style.visibility = 'hidden';
    break;
  case 2: 
    addRes(2);
    restaurant1.innerHTML = res_data[0].resname;
    info_1.innerHTML = "Location: " + res_data[0].location + " | Rating: " + res_data[0].foodrating;
    restaurant2.innerHTML = res_data[1].resname;
    info_2.innerHTML = "Location: " + res_data[1].location + " | Rating: " + res_data[1].foodrating;
    restaurant3.style.visibility = 'hidden';
    info_3.style.visibility = 'hidden';
    break;
  default: 
    addRes(3);
    restaurant1.innerHTML = res_data[0].resname;
    info_1.innerHTML = "Location: " + res_data[0].location + " | Rating: " + res_data[0].foodrating;
    restaurant2.innerHTML = res_data[1].resname;
    info_2.innerHTML = "Location: " + res_data[1].location + " | Rating: " + res_data[1].foodrating;
    restaurant3.innerHTML = res_data[2].resname;
    info_3.innerHTML = "Location: " + res_data[2].location + " | Rating: " + res_data[2].foodrating;
}

restaurant1.addEventListener("click", () => {
  document.location.href = "restaurant.html?resname=" + res_data[0].resname + "&foodrating=" + res_data[0].foodrating + "&cost=" + res_data[0].cost
  + "&location=" + res_data[0].location + "&contact=" + res_data[0].contact + "&image=" + res_data[0].image;
});

restaurant2.addEventListener("click", () => {
  document.location.href = "restaurant.html?resname=" + res_data[1].resname + "&foodrating=" + res_data[1].foodrating + "&cost=" + res_data[1].cost
  + "&location=" + res_data[1].location + "&contact=" + res_data[1].contact + "&image=" + res_data[1].image;
});

restaurant3.addEventListener("click", () => {
  document.location.href = "restaurant.html?resname=" + res_data[2].resname + "&foodrating=" + res_data[2].foodrating + "&cost=" + res_data[2].cost
  + "&location=" + res_data[2].location + "&contact=" + res_data[2].contact + "&image=" + res_data[2].image;
});