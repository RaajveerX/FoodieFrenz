import {readUser} from '../client.js'

const email = document.getElementById("email");
const password = document.getElementById("password");
const submitButton = document.getElementById("cred-submit");
const homeButton = document.getElementById('HomeButton');

homeButton.addEventListener("click", () => {
  document.location.href = 'landing.html';
});

submitButton.addEventListener("click", signIn);

async function signIn(){
    try {
        const res = await readUser(email.value);
        if (res !== null){
            if (res.password == password.value){
                document.location.href = 'landing.html';
            }else{
                alert("Incorrect Password");
            }
        }else{
            alert("User Doesn't Exist");
        }
    } catch (error) {
        console.log({message:error.message});  
    }
}
