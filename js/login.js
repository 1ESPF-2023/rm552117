"use strict";

let lista_de_usuarios=[
    {
    nomeCompleto : "José",
    nomeUsuario : "José",
    senhaUsuario : "123456",
    },
    {
    nomeCompleto : "Dane",
    nomeUsuario : "Dane",
    senhaUsuario : "123456",
    },
    {
    nomeCompleto : "Amem",
    nomeUsuario : "Amem",
    senhaUsuario : "123456",
    },
]

let usuarioValidado

const botaoSubmit = document.querySelector("#btnSubmit");
const msgStatus = document.querySelector("#msg");

botaoSubmit.addEventListener("click",()=>{
    
    const inputUser = document.querySelector("input[name='nmUser']");
    const inputPass = document.querySelector("input[name='pass']");
    const labelUser = document.querySelector("label[for='idUser']");
    const labelPass = document.querySelector("label[for='idPass']");
    
    
    const usuarioLogado ={
        nomeUsuarioLogado:inputUser.value,
        senhaUsuarioLogado:inputPass.value
    }

    
    if(inputUser.value.length > 3 && inputPass.value.length > 3){
        inputUser.setAttribute("style", "outline-color:#00ff00;")
        inputPass.setAttribute("style", "outline-color:#00ff00;")
        labelUser.setAttribute("style","color:#00ff00;");
        labelPass.setAttribute("style","color:#00ff00;");
        if(usuarioLogado.nomeUsuarioLogado == "tutu" && usuarioLogado.senhaUsuarioLogado == "123456"){
            msgStatus.setAttribute("style","color:#00ff00;");
            msgStatus.innerHTML = "<span><strong>Login efetuado com sucesso</strong></span>"
            alert("Válido")
        }
        else{
            alert("Não válido")
            msgStatus.setAttribute("style","color:#ff0000;");
            msgStatus.innerHTML = "<span><strong>Login falho</strong></span>"
        }
    }
    else{
        inputUser.setAttribute("style", "outline-color:#ff0000;")
        inputPass.setAttribute("style", "outline-color:#ff0000;")
        labelUser.setAttribute("style","color:#ff0000;");
        labelPass.setAttribute("style","color:#ff0000;");
    }

    addEventListener("click", (evt)=>{
        evt.target.id=botaoSubmit(
            console.log("Achei o botão")
        )
    })

});
