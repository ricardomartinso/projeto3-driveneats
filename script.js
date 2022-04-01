var pedidos = [];

function selecionarPrato(prato) {
    let botaoSelecionado = document.querySelector(".refeicao.prato.selecionada");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("selecionada");
    }
    prato.classList.add("selecionada")
    pedidos[0] = prato;
    trocarCorBotao();
}

function selecionarBebida(bebida) {
    let botaoSelecionado = document.querySelector(".refeicao.bebida.selecionada");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("selecionada");
    }
    bebida.classList.add("selecionada")
    pedidos[1] = bebida;
    trocarCorBotao();
}

function selecionarSobremesa(sobremesa) {
    let botaoSelecionado = document.querySelector(".refeicao.sobremesa.selecionada");
    if (botaoSelecionado !== null) {
        botaoSelecionado.classList.remove("selecionada");
    }
    sobremesa.classList.add("selecionada")
    pedidos[2] = sobremesa;
    trocarCorBotao();
}

function trocarCorBotao() {
    let botao = document.querySelector(".fechar-pedido");
    if (pedidos.length === 3 && pedidos[0] !== undefined && pedidos[1] !== undefined) {
       botao.classList.remove("fechar-pedido");
       botao.classList.add("botao-confirmado");
       botao.querySelector("button p").innerHTML = "Fechar o pedido";
    }
}

function confirmarPedido(fechar) {
    let botaoConfirmado = document.querySelector(".botao-confirmado");
    let confirmarPedido = document.querySelector(".confirmar-pedido");

    if (botaoConfirmado !== null) {
        confirmarPedido.classList.remove("escondido");
    }
}

function cancelarPedido(cancelar) {
    let confirmarPedido = document.querySelector(".confirmar-pedido");
    confirmarPedido.classList.add("escondido")
}

function redirecionarWpp () {
    window.location.href = "https://wa.me/5591989387279?text=Gostaria%20de%20realizar%20esse%20pedido";
}