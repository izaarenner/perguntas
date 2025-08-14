const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


        const perguntas = [
    {
        enunciado: " Como você acredita que a inclusão impacta o ambiente escolar?",
        alternativas: [
            {
                texto: "Facilita a convivência e promove o respeito entre todos.",
                afirmacao: "Você valoriza um ambiente harmonioso, onde o respeito e a convivência são pilares fundamentais para o crescimento de todos. "
            },
            {
                texto: "Pode gerar desafios, mas é essencial para o crescimento coletivo.",
                afirmacao: "Você reconhece que, embora a inclusão traga desafios, ela é indispensável para o desenvolvimento coletivo. "
            }
        ]
    },
    {
        enunciado: " Na sua opinião, qual é o maior benefício da inclusão no trabalho? ",
        alternativas: [
            {
                texto: "A diversidade traz mais criatividade e inovação.",
                afirmacao: "Você acredita que a diversidade é uma fonte inesgotável de criatividade e inovação. "
            },
            {
                texto: "Promove um ambiente mais justo e igualitário para todos.",
                afirmacao: "Para você, um ambiente de trabalho justo é aquele que promove igualdade para todos, sem exceção. "
            }
        ]
    },
    {
        enunciado: "Você acredita que a inclusão é responsabilidade de quem?",
        alternativas: [
            {
                texto: "De toda a sociedade, pois todos devem contribuir para um mundo melhor.",
                afirmacao: "Você acredita que a responsabilidade pela inclusão é de todos nós, e que juntos podemos construir um mundo melhor. "
            },
            {
                texto: "Principalmente das instituições, que devem criar políticas eficazes.",
                afirmacao: "Você vê as instituições como protagonistas na criação de políticas que garantam a inclusão efetiva."
            }
        ]
    },
    {
        enunciado: " Quando você vê uma pessoa com deficiência participando ativamente da sociedade, o que pensa?",
        alternativas: [
            {
                texto: "Que ela merece respeito e as mesmas oportunidades que qualquer pessoa.",
                afirmacao: " Você defende que todas as pessoas merecem respeito e oportunidades iguais, independentemente de suas condições."
            },
            {
                texto: "Que a sociedade ainda precisa se adaptar melhor para garantir essa participação.",
                afirmacao: "Você entende que a sociedade ainda precisa evoluir para garantir a participação plena de todos. "
            }
        ]
    },
    {
        enunciado: "Como você age quando percebe alguma situação de exclusão ou preconceito?",
        alternativas: [
            {
                texto: " Procuro intervir e ajudar a mudar a situação.",
                afirmacao: "Você é uma pessoa ativa e que não hesita em agir diante do preconceito ou da exclusão. "
            },
            {
                texto: " Tento entender o contexto antes de agir para não causar desconforto.",
                afirmacao: "Você prefere observar e compreender o contexto antes de tomar uma atitude, para agir com mais consciência. "
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
