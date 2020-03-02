


//variáveis
var legendas = [
    { codigo: "", nome: "Posição" },
    { codigo: "Clube", nome: "Clube" },
    { codigo: "", nome: "Variação" },
    { codigo: "P", nome: "Pontos" },
    { codigo: "J", nome: "Jogos" },
    { codigo: "V", nome: "Vitórias" },
    { codigo: "E", nome: "Empates" },
    { codigo: "D", nome: "Derrotas" },
    { codigo: "GP", nome: "Gols Pró" },
    { codigo: "GC", nome: "Gols Contra" },
    { codigo: "SG", nome: "Saldo de Gols" },
    { codigo: "%", nome: "Aproveitamento" },
    { codigo: "ÚLT. JOGOS", nome: "Últimos Jogos" }
]

//funções
function setLegendas(tipo) {
    for (i = 1; i <= legendas.length; i++) {
        var aux = document.querySelector("#legendas th:nth-child(" + i + ")");
        switch (tipo) {
            case "codigo":
                aux.textContent = legendas[i - 1].codigo;
                break;
            case "nome":
                aux.textContent = legendas[i - 1].nome;
                break;
        }
    }
}


class Clube {

    constructor(nome) {
        this.posicao = 1;
        this.nome = nome;
        this.variacao = '\u25cf'+'\u2191'+'\u2193';//"0 ↑↓";
        this.pontos = 0;
        this.jogos = 0;
        this.vitorias = 0;
        this.empates = 0;
        this.derrotas = 0;
        this.golsPro = 0;
        this.golsContra = 0;
        this.saldoGols = 0;
        this.aproveit = 0;
        this.ultJogos = "-";
        this.percAproveit = this.aproveit+"%"
    }

}

var nomesClubes = [
    "Athletico-PR",
    "Atlético-GO",
    "Atlético-MG",
    "Bahia",
    "Botafogo",
    "Bragantino",
    "Ceará",
    "Corinthians",
    "Coritiba",
    "Flamengo",
    "Fluminense",
    "Fortaleza",
    "Goiás",
    "Grêmio",
    "Internacional",
    "Palmeiras",
    "Santos",
    "São Paulo",
    "Sport",
    "Vasco"
]

var clubes = [];

function gerarTimes(nomesClubes) {
    for(i=0;i<nomesClubes.length;i++){
        clubes[i] = new Clube(nomesClubes[i]);
    }
}


function setClubes() {
    for (i = 0; i < 20; i++) {
        var aux = document.querySelector("table tr:nth-child(" + (i + 2) + ")");
        for (j = 0; j < Object.keys(clubes[0]).length; j++) {
            aux.querySelector("td:nth-child(1)").textContent = clubes[i].posicao;
            aux.querySelector("td:nth-child(2)").textContent = clubes[i].nome;
            aux.querySelector("td:nth-child(3)").textContent = clubes[i].variacao;
            aux.querySelector("td:nth-child(4)").textContent = clubes[i].pontos;
            aux.querySelector("td:nth-child(5)").textContent = clubes[i].jogos;
            aux.querySelector("td:nth-child(6)").textContent = clubes[i].vitorias;
            aux.querySelector("td:nth-child(7)").textContent = clubes[i].empates;
            aux.querySelector("td:nth-child(8)").textContent = clubes[i].derrotas;
            aux.querySelector("td:nth-child(9)").textContent = clubes[i].golsPro;
            aux.querySelector("td:nth-child(10)").textContent = clubes[i].golsContra;
            aux.querySelector("td:nth-child(11)").textContent = clubes[i].saldoGols;
            aux.querySelector("td:nth-child(12)").textContent = clubes[i].percAproveit;
            aux.querySelector("td:nth-child(13)").textContent = clubes[i].ultJogos;
        }
    }
}

//Main
function main() {
    setLegendas("codigo");
    gerarTimes(nomesClubes);
    setClubes();
}

main();
