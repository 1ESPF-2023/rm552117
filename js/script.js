//Recuperando o botão com o "get element by id"
const botao = document.getElementById("btn 1")

//recuperar um item específico com a função query selector
// const seletor = document.querySelector("li")
// console.log(seletor.textContent)

//Recuperar uma lista de elementos com ma função com querry selector on

const seletores = document.querySelectorAll("li");

seletores.forEach((item)=>{
    console.log('Items selecionados : $'(item.textContent))
})

//setTimePut
//setInterval
//Random
//Math.Cell
//Math.Random
//math.floon