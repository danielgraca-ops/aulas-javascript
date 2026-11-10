
console.log('ATIVIDADE 2');

const produtos = [
    { nome: 'Teclado', preco: 100 },
    { nome: 'Mouse', preco: 50 }
];

const produtosComDesconto = produtos.map(produto => ({
    ...produto,
    preco: produto.preco * 0.9
}));

console.log('Produtos originais:', produtos);
console.log('Produtos com desconto:', produtosComDesconto);
