const form = document.getElementById("formulario");
const nomeFormulario = document.getElementById("nome");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const campoA = document.getElementById("campo-a");
    const campoB = document.getElementById("campo-b");
    const mensagemSucesso = `<B>${campoB.value}</b> é maior que <b>${campoA.value}</b>!`;
    console.log(campoA.value);
    console.log(campoB.value);

    if (parseFloat(campoB.value) > parseFloat(campoA.value)) {
        const containerMensagemSucesso = document.querySelector(".success-message");
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = "block";

        campoA.value = "";
        campoB.value = "";
        nomeFormulario.value = "";
    }

    else {

        campoA.style.border = "1px solid red";
        campoB.style.border = "1px solid red";
        document.querySelector(".error-message").style.display = "block";

        nomeBeneficiario.value = "";
        numeroContaBeneficiario.value = "";
        valorDeposito.value = "";
    }

});