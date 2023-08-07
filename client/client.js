export async function createReview(review){
    const response = await fetch ('createReview',{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(review)
    });
    const obj = await response.json()
    console.log(obj);
}

export async function readReview(restaurantName){
    const response = await fetch(`/readReview/${restaurantName}`)
    const data = await response.json();
    return data;
}

export async function readAllReviews(restaurantName){
    const response = await fetch(`/readAllReviews/${restaurantName}`)
    const data = await response.json();
    return data;
}



export async function updateReview(id,review){
    //request object basically
    const options = {
        method: 'PUT',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(review)
    }
    const response = await fetch(`updateReview/${id}`,options)
    const data = await response.json()
    console.log(data)

}

export async function deleteReview(id){
    const response = await fetch(`/deleteReview/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      console.log(data)
}

// maybe add in readAllSpecificReviews ? ref. ex14

//COLLECTIONS

export async function createCollection(data) {
    const response = await fetch ('createCollection', {
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data)
      });
      const obj = await response.json();
}

export async function readCollection(user){
    const response = await fetch(`/readCollection/${user}`)
    const data = await response.json();
    return data;
}

export async function readAllCollections(user){
    const response = await fetch(`/readAllCollections/${user}`)
    const data = await response.json();
    return data;
}

export async function updateCollection(id,data){
    const options = {
        method: 'PUT',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data)
      };
      const response = await fetch(`/updateCollection/${id}`, options);
      const obj = await response.json();
      console.log(obj);
}

export async function deleteCollection(id){
    const response = await fetch(`/deleteCollection/${id}`, {
        method: 'DELETE'
      });
      const data = await response.json();
      console.log(data);
      return data;
}


//USER

export async function createUser(data){
    const response = await fetch(`createUser`,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data)
    });
    const obj = await response.json()
    console.log(obj)
}

export async function readUser(username){
    const response = await fetch(`readUser/${username}`)
    const data = response.json()
    return data

}

export async function updateUser(id,data){
    const response = await fetch(`updateUser/${id}`,{
        method: 'PUT',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify(data)
    });
    const obj = await response.json()
    console.log(obj)
}
