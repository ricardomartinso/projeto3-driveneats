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

function confirmarPedido() {
    var botaoConfirmado = document.querySelector(".botao-confirmado");
    var confirmarPedido = document.querySelector(".confirmar-pedido");
    if (botaoConfirmado !== null) {
        confirmarPedido.classList.remove("escondido");
    }
    let pratoNome = document.querySelector(".refeicao.prato.selecionada h5");
    let pratoValor = document.querySelector(".refeicao.prato.selecionada p.valor");
    let bebidaNome = document.querySelector(".refeicao.bebida.selecionada h5");
    let bebidaValor = document.querySelector(".refeicao.bebida.selecionada p.valor");
    let sobremesaNome = document.querySelector(".refeicao.sobremesa.selecionada h5");
    let sobremesaValor = document.querySelector(".refeicao.sobremesa.selecionada p.valor");

    let confirmarPratoNome = document.querySelector(".confirmar-prato p");
    let confirmarPratoValor = document.querySelector(".confirmar-prato span");

    let confirmarBebidaNome = document.querySelector(".confirmar-bebida p");
    let confirmarBebidaValor = document.querySelector(".confirmar-bebida span");

    let confirmarSobremesaNome = document.querySelector(".confirmar-sobremesa p");
    let confirmarSobremesaValor = document.querySelector(".confirmar-sobremesa span");
    
    confirmarPratoNome.innerHTML = pratoNome.textContent;
    confirmarPratoValor.innerHTML = pratoValor.textContent;

    confirmarBebidaNome.innerHTML = bebidaNome.textContent;
    confirmarBebidaValor.innerHTML = bebidaValor.textContent;

    confirmarSobremesaNome.innerHTML = sobremesaNome.textContent;
    confirmarSobremesaValor.innerHTML = sobremesaValor.textContent;
    
}

function cancelarPedido(cancelar) {
    let confirmarPedido = document.querySelector(".confirmar-pedido");
    confirmarPedido.classList.add("escondido")
}

function redirecionarWpp () {
    window.location.href = "https://wa.me/5591989387279?text=Gostaria%20de%20realizar%20esse%20pedido";
}
