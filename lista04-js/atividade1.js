
console.log('ATIVIDADE 1');

const usuarios = [
    { nome: 'Ana', ativo: true },
    { nome: 'Beto', ativo: false },
    { nome: 'Caio', ativo: true },
    { nome: 'Duda', ativo: false }
];

const usuariosAtivos = usuarios.filter(usuario => usuario.ativo);

console.log(usuariosAtivos);
