const elementosFake = [
    {
        tagName: 'DIV',
        style: { color: 'blue', display: 'flex' },
        classList: ['container', 'active']
    },
    {
        tagName: 'H1',
        style: { color: 'red', display: 'block' },
        classList: ['title']
    },
    {
        tagName: 'BUTTON',
        style: { color: 'white', display: 'inline-block' },
        classList: ['btn', 'btn-primary']
    }
];

// ATIVIDADE 1
console.log('--- ATIVIDADE 1 ---');

const primeiroElemento = elementosFake[0];

for (const propriedade in primeiroElemento) {
    console.log(propriedade, primeiroElemento[propriedade]);
}

// ATIVIDADE 2
console.log('--- ATIVIDADE 2 ---');

for (const elemento of elementosFake) {
    if (elemento.style.color === 'blue') {
        console.log(`O elemento ${elemento.tagName} é azul!`);
    }
}

// ATIVIDADE 3
console.log('--- ATIVIDADE 3 ---');

elementosFake.forEach(function(elemento) {
    console.log(`Nome da tag: ${elemento.tagName}`);
});

// ATIVIDADE 4
console.log('--- ATIVIDADE 4 ---');

elementosFake.forEach(function(elemento) {
    console.log(
        `Tag: ${elemento.tagName} | Quantidade de classes: ${elemento.classList.length}`
    );
});
