import { planets } from '../config/planets.js';

export class Menu {
  constructor() {
    this.container = document.querySelector('.planet-menu');
    this.init();
  }

  init() {
    this.renderPlanets();
    this.addEventListeners();
  }

  renderPlanets() {
    Object.entries(planets).forEach(([key, planet]) => {
      const item = this.createPlanetItem(key, planet);
      this.container.appendChild(item);
    });
  }

  createPlanetItem(key, planet) {
    const item = document.createElement('div');
    item.className = 'planet-item';
    item.dataset.planet = key;
    
    item.innerHTML = `
      <div class="planet-preview" style="background-color: ${planet.color}"></div>
      <div class="planet-info">
        <span class="planet-name">${planet.name}</span>
        <span class="planet-distance">${planet.distance}</span>
      </div>
    `;
    
    return item;
  }

  addEventListeners() {
    this.container.addEventListener('click', (e) => {
      const item = e.target.closest('.planet-item');
      if (item) {
        document.dispatchEvent(new CustomEvent('planetSelected', {
          detail: { planet: item.dataset.planet }
        }));
      }
    });
  }
}