import axios from 'axios';
import './style.css';

// URL del API de Rick and Morty para personajes, ubicaciones y episodios
const charactersEndpoint = "https://rickandmortyapi.com/api/character";
const locationsEndpoint = "https://rickandmortyapi.com/api/location";
const episodesEndpoint = "https://rickandmortyapi.com/api/episode";

// Función para obtener y mostrar los personajes
const getCharacters = async () => {
  try {
    const response = await axios.get(charactersEndpoint);
    const characters = response.data.results;

    const container = document.getElementById('character-container');

    if (container) {
      container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos datos

      characters.forEach(character => {
        let statusClass;
        switch (character.status.toLowerCase()) {
          case 'alive':
            statusClass = 'status-alive';
            break;
          case 'dead':
            statusClass = 'status-dead';
            break;
          case 'unknown':
            statusClass = 'status-unknown';
            break;
          default:
            statusClass = '';
        }

        container.innerHTML += `
          <div class="card">
            <img src="${character.image}" alt="${character.name}" class="card-image">
            <h2 class="card-title">${character.name}</h2>
            <p class="card-species">${character.species}</p>
            <p class="card-status ${statusClass}">${character.status}</p>
          </div>
        `;
      });
    } else {
      console.error('Contenedor para personajes no encontrado');
    }
  } catch (error) {
    console.error('Error fetching characters:', error);
  }
};

// Función para obtener y mostrar las ubicaciones
const getLocations = async () => {
  try {
    const response = await axios.get(locationsEndpoint);
    const locations = response.data.results;

    const container = document.getElementById('location-container');

    if (container) {
      container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos datos

      locations.forEach(location => {
        container.innerHTML += `
          <div class="card">
            <h2 class="card-title">${location.name}</h2>
            <p class="card-type">Type: ${location.type}</p>
            <p class="card-dimension">Dimension: ${location.dimension}</p>
            <p class="card-residents">Residents: ${location.residents.length}</p>
          </div>
        `;
      });
    } else {
      console.error('Contenedor para ubicaciones no encontrado');
    }
  } catch (error) {
    console.error('Error fetching locations:', error);
  }
};

// Función para obtener y mostrar los episodios
const getEpisodes = async () => {
  try {
    const response = await axios.get(episodesEndpoint);
    const episodes = response.data.results;

    const container = document.getElementById('episode-container');

    if (container) {
      container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos datos

      episodes.forEach(episode => {
        container.innerHTML += `
          <div class="card">
            <h2 class="card-title">${episode.name}</h2>
            <p class="card-episode">Episode: ${episode.episode}</p>
            <p class="card-air-date">Air Date: ${episode.air_date}</p>
          </div>
        `;
      });
    } else {
      console.error('Contenedor para episodios no encontrado');
    }
  } catch (error) {
    console.error('Error fetching episodes:', error);
  }
};

// Asegúrate de que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', () => {
  getCharacters();
  getLocations();
  getEpisodes();
});
