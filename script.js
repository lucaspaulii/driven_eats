function liberarPedido() {
    const comidaJaSelecionado = document.querySelector('.prato .selecionado')
    const bebidaJaSelecionado = document.querySelector('.bebida .selecionado')
    const sobremesaJaSelecionado = document.querySelector('.sobremesa .selecionado')
    const botao = document.querySelector('.button')
    const trigger = document.querySelector('.trigger')
    const websiteSubtitle = document.querySelector('.header-content p')
    const websiteSubtitleContent = websiteSubtitle.innerHTML
    if (comidaJaSelecionado && bebidaJaSelecionado && sobremesaJaSelecionado) {
        botao.classList.add('disponivel')
        if (websiteSubtitleContent === 'Sua comida em 6 minutos') {
            botao.innerHTML = 'Fechar pedido';
        } else {
            botao.innerHTML = 'Close order';
        }
        
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
    const websiteSubtitle = document.querySelector('.header-content p')
    const websiteSubtitleContent = websiteSubtitle.innerHTML
    if (websiteSubtitleContent === 'Sua comida em 6 minutos') {
    alert('Para confirmação do pedido vamos precisar de mais alguns dados seus! E não se preocupe, seu pedido já vai prontinho pro nosso WhatsApp 😉')
    let nome = prompt('Qual seu nome?');
    while (nome === null || nome === '') {
        nome = prompt('Você não preencheu! Favor colocar seu nome')
    }
    let endereco = prompt('Favor inserir endereço de entrega')
    while (endereco === null || endereco === '') {
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
    } else {
        alert("To confirm the order we are going to need some more information! And don't worry, your order is going straight to our WhatsApp 😉")
    let nome = prompt("What's your name?");
    while (nome === null || nome === '') {
        nome = prompt('Oops, please fill in your name!')
    }
    let endereco = prompt("What's the delivery address?")
    while (endereco === null || endereco === '') {
        endereco = prompt('Oops, please fill in your address!')
    }
    const pedido = (`Hello, I would like to order:
- Meal: ${pratoPedido}
- Beverage: ${bebidaPedido}
- Dessert: ${sobremesaPedido}
Total: $ ${precoTotalStrComma}
    
Name: ${nome}
Address: ${endereco}`)
    const uriComp = encodeURIComponent(pedido)
    const urlWhats = (`http://wa.me/5548996831681?text=${uriComp}`)
    window.open(urlWhats);
    }

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

function langENG() {
    const websiteSubtitle = document.querySelector('.header-content p')
    websiteSubtitle.innerHTML = "Your meal in 6 minutes"

    const tituloPrato = document.querySelector('.prato .titulo')
    tituloPrato.innerHTML = "First, FOOD!"

    //mudanca de linguagem prato 1
    const tituloPrato1 = document.querySelector('#comida1 h3')
    tituloPrato1.innerHTML = "Fried Chicken"
    const subtituloPrato1  = document.querySelector('#comida1 h4')
    subtituloPrato1.innerHTML = "God's greatest creation"
    const precoPrato1 = document.querySelector('#comida1 p')
    precoPrato1.innerHTML = `$<span>7,99</span>`; 

    //mudanca de linguagem prato 2
    const tituloPrato2 = document.querySelector('#comida2 h3')
    tituloPrato2.innerHTML = "Burger"
    const subtituloPrato2  = document.querySelector('#comida2 h4')
    subtituloPrato2.innerHTML = "Only a big fat burger, nothing else"
    const precoPrato2 = document.querySelector('#comida2 p')
    precoPrato2.innerHTML = `$<span>5,50</span>`; 

    //mudanca de linguagem prato 3
    const tituloPrato3 = document.querySelector('#comida3 h3')
    tituloPrato3.innerHTML = "Sushi"
    const subtituloPrato3  = document.querySelector('#comida3 h4')
    subtituloPrato3.innerHTML = "A Japanese delight"
    const precoPrato3 = document.querySelector('#comida3 p')
    precoPrato3.innerHTML = `$<span>20,00</span>`;

    //mudanca de linguagem prato 4
    const tituloPrato4 = document.querySelector('#comida4 h3')
    tituloPrato4.innerHTML = "Californian Burrito"
    const subtituloPrato4  = document.querySelector('#comida4 h4')
    subtituloPrato4.innerHTML = "comes with fries... INSIDE"
    const precoPrato4 = document.querySelector('#comida4 p')
    precoPrato4.innerHTML = `$<span>10,20</span>`;

    //mudanca de linguagem prato 5
    const tituloPrato5 = document.querySelector('#comida5 h3')
    tituloPrato5.innerHTML = "Bao"
    const subtituloPrato5  = document.querySelector('#comida5 h4')
    subtituloPrato5.innerHTML = "Simply the best bread ever"
    const precoPrato5 = document.querySelector('#comida5 p')
    precoPrato5.innerHTML = `$<span>15,20</span>`;

    //mudanca de linguagem prato 6
    const tituloPrato6 = document.querySelector('#comida6 h3')
    tituloPrato6.innerHTML = "Carbonara Pasta"
    const subtituloPrato6  = document.querySelector('#comida6 h4')
    subtituloPrato6.innerHTML = "Easier to cook than it seems"
    const precoPrato6 = document.querySelector('#comida6 p')
    precoPrato6.innerHTML = `$<span>9,99</span>`;

    const tituloBebida = document.querySelector('.bebida .titulo')
    tituloBebida.innerHTML = "Now your beverage"

    //mudanca de linguagem bebida 1
    const tituloBebida1 = document.querySelector('#bebida1 h3')
    tituloBebida1.innerHTML = "Coke"
    const subtituloBebida1  = document.querySelector('#bebida1 h4')
    subtituloBebida1.innerHTML = "350ml can"
    const precoBebida1 = document.querySelector('#bebida1 p')
    precoBebida1.innerHTML = `$<span>1,99</span>`;

    //mudanca de linguagem bebida 2
    const tituloBebida2 = document.querySelector('#bebida2 h3')
    tituloBebida2.innerHTML = "Brazilian Guarana"
    const subtituloBebida2  = document.querySelector('#bebida2 h4')
    subtituloBebida2.innerHTML = "350ml can"
    const precoBebida2 = document.querySelector('#bebida2 p')
    precoBebida2.innerHTML = `$<span>3,00</span>`;

    //mudanca de linguagem bebida 3
    const tituloBebida3 = document.querySelector('#bebida3 h3')
    tituloBebida3.innerHTML = "Kombucha"
    const subtituloBebida3  = document.querySelector('#bebida3 h4')
    subtituloBebida3.innerHTML = "A little bottle that no one knows the size"
    const precoBebida3 = document.querySelector('#bebida3 p')
    precoBebida3.innerHTML = `$<span>4,50</span>`;

    //mudanca de linguagem bebida 4
    const tituloBebida4 = document.querySelector('#bebida4 h3')
    tituloBebida4.innerHTML = "Sparkling water"
    const subtituloBebida4  = document.querySelector('#bebida4 h4')
    subtituloBebida4.innerHTML = "If you want without sparkles, drink from the tap"
    const precoBebida4 = document.querySelector('#bebida4 p')
    precoBebida4.innerHTML = `$<span>1,50</span>`;

    //mudanca de linguagem bebida 5
    const tituloBebida5 = document.querySelector('#bebida5 h3')
    tituloBebida5.innerHTML = "Lemonade"
    const subtituloBebida5  = document.querySelector('#bebida5 h4')
    subtituloBebida5.innerHTML = "Lemon, sugar and tap water"
    const precoBebida5 = document.querySelector('#bebida5 p')
    precoBebida5.innerHTML = `$<span>1,75</span>`;

    const tituloSobremesa = document.querySelector('.sobremesa .titulo')
    tituloSobremesa.innerHTML = "SOMETHING SWEET!"

    //mudanca de linguagem sobremesa 1
    const tituloSobremesa1 = document.querySelector('#sobremesa1 h3')
    tituloSobremesa1.innerHTML = "Flan"
    const subtituloSobremesa1  = document.querySelector('#sobremesa1 h4')
    subtituloSobremesa1.innerHTML = "A flat flan"
    const precoSobremesa1 = document.querySelector('#sobremesa1 p')
    precoSobremesa1.innerHTML = `$<span>2,30</span>`;

    //mudanca de linguagem sobremesa 2
    const subtituloSobremesa2  = document.querySelector('#sobremesa2 h4')
    subtituloSobremesa2.innerHTML = "Brazilian candy made with chocolate and peanuts"
    const precoSobremesa2 = document.querySelector('#sobremesa2 p')
    precoSobremesa2.innerHTML = `$<span>1,00</span>`;

    //mudanca de linguagem sobremesa 3
    const subtituloSobremesa3  = document.querySelector('#sobremesa3 h4')
    subtituloSobremesa3.innerHTML = "Banana with coffee! oops, I meant toffee!"
    const precoSobremesa3 = document.querySelector('#sobremesa3 p')
    precoSobremesa3.innerHTML = `$<span>1,00</span>`;

    //mudanca de linguagem sobremesa 4
    const tituloSobremesa4 = document.querySelector('#sobremesa4 h3')
    tituloSobremesa4.innerHTML = "Passion Fruit Mousse"
    const subtituloSobremesa4  = document.querySelector('#sobremesa4 h4')
    subtituloSobremesa4.innerHTML = "Condensed milk and passion fruit juice"
    const precoSobremesa4 = document.querySelector('#sobremesa4 p')
    precoSobremesa4.innerHTML = `$<span>5,00</span>`;

    const botaoDesativado = document.querySelector('.button p')
    botaoDesativado.innerHTML = "Select 3 items to close the order"

    const headerConfirm = document.querySelector('.header-confirm h2')
    headerConfirm.innerHTML = "Select 3 items to close the order"

    const confirmTotal = document.querySelector('.confirm-total h2:nth-child(2)')
    confirmTotal.innerHTML = "$<span></span>"

    const confirmButton = document.querySelector('.confirm-button h3')
    confirmButton.innerHTML = "Everything Ok, order now!"

    const cancelButton = document.querySelector('.cancel-button h4')
    cancelButton.innerHTML = "Cancel"

    const langSelection = document.querySelector('.lang-selection')
    langSelection.classList.add('escondido')
}

function langPTBR() {
    const langSelection = document.querySelector('.lang-selection')
    langSelection.classList.add('escondido')
}
