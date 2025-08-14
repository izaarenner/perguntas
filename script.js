const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


        const perguntas = [
    {
        enunciado: " Qual a principal festa do México?",
        alternativas: [
            {
                texto: "Dia da Nossa Senhora de Guadalupe!",
                afirmacao: "A festa incluiu ritus religiosos, comidas e bebidas com conotações,especialmente na Basílica de Guadalupe, na Cidade do México. "
            },
            {
                texto: "Dia da Assunção da Virgem Maria!",
                afirmacao: "Em algumas regiões, a celebrações podem durar até duas semanas. "
            }
        ]
    },
    {
        enunciado: " Qual das principais pirâmides do Méxcio você conhece mais? ",
        alternativas: [
            {
                texto: "Pirâmide do Sol",
                afirmacao: "- É uma das pirâmides mais antigas e importantes de Teotihuacán, localizada a cerca de 40 km da Cidade do México.Com 65 metros de altura, é a terceira maior pirâmide do mundo e oferece uma vista incrível da cidade antiga."
            },
            {
                texto: "Pirâmide da Lua",
                afirmacao: "- Localizada no final da Avenida dos Mortos, a Pirâmide da Lua é uma estrutura impressionante que forma um complexo com a Pirâmide do Sol e outras estruturas.Com 45 metros de altura, é um exemplo da arquitetura e engenharia avançada dos povos pré-colombianos"
            }
        ]
    },
    {
        enunciado: "Para você o que é o mais importante?",
        alternativas: [
            {
                texto: "A Importância Cultural e Histórica",
                afirmacao: "A obra de Frida Kahlo é importante para a arte mexicana porque reflete a identidade cultural e histórica do México, incorporando elementos da arte popular e da mitologia pré-hispânica."
            },
            {
                texto: "Inovação Artística e Expressão Pessoal",
                afirmacao: "A obra de Frida Kahlo é importante para a arte mexicana porque inova e experimenta com diferentes estilos e técnicas, misturando elementos do surrealismo, do realismo e da arte popular."
            }
        ]
    },
    {
        enunciado: " Qual festa em sua visão é a principal festa do México?",
        alternativas: [
            {
                texto: "Dia dos Mortos (Día de los Muertos)",
                afirmacao: "É uma celebração única e icônica do México, realizada em 1º e 2 de novembro, para homenagear os entes queridos falecidos.As famílias criam altares elaborados com fotos, flores, velas e alimentos favoritos dos mortos."
            },
            {
                texto: "Carnaval de Veracruz:",
                afirmacao: "É uma festa animada e cheia de energia, realizada em fevereiro, com desfiles, música e dança.A cidade de Veracruz se transforma em um epicentro de festividades, com influências africanas, indígenas e espanholas."
            }
        ]
    },
    {
        enunciado: "Qual dessas comidas típicas do México você mais gosta?",
        alternativas: [
            {
                texto: "Tacos",
                afirmacao: "Tortilha de milho ou de trigo rechedas com uma variedade de ingredientes."
            },
            {
                texto: " Sopes",
                afirmacao: "Pequenas tortilhas de milho cobertas com feijão, queijo e carne"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2025...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
