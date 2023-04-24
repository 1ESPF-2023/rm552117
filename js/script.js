//Recuperando o botão com o "get element by id"
//const botao = document.getElementById("btn 1")

//recuperar um item específico com a função query selector
// const seletor = document.querySelector("li")
// console.log(seletor.textContent)

//Recuperar uma lista de elementos com ma função com querry selector on

//const seletores = document.querySelectorAll("li");

//seletores.forEach((item)=>{
//    console.log('Items selecionados : $'(item.textContent))
//})

//setTimePut
//setInterval
//Random
//Math.Cell
//Math.Random
//math.floon

function mudacor(){
    let r=0;
    let g=0;
    let b=0;

    r= Math.ceil(Math.random() *255);
    g= Math.ceil(Math.random() *255);
    b= Math.ceil(Math.random() *255);
    
    const cabecalho = document.querySelector('.cabecalho');
    cabecalho.style = `../img/banner-1440x300-1.jpg`
    const banner1 = document.querySelector('.banner1');
    banner1.style = `(./img/banner-lateral-1.png)`;
    const banner2 = document.querySelector('.banner2');
    banner2.style.backgroundColor = `rgb(${r},${g},${b})`;
    const rodape = document.querySelector('.rodape');
    rodape.style.backgroundColor = `rgb(${r},${g},${b})`;
    const conteudo = document.querySelector('.conteudo');
    conteudo.style.backgroundColor = `rgb(${r},${g},${b})`;
    
    tmp = setTimeout(mudacor, 1000, )


}
mudacor();
