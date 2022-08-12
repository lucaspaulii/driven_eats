function liberarPedido() {
    const comidaJaSelecionado = document.querySelector('.prato .selecionado')
    const bebidaJaSelecionado = document.querySelector('.bebida .selecionado')
    const sobremesaJaSelecionado = document.querySelector('.sobremesa .selecionado')
    const botao = document.querySelector('.button')
    const trigger = document.querySelector('.trigger')
    if (comidaJaSelecionado && bebidaJaSelecionado && sobremesaJaSelecionado) {
        botao.classList.add('disponivel')
        botao.innerHTML = 'Fechar pedido';
        trigger.classList.add('podeclicar')
    }
}

function selecionarComida(item) {
    const jaSelecionado = document.querySelector('.prato .selecionado')
    if (jaSelecionado) {
        jaSelecionado.classList.remove('selecionado')
    }
    const selecionado = document.querySelector(item)
    selecionado.classList.add('selecionado')

    const iconJaSelecionado = document.querySelector('.prato .visivel')
    if (iconJaSelecionado) {
        iconJaSelecionado.classList.remove('visivel')
    }
    let iconID = item + 'icon'
    const iconSelecionado = document.querySelector(iconID);
    iconSelecionado.classList.add('visivel');

    liberarPedido();
}

function selecionarBebida(item) {
    const jaSelecionado = document.querySelector('.bebida .selecionado')
    if (jaSelecionado) {
        jaSelecionado.classList.remove('selecionado')
    }
    const selecionado = document.querySelector(item)
    selecionado.classList.add('selecionado')

    const iconJaSelecionado = document.querySelector('.bebida .visivel')
    if (iconJaSelecionado) {
        iconJaSelecionado.classList.remove('visivel')
    }
    let iconID = item + 'icon'
    const iconSelecionado = document.querySelector(iconID);
    iconSelecionado.classList.add('visivel');

    liberarPedido();
}

function selecionarSobremesa(item) {
    const jaSelecionado = document.querySelector('.sobremesa .selecionado')
    if (jaSelecionado) {
        jaSelecionado.classList.remove('selecionado')
    }
    const selecionado = document.querySelector(item)
    selecionado.classList.add('selecionado')

    const iconJaSelecionado = document.querySelector('.sobremesa .visivel')
    if (iconJaSelecionado) {
        iconJaSelecionado.classList.remove('visivel')
    }
    let iconID = item + 'icon'
    const iconSelecionado = document.querySelector(iconID);
    iconSelecionado.classList.add('visivel');

    liberarPedido();
}

function fecharPedido() {
    const pratoPedidoTarget = document.querySelector('.prato .selecionado h3');
    const bebidaPedidoTarget = document.querySelector('.bebida .selecionado h3');
    const sobremesaPedidoTarget = document.querySelector('.sobremesa .selecionado h3');
    const precoPratoTarget = document.querySelector('.prato .selecionado span');
    const precoBebidaTarget = document.querySelector('.bebida .selecionado span');
    const precoSobremesaTarget = document.querySelector('.sobremesa .selecionado span');
    const pratoPedido = pratoPedidoTarget.innerHTML;
    const bebidaPedido = bebidaPedidoTarget.innerHTML;
    const sobremesaPedido = sobremesaPedidoTarget.innerHTML;
    const precoPrato = Number(precoPratoTarget.innerHTML.replaceAll(',', '.'));
    const precoBebida = Number(precoBebidaTarget.innerHTML.replaceAll(',', '.'));
    const precoSobremesa = Number(precoSobremesaTarget.innerHTML.replaceAll(',', '.'));
    const precoTotal = (precoPrato + precoBebida + precoSobremesa).toFixed(2);
    const precoTotalStr = precoTotal.toString();
    const precoTotalStrComma = precoTotalStr.replaceAll('.', ',');
    alert('Para confirmação do pedido vamos precisar de mais alguns dados seus! E não se preocupe, seu pedido já vai prontinho pro nosso WhatsApp 😉')
    let nome = prompt('Qual seu nome?');
    while (nome === null) {
        nome = prompt('Você não preencheu! Favor colocar seu nome')
    }
    let endereco = prompt('Favor inserir endereço de entrega')
    while (endereco === null) {
        endereco = prompt('Você não preencheu! Favor colocar seu endereço de entrega')
    }
    const pedido = (`Olá, gostaria de fazer o pedido:
- Prato: ${pratoPedido}
- Bebida: ${bebidaPedido}
- Sobremesa: ${sobremesaPedido}
Total: R$ ${precoTotalStrComma}
    
Nome: ${nome}
Endereço: ${endereco}`)
    const uriComp = encodeURIComponent(pedido)
    const urlWhats = (`http://wa.me/5548996831681?text=${uriComp}`)
    window.open(urlWhats);
}

function confirmarPedido() {
    const pratoPedidoTarget = document.querySelector('.prato .selecionado h3');
    const bebidaPedidoTarget = document.querySelector('.bebida .selecionado h3');
    const sobremesaPedidoTarget = document.querySelector('.sobremesa .selecionado h3');
    const precoPratoTarget = document.querySelector('.prato .selecionado span');
    const precoBebidaTarget = document.querySelector('.bebida .selecionado span');
    const precoSobremesaTarget = document.querySelector('.sobremesa .selecionado span');
    const pratoPedido = pratoPedidoTarget.innerHTML;
    const bebidaPedido = bebidaPedidoTarget.innerHTML;
    const sobremesaPedido = sobremesaPedidoTarget.innerHTML;
    const precoPrato = Number(precoPratoTarget.innerHTML.replaceAll(',', '.'));
    const precoBebida = Number(precoBebidaTarget.innerHTML.replaceAll(',', '.'));
    const precoSobremesa = Number(precoSobremesaTarget.innerHTML.replaceAll(',', '.'));
    const precoTotal = (precoPrato + precoBebida + precoSobremesa).toFixed(2);
    const precoTotalStr = precoTotal.toString();
    const precoTotalStrComma = precoTotalStr.replaceAll('.', ',');


    const textoPrato = document.querySelector('#prato-confirmado');
    textoPrato.innerHTML = pratoPedido;
    const textoPrecoPrato = document.querySelector('#preco-prato-confirmado');
    textoPrecoPrato.innerHTML = precoPratoTarget.innerHTML;
    
    const textoBebida = document.querySelector('#bebida-confirmado');
    textoBebida.innerHTML = bebidaPedido;
    const textoPrecoBebida = document.querySelector('#preco-bebida-confirmado');
    textoPrecoBebida.innerHTML = precoBebidaTarget.innerHTML;

    const textoSobremesa = document.querySelector('#sobremesa-confirmado');
    textoSobremesa.innerHTML = sobremesaPedido;
    const textoPrecoSobremesa = document.querySelector('#preco-sobremesa-confirmado');
    textoPrecoSobremesa.innerHTML = precoSobremesaTarget.innerHTML;

    const textoTotal = document.querySelector('.confirm-total span');
    textoTotal.innerHTML = precoTotalStrComma;

    const backgroundConfirmacaoEscondido = document.querySelector('.confirmarpedido');
    backgroundConfirmacaoEscondido.classList.remove('indisponivel');

    const confirmacaoEscondido = document.querySelector('.dadosconfirmacao');
    confirmacaoEscondido.classList.remove('escondido');
}

function cancelarPedido() {
    const backgroundConfirmacaoEscondido = document.querySelector('.confirmarpedido');
    backgroundConfirmacaoEscondido.classList.add('indisponivel');

    const confirmacaoEscondido = document.querySelector('.dadosconfirmacao');
    confirmacaoEscondido.classList.add('escondido');
}