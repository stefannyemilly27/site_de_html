document.getElementById("criar").addEventListener("click", criarEpisodio);

function criarEpisodio() {
    const titulo = document.getElementById("titulo").value;
    const vilao = document.getElementById("vilao").value;
    const missao = document.getElementById("missao").value;
}

if (titulo.trim() === "") {
    alert("Por favor, escreva um título para o episódio!");
    return;
}

const introducoes = [
    "Era uma manhã tranquila em Townsville...",
    "Tudo parecia calmo, até que derrepente...",
    "Enquanto o professor trabalhava em seu laboratório...",
    "As superpoderosas se preparavam para mais um dia de ação! Até que..."
];

const finais = [
    "E assim, Townsville ficou em segurança mais uma vez!",
    "Com muito trabalho em equipe, as meninas salvaram o dia!",
    "Nada pode deter as Superpoderosas!",
    "E o vilão prometeu não causar mais nenhuma confusão... Por hoje!"
];

const intro = introducoes[Math.floor(Math.random() * introducoes.length)];
const fim = finais[Math.floor(Math.random() * finais.length)];

const historia = `
  <h2>${titulo}</h2>
  <p>${intro}</p>
  <p>De repente o terrível <strong>${vilao}</strong> apareceu e começou a ${missao}!</p>
  <p>Mas Florzinha, Lindinha, Docinho e Estrelinha não deixaram barato. Usaram seus superpoderes e lutaram bravamente! </p>
  <p>${fim}</p>

 ` ;

  document.getElementById("historia").innerHTML = historia;
