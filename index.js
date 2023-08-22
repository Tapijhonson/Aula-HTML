
const botao = document.getElementById("botao1");
const saida = document.getElementById("saida1");


botao.addEventListener("click",lidarComClique);

function lidarComClique(evento) {
    const valorDoCampo = saida.value;
    alert(valorDoCampo)
}



console.log(botao)
console.log(saida)