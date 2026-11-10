
console.log('ATIVIDADE 4');

const nomesRepetidos = ['João', 'Maria', 'João', 'Pedro', 'Maria'];

function limparLista(nomes) {
    return [...new Set(nomes)];
}

const nomesLimpos = limparLista(nomesRepetidos);

console.log(nomesLimpos);
