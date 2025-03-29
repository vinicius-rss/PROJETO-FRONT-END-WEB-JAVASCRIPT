document.addEventListener("DOMContentLoaded", function () {
  
    const somaIdades = (vetor) => vetor.reduce((total, idade) => total + idade, 0);
    const mediaIdades = (vetor) => somaIdades(vetor) / vetor.length;
    const maiorIdade = (vetor) => Math.max(...vetor);
    const idadesImpares = (vetor) => vetor.filter(idade => idade % 2 !== 0);
    const todosMaiores = (vetor) => vetor.every(idade => idade >= 18);
    const todasAcimaDe = (vetor, minimo) => vetor.every(idade => idade >= minimo);
    const idadesAcimaDe = (vetor, minimo) => vetor.filter(idade => idade >= minimo);
    const mediaIdadesAcimaDe = (vetor, minimo) => {
        let filtradas = idadesAcimaDe(vetor, minimo);
        return filtradas.length > 0 ? somaIdades(filtradas) / filtradas.length : 0;
    };
 
    let idades = [10, 21, 31, 40];

   
    let idadeMinima1 = 18;
    let idadeMinima2 = 25;

   
    let resultado = document.getElementById("resultado");

     
    resultado.innerHTML += `<p><strong>Soma das idades:</strong> ${somaIdades(idades)}</p>`;
    resultado.innerHTML += `<p><strong>Média das idades:</strong> ${mediaIdades(idades).toFixed(2)}</p>`;
    resultado.innerHTML += `<p><strong>Maior idade:</strong> ${maiorIdade(idades)}</p>`;
    resultado.innerHTML += `<p><strong>Idades ímpares:</strong> ${idadesImpares(idades).join(', ') || "Nenhuma"}</p>`;
    resultado.innerHTML += `<p><strong>Todos são maiores de idade?</strong> ${todosMaiores(idades) ? "Sim" : "Não"}</p>`;

    resultado.innerHTML += `<p><strong>Todas as idades são maiores ou iguais a ${idadeMinima1}?</strong> ${todasAcimaDe(idades, idadeMinima1) ? "Sim" : "Não"}</p>`;
    resultado.innerHTML += `<p><strong>Idades maiores ou iguais a ${idadeMinima1}:</strong> ${idadesAcimaDe(idades, idadeMinima1).join(', ') || "Nenhuma"}</p>`;
    resultado.innerHTML += `<p><strong>Média das idades maiores ou iguais a ${idadeMinima1}:</strong> ${mediaIdadesAcimaDe(idades, idadeMinima1).toFixed(2)}</p>`;

    resultado.innerHTML += `<p><strong>Todas as idades são maiores ou iguais a ${idadeMinima2}?</strong> ${todasAcimaDe(idades, idadeMinima2) ? "Sim" : "Não"}</p>`;
    resultado.innerHTML += `<p><strong>Idades maiores ou iguais a ${idadeMinima2}:</strong> ${idadesAcimaDe(idades, idadeMinima2).join(', ') || "Nenhuma"}</p>`;
    resultado.innerHTML += `<p><strong>Média das idades maiores ou iguais a ${idadeMinima2}:</strong> ${mediaIdadesAcimaDe(idades, idadeMinima2).toFixed(2)}</p>`;
});
