// ==========================================
// FASE 1 - CONFIGURAÇÃO E ELEMENTOS NO DOM
// ==========================================

// 3. Teste de Vida
console.log("Sobrevivente conectado ao DOM!");

// 4. Selecionando por Tag
const cabecalho = document.querySelector('header');
console.log(cabecalho);

// 5. Selecionando por ID
const btnTema = document.querySelector('#btn-tema');

// 6. Selecionando por Classe
const boasVindas = document.querySelector('#boas-vindas');

// 7. Selecionando por Combinação
const tituloSite = document.querySelector('header h1');

// 8. Selecionando Múltiplos Elementos
const listaBeneficios = document.querySelectorAll('ol li');

// 9. Contando Elementos
console.log("Quantidade de benefícios:", listaBeneficios.length);

// 10. Selecionando Campos de Formulário
const campoNome = document.querySelector('input[type="text"]');
const campoEmail = document.querySelector('input[type="email"]');

// 36. Contador de Matches
let totalMatches = 0;


// ==========================================
// FASE 2 - MANIPULANDO TEXTOS, ESTILOS E ATRIBUTOS
// ==========================================

// 11. Alterando Texto Seguro
tituloSite.textContent = "The Walking Date 🧟";

// 12. Interpretando HTML
const depoimento = document.querySelector('cite');

depoimento.innerHTML =
    "<strong>Zezinho da Foice</strong>, Sobrevivente Nível 5";

// 13. Lendo Conteúdo
const textoBoasVindas =
    document.querySelector('#boas-vindas p').textContent;

console.log(textoBoasVindas);

// 14. Modificando Estilo Direto
const lateral = document.querySelector('aside');

lateral.style.borderColor = 'var(--cor-sangue)';

// 15. Propriedades em camelCase
lateral.style.fontSize = '1.1rem';

// 16. Manipulando Atributos (Leitura)
const imagem = document.querySelector('#boas-vindas img');

console.log(imagem.getAttribute('alt'));

// 17. Manipulando Atributos (Escrita)
imagem.setAttribute(
    'alt',
    'Casal de zumbis apaixonados caminhando ao pôr do sol'
);

// 18. Preenchendo Valores Padrão
campoNome.value = "Sobrevivente Anônimo";

// 20. Aplicando Classe via JS
const primeiraLinha = document.querySelector('tbody tr');

primeiraLinha.classList.add('destaque-infectado');


// ==========================================
// FASE 3 - CRIANDO E REMOVENDO ELEMENTOS
// ==========================================

// 22. Criando Elemento
const aviso = document.createElement('p');

// 23. Configurando o Novo Elemento
aviso.textContent =
    "⚠️ ALERTA DE HORDA: Encontros hoje apenas em zonas seguras!";

aviso.style.backgroundColor = 'var(--cor-sangue)';
aviso.style.textAlign = 'center';

// 24. Injetando na Página
const barraAlerta = document.querySelector('#barra-alerta');

barraAlerta.appendChild(aviso);

// 25. Criando Novo Benefício
const novoBeneficio = document.createElement('li');

novoBeneficio.textContent =
    "Seguro contra perda de membros durante o primeiro encontro.";

document.querySelector('ol').appendChild(novoBeneficio);

// 28. Ouvindo o Clique para Remover
const fecharAlerta = document.querySelector('#fechar-alerta');

fecharAlerta.addEventListener('click', function() {
    document.querySelector('#barra-alerta').remove();
});


// ==========================================
// FASE 4 - O MILAGRE DO TEMA E EVENTOS DE CLIQUE
// ==========================================

// 29. Selecionando a Raiz
const htmlRoot = document.documentElement;

// 30. Ouvindo o Botão de Tema
btnTema.addEventListener('click', function() {

    // 31. Lógica de Alternância
    if (htmlRoot.getAttribute('data-theme') === 'light') {

        htmlRoot.removeAttribute('data-theme');

        // 32. Feedback Visual
        btnTema.textContent = "Modo Sobrevivência ☀️";

    } else {

        htmlRoot.setAttribute('data-theme', 'light');

        // 32. Feedback Visual
        btnTema.textContent = "Modo Sombrio 🌙";
    }

});

// 34. Reagindo ao Match
const botaoMatch = document.querySelector('.botao-match');

botaoMatch.addEventListener('click', function(event) {

    event.target.textContent = "Match Confirmado! 💘🧟";

    event.target.disabled = true;

    // 36. Incrementando Placar
    totalMatches++;

    document.querySelector('#placar-matches').textContent =
        "Matches: " + totalMatches;

});


// ==========================================
// FASE 5 - EVENTOS DE FORMULÁRIO, TECLADO E INTERATIVIDADE
// ==========================================

// 39. Lendo e Convertendo Números
const btnCalcular = document.querySelector('#btn-calcular');

const diasInfectado = document.querySelector('#dias-infectado');

const diasParceiro = document.querySelector('#dias-parceiro');

const resultadoQuimica = document.querySelector('#resultado-quimica');

btnCalcular.addEventListener('click', function() {

    const dias1 = Number(diasInfectado.value);
    const dias2 = Number(diasParceiro.value);

    // 41. Validação Simples
    if (
        diasInfectado.value === '' ||
        diasParceiro.value === '' ||
        dias1 < 0 ||
        dias2 < 0
    ) {

        resultadoQuimica.textContent =
            "ERRO: Digite um número válido de dias, humano!";

        return;
    }

    // 40. Calculando e Exibindo
    const soma = dias1 + dias2;

    resultadoQuimica.textContent =
        "Nível de Compatibilidade atual: " + soma;
});


// 42. Evento Input (Tempo Real)
campoNome.addEventListener('input', function() {

    // 44. Atualizando o Crachá ao Digitar
    const previewCracha = document.querySelector('#preview-cracha');

    previewCracha.textContent =
        "Crachá de Sobrevivente: " + campoNome.value;

});


// 45. Evento Mouseover na Imagem
imagem.addEventListener('mouseover', function() {

    console.log("Cuidado! Não chegue muito perto da tela...");

});


// 46. Interceptando o Formulário (Submit)
const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {

    // 47. Bloqueando Recarregamento
    event.preventDefault();

    // 48. Confirmando Inscrição na Tela
    alert(
        "Cadastro concluído, " +
        campoNome.value +
        "! Prepare sua melhor mordida."
    );

    // 49. Limpando o Formulário
    campoNome.value = "";
    campoEmail.value = "";

    document.querySelector('#preview-cracha').textContent =
        "Crachá: ...";

});


// 50. Atalho de Teclado (keydown)
document.addEventListener('keydown', function(event) {

    if (event.key === 'Escape') {

        const alerta = document.querySelector('#barra-alerta');

        if (alerta) {
            alerta.remove();// ALTERNAR TEMA CLARO E ESCURO

            const btnTema = document.querySelector('#btn-tema');
            
            if (btnTema) {
                btnTema.addEventListener('click', () => {
            
                    const temaAtual = document.documentElement.getAttribute('data-theme');
            
                    if (temaAtual === 'light') {
                        document.documentElement.setAttribute('data-theme', 'dark');
                    } else {
                        document.documentElement.setAttribute('data-theme', 'light');
                    }
            
                });
            }
            
        }

    }

});

