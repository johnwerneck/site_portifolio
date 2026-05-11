function enviarMsg(){
/*permite ou ou não o envio da mensagem (bloqueando e liberando o botão) 
caso os campos passem por algumas validações
*/
    let nomeForm = document.getElementById("nome").value;
    let emailForm = document.getElementById("email").value;
    let mensagemForm = document.getElementById("mensagem").value;
    let botaoForm = document.getElementById("botaoEnviar");
    /*Permitdo com ao menos 2 digitos*/
    let qtdDigitoNome = nomeForm.length;
    let qtdDigitoMensagem = mensagemForm.length;
    /*Já confere '@' pelo formulário automáticamente, 
    logo, confere se há também um '.'
    Retorna true ou false
    */
    let emailValido = emailForm.includes(".");
    /*Ativa o botão caso as validações acima estejam de acordo*/
    if(qtdDigitoNome >= 2 && emailValido && qtdDigitoMensagem >=2){
        botaoForm.disabled = false;    
    } else {
        botaoForm.disabled = true;
        alert("Necessário campos com ao menos 2 caracteres e o e-mail precisa de um '.'");
        
    }
}

function confirmacaoMsg(){
    alert("Agradecemos a mensagem!")
}