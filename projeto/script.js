const inputTitulo = document.getElementById("titulo");
const inputVilao = document.getElementById("vilao");
const inputMissao = document.getElementById("missao");
const boxHistoria = document.getElementById("historia");


document.getElementById("criar").addEventListener("click", criarEpisodio);


function aleatorio(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


function validarCampo(valor, mensagem) {
    if (valor.trim() === "") {
        alert(mensagem);
        return false;
    }
    return true;
}


function criarEpisodio() {
    const titulo = inputTitulo.value;
    const vilao = inputVilao.value;
    const missao = inputMissao.value;


    if (!validarCampo(titulo, "Por favor, escreva um título para o episódio!")) return;
    if (!validarCampo(vilao, "Digite o vilão!")) return;
    if (!validarCampo(missao, "Descreva a missão!")) return;


    const introducoes = [
        "Era uma manhã tranquila em Townsville...",
        "Tudo parecia calmo, até que de repente...",
        "Enquanto o professor trabalhava em seu laboratório...",
        "As superpoderosas se preparavam para mais um dia de ação! Até que..."
    ];


    const finais = [
        "E assim, Townsville ficou em segurança mais uma vez!",
        "Com muito trabalho em equipe, as meninas salvaram o dia!",
        "Nada pode deter as Superpoderosas!",
        "E o vilão prometeu não causar mais nenhuma confusão... Por hoje!"
    ];


    const intro = aleatorio(introducoes);
    const fim = aleatorio(finais);


    const historia = `
        <h2>${titulo}</h2>
        <p>${intro}</p>
        <p>De repente o terrível <strong>${vilao}</strong> apareceu e começou a ${missao}!</p>
        <p>Mas Florzinha, Lindinha, Docinho e Estrelinha não deixaram barato. Usaram seus superpoderes e lutaram bravamente!</p>
        <p>${fim}</p>
    `;


    boxHistoria.innerHTML = historia;
}


