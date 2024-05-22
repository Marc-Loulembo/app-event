import createEvents from '../assets/anniversaire.jpg';
import readEvents from '../assets/soirée.jpg';

class HomeView {
  render() {
    return `
      <div class="parent">
        <div class="cards createEvents">
        <div class="img">
          <img src="${createEvents}" alt="createEvents">
        </div>
          <h2>Créer un évennement</h2>
        <a class="a" href="/createEvent">
          <span class="span-mother">
            <span>C</span>
            <span>R</span>
            <span>E</span>
            <span>E</span>
            <span>R</span>
          </span>
          <span class="span-mother2">
            <span>C</span>
            <span>R</span>
            <span>E</span>
            <span>E</span>
            <span>R</span>
          </span>
          
          </a>
          
        </div>

        <div class="cards readEvents">
        <div class="img">
          <img src="${readEvents}" alt="readEvents">
        </div>
          <h2>Voir les évennements</h2>
          <a class="a" href="/calendarView">
          <span class="span-mother">
          <span>E</span>
          <span>V</span>
          <span>E</span>
          <span>N</span>
          <span>T</span>
          <span>S</span>
          </span>
          <span class="span-mother2">
            <span>E</span>
            <span>V</span>
            <span>E</span>
            <span>N</span>
            <span>T</span>
            <span>S</span>
          </span>
          
          </a>
        </div>
      </div>
    `;
  }

  run() {
    const appElement = document.getElementById('app');
    appElement.innerHTML = this.render();
  }
}

export default HomeView;
