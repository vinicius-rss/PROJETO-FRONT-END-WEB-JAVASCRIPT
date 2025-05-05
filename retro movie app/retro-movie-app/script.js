const filmesContainer = document.getElementById("filmes-container");
const apiKey = "402cb9136de8b1d45e1b9eda1ff4dcac"; 
const url = `https://api.themoviedb.org/3/movie/popular?language=pt-BR&api_key=${apiKey}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    const filmes = data.results.slice(0, 10);
    filmes.forEach(filme => {
      const card = document.createElement("div");
      card.className = "filme";

      const posterUrl = `https://image.tmdb.org/t/p/w300${filme.poster_path}`;

      card.innerHTML = `
        <img src="${posterUrl}" alt="Capa de ${filme.title}">
        <h2>${filme.title}</h2>
        <p><strong>Nota:</strong> ${filme.vote_average}</p>
        <p><strong>Idioma:</strong> ${filme.original_language.toUpperCase()}</p>
        <p><strong>Popularidade:</strong> ${filme.popularity}</p>
      `;

      filmesContainer.appendChild(card);
    });
  })
  .catch(err => console.error("Erro ao buscar os filmes:", err));
