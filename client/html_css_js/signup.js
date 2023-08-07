import { createUser } from '../client.js';

const finishButton = document.getElementById("cred-submit");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const user = document.getElementById("email");
const pass = document.getElementById("password");

document.getElementById("HomeButton").addEventListener("click",()=>{
    document.location.href = 'landing.html'
})

//essentially createUser CRUD funct
finishButton.addEventListener("click",signup)

async function signup(){
    console.log(user.value)
    console.log(pass.value)
    const data = {
        "username": user.value,
        "password": pass.value
    }
    await createUser(data)
    document.location.href = 'landing.html'
}