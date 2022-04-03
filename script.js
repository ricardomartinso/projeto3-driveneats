var pedidos = [];
let pratoNome;
let pratoValor;
let bebidaNome;
let bebidaValor;
let sobremesaNome;
let sobremesaValor;
let confirmarPratoNome;
let confirmarPratoValor;
let confirmarBebidaNome;
let confirmarBebidaValor;
let confirmarSobremesaNome;
let confirmarSobremesaValor;
let confirmarTotal;
let valorSoma;


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
    pratoNome = document.querySelector(".refeicao.prato.selecionada h5");
    pratoValor = document.querySelector(".refeicao.prato.selecionada p.valor");
    bebidaNome = document.querySelector(".refeicao.bebida.selecionada h5");
    bebidaValor = document.querySelector(".refeicao.bebida.selecionada p.valor");
    sobremesaNome = document.querySelector(".refeicao.sobremesa.selecionada h5");
    sobremesaValor = document.querySelector(".refeicao.sobremesa.selecionada p.valor");

    confirmarPratoNome = document.querySelector(".confirmar-prato p");
    confirmarPratoValor = document.querySelector(".confirmar-prato span");

    confirmarBebidaNome = document.querySelector(".confirmar-bebida p");
    confirmarBebidaValor = document.querySelector(".confirmar-bebida span");

    confirmarSobremesaNome = document.querySelector(".confirmar-sobremesa p");
    confirmarSobremesaValor = document.querySelector(".confirmar-sobremesa span");
    
    confirmarPratoNome.innerHTML = pratoNome.textContent;
    confirmarPratoValor.innerHTML = `R$ ${Number.parseFloat(pratoValor.attributes.value.textContent)}0`

    confirmarBebidaNome.innerHTML = bebidaNome.textContent;
    confirmarBebidaValor.innerHTML = `R$ ${Number.parseFloat(bebidaValor.attributes.value.textContent)}0`

    confirmarSobremesaNome.innerHTML = sobremesaNome.textContent;
    confirmarSobremesaValor.innerHTML = `R$ ${Number.parseFloat(sobremesaValor.attributes.value.textContent)}0`

    confirmarTotal = document.querySelector(".confirmar-valor span");
    valorSoma = (Number.parseFloat(pratoValor.attributes.value.textContent) + Number.parseFloat(bebidaValor.attributes.value.textContent) + Number.parseFloat(sobremesaValor.attributes.value.textContent));
    confirmarTotal.innerHTML = `R$ ${valorSoma.toFixed(2)}`


    document.querySelector(".nome-usuario").textContent = nomeUsuario;
    document.querySelector(".endereco-usuario").textContent = enderecoUsuario;
}

function redirecionarWpp () {
    let nomeUsuario = prompt("Qual o seu nome?");
    let enderecoUsuario = prompt("Qual o seu endereço?");

    pratoNome = document.querySelector(".refeicao.prato.selecionada h5");
    bebidaNome = document.querySelector(".refeicao.bebida.selecionada h5");
    sobremesaNome = document.querySelector(".refeicao.sobremesa.selecionada h5");


    let url = `Olá, gostaria de fazer o pedido:
- Prato: ${pratoNome.innerHTML}
- Bebida: ${bebidaNome.innerHTML}
- Sobremesa: ${sobremesaNome.innerHTML}
Total: R$ ${valorSoma.toFixed(2)}

Nome: ${nomeUsuario}
Endereço: ${enderecoUsuario}`
    let encode = encodeURIComponent(url);
    window.location.href = `https://wa.me/5591980448461?text=${encode};`
}

function cancelarPedido(cancelar) {
    let confirmarPedido = document.querySelector(".confirmar-pedido");
    confirmarPedido.classList.add("escondido")
}

