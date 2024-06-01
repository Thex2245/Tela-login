const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");
const form = document.querySelector("#fomulario");
const divEmail = document.querySelector(".e-mail");
const divPassword = document.querySelector(".senha");

const errorEmail = document.querySelector("#error-email")
const errorSenha = document.querySelector("#error-senha")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    
    // Verificação do input e-mail
    if (inputEmail.value === '') {
        divEmail.classList.add("erro")
        console.log('Por favor, preencha com o seu e-mail.');
        errorEmail.style.display = "initial"
    }

    inputEmail.addEventListener('focus', function() {
        divEmail.classList.remove("erro");
        errorEmail.style.display = "none"
    });

    // Verificação do input senha
    if (inputPassword.value === '') {
        divPassword.classList.add("erro")
        console.log('Por favor, preencha com a sua senha.');
        errorSenha.style.display = "initial"
    }

    inputPassword.addEventListener('focus', function(){
        divPassword.classList.remove("erro");
        errorSenha.style.display = "none"
    });
});
