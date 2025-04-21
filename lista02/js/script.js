document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("filtro");
    const resultado = document.getElementById("resultado");
  
    fetch("students.json")
      .then(response => response.json())
      .then(estudantes => {
        select.addEventListener("change", () => {
          const escolha = select.value;
          let texto = "";
  
          const formatarEstudante = (e) => {
            const media = e.notaBim1 + e.notaBim2;
            return `${e.nome}: ${e.notaBim1.toFixed(1)} (Bimestre 1) e ${e.notaBim2.toFixed(1)} (Bimestre 2) = ${media.toFixed(1)};`;
          };
  
          switch (escolha) {
            case "todos":
              texto = estudantes.map(formatarEstudante).join("<br><br>");
              break;
          
            case "homens":
              texto = estudantes.filter(e => e.sexo === "M").map(formatarEstudante).join("<br><br>");
              break;
          
            case "mulheres":
              texto = estudantes.filter(e => e.sexo === "F").map(formatarEstudante).join("<br><br>");
              break;
          
            case "aprovados":
              texto = estudantes.filter(e => e.notaBim1 + e.notaBim2 >= 60).map(formatarEstudante).join("<br><br>");
              break;
          
            case "reprovados":
              texto = estudantes.filter(e => e.notaBim1 + e.notaBim2 < 60).map(formatarEstudante).join("<br><br>");
              break;
          
  
            case "todosAprovados":
              texto = estudantes.every(e => e.notaBim1 + e.notaBim2 >= 60)
                ? "Sim, todos os alunos foram aprovados."
                : "Não, nem todos os alunos foram aprovados.";
              break;
  
            case "mediaTurma":
              const media = estudantes
                .map(e => e.notaBim1 + e.notaBim2)
                .reduce((total, atual) => total + atual, 0) / estudantes.length;
              texto = `A média da turma é ${media.toFixed(2)}.`;
              break;
  
            default:
              texto = "";
          }
  
          resultado.innerHTML = texto;
        });
      })
      .catch(error => {
        resultado.innerHTML = "Erro ao carregar os dados.";
        console.error("Erro ao carregar os dados:", error);
      });
  });
  