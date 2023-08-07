//Contains the filter html element generator


let filters = ["VEGAN", "VEGETARIAN","MEXICAN","THAI","FRIES","BURGERS","KOSHER","VIETNAMESE"]
let filterdiv = document.getElementById("filter-parent")

//Sign in dialog
let signinbutton = document.getElementById("sign-in")
signinbutton.addEventListener("click",render_signIn)

let containerf = document.createElement("div")
containerf.classList.add("container-fluid")
filterdiv.appendChild(containerf)

function render_filters(){
    filters.forEach(f => {
        let newF = document.createElement("button")
        newF.textContent = f
        newF.classList.add("filter-button")
        containerf.appendChild(newF)
    });
}

//renders the signIn dialog on screen
function render_signIn(){

}



render_filters()