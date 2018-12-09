function funcEmail(){
elemento = document.getElementById("label-email");

elemento.classList.add("label-form-show");
elemento.innerHTML = "Email";

}

function sumir(){

    elemento = document.getElementById("label-email");

    elemento.classList.remove("label-form-show");
    elemento.innerHTML = "";
}