var pedido = 3;

function selecionarPrato() {
    let prato = document.querySelectorAll(".refeicao.prato");
    prato[0].classList.add("selecionada");
    pedido++;
}

function selecionarBebida() {
    let bebida = document.querySelectorAll(".refeicao.bebida");
    bebida[0].classList.add("selecionada")
    pedido++;
}
function selecionarSobremesa() {
    let sobremesa = document.querySelectorAll(".refeicao.sobremesa");
    sobremesa[0].classList.add("selecionada")
    pedido++;
}

function botaoConfirmado () {
    let divBotao = document.querySelector(".fechar-pedido");
    let botao = document.querySelector(".fechar-pedido button p");
    if (pedido === 3) {
        divBotao.classList.add("botao-confirmado"); 
        botao.textContent = "Fechar o pedido";
    }
}

