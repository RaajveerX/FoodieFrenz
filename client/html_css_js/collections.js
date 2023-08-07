import {createCollection, deleteCollection, readAllCollections, updateCollection} from '../client.js';

const restNameText = document.getElementById("rest-name-input");
const addButton = document.getElementById("addCollectButton");
const deleteButton = document.getElementById("deleteCollectButton");
const collectDiv = document.getElementById("rests"); 
const homeButton = document.getElementById('HomeButton');

homeButton.addEventListener("click", () => {
  document.location.href = 'landing.html';
});


addButton.addEventListener('click', async(e) => {
  createCollectionJS();

  await populateCollection();
});


deleteButton.addEventListener('click', async(e) => {
  const collections = await readAllCollections('jran');
  console.log("collections");
  console.log(collections);
  let resName = restNameText.value;

  for (const res of collections) {
    if (res.restaurantName === resName) {
      await deleteCollection(res._id);
      console.log(collections);
    }
  }

  await populateCollection();
});


function createCollectionJS(){
  let user = 'jran';
  let resName = restNameText.value;

  let collectObj = {user: user, restaurantName: resName};

  createCollection(collectObj);
}

const populateCollection = async () => {
  const collections = await readAllCollections('jran');
  collectDiv.innerHTML = "";

  if (collections.length > 0) {
    for (const rest of collections) {
      const newRestHTML = `
        <div class="rest" id=${rest._id}>
          <h3>${rest.restaurantName}</h3>
          <button class="edit-button" data-id="${rest._id}">Edit</button>
        </div>
      `;

      //TODO update according to edit button
      collectDiv.innerHTML += newRestHTML;
    }

    const editButtons = document.querySelectorAll(".edit-button");
    editButtons.forEach(button => {
      button.addEventListener('click', () => {
        const restName = restNameText.value;
        const user = 'jran';
        const id = button.dataset.id;
        let updateObj = {user: user, restaurantName: restName};

        updateCollection(id, updateObj);
      });
    })
  }
};

window.addEventListener("load", async (event) => {
  await populateCollection();
});

//TODO Create fake collections and be able to read and update the browser

//TODO create collection, read collection, update collection, delete collection




