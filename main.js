const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const form = document.querySelector("#fomulario");
const divEmail = document.querySelector(".e-mail");
const divPassword = document.querySelector(".senha");

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    if(inputEmail.value === ""){
        divEmail.classList.add("erro")
        alert("Erro.")
    } else {
        divEmail.classList.remove("erro");
        form.submit();
    }

    if (inputPassword.value === "") {
        divPassword.classList.add("erro");
        alert("Erro. O campo de senha está vazio.");
        isValid = false;
    } else {
        divPassword.classList.remove("erro");
    } 
});

const btn = document.querySelector(".entrar")
form.addEventListener("submit", (event) => {
    event.preventDefault();
    divEmail.classList.add("erro");
    alert("Erro.");
});