var legendas = [
    {codigo:"#", nome:"Posição"},
    {codigo:"Clube", nome:"Clube"},
    {codigo:".", nome:"Variação"},
    {codigo:"P", nome:"Pontos"},
    {codigo:"J", nome:"Jogos"},
    {codigo:"V", nome:"Vitórias"},
    {codigo:"E", nome:"Empates"},
    {codigo:"D", nome:"Derrotas"},
    {codigo:"GP", nome:"Gols Pró"},
    {codigo:"GC", nome:"Gols Contra"},
    {codigo:"SG", nome:"Saldo de Gols"},
    {codigo:"%", nome:"Aproveitamento"}, 
    {codigo:"ÚLT. JOGOS", nome:"Últimos Jogos"}
]

for(i=1;i<=legendas.length;i++){
    var aux = document.querySelector("#legendas th:nth-child("+i+")");
    aux.textContent = legendas[i-1].nome;
}

//var clube = document.querySelector("#legendas th:nth-child("+2+")");
//clube.textContent = "Uhull"