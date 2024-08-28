import './style.css';

// URL del API de Rick and Morty
const endpoint = "https://rickandmortyapi.com/api/character";

// Función para obtener y mostrar los personajes
const getCharacter = async () => {
  try {
    // Obtener datos de la API y convertir a JSON
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const characters = data.results; // Asegurarse de que `data.results` es el array de personajes

    // Obtener el contenedor donde se mostrarán los personajes
    const container = document.getElementById('character-container');

    // Comprobar si el contenedor existe
    if (container) {
      // Construir el HTML para cada personaje y agregar al contenedor
      characters.forEach(character => {
        container.innerHTML += `
          <div class="card">
            <img src="${character.image}" alt="${character.name}" class="card-image">
            <h2 class="card-title">${character.name}</h2>
            <p class="card-species">${character.species}</p>
            <p class="card-status">${character.status}</p>
          </div>
        `;
      });
    } else {
      console.error('Contenedor no encontrado');
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Llamar a la función para ejecutar
getCharacter();
