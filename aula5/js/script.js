let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function adicionar(nome, preco){
    let item = carrinho.find(p => p.nome === nome);

    if(item){
        item.qtd++;
    } else {
        carrinho.push({nome, preco, qtd:1});
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert("Adicionado ao carrinho!");