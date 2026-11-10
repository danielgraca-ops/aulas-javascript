
console.log('ATIVIDADE 3');

const carrinho = [25.50, 10.00, 100.00, 5.00];

const valorTotal = carrinho.reduce((total, preco) => {
    return total + preco;
}, 0);

console.log('Valor total: R$', valorTotal.toFixed(2));
