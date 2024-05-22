import mariage from '../assets/mariage.jpg';
import birthday from '../assets/anniversaire.jpg';
import viedejeunefille from '../assets/viedejeunefille.jpg';

class CreateEvent {
  render() {
    return `
      <div class="cards-parent">
        <div class="card">
          <div class="img">
            <img src="${mariage}" alt="mariage">
          </div>
            <div class="px-4 py-4">
            <div class="font-bold text-xl mb-2">Mariage</div>
            <a href="/addEvents" class="a">
              Ajouter
            </a>
          </div>
        </div>

        <div class="card">
          <div class="img">
            <img src="${birthday}" alt="birthday">
          </div>
            <div class="px-4 py-4">
            <div class="font-bold text-xl mb-2">Anniversaire</div>
            <a href="/addEvents" class="a">
              Ajouter
            </a>
          </div>
        </div>

        <div class="card">
          <div class="img">
            <img src="${viedejeunefille}" alt="vie de jeune fille">
          </div>
            <div class="px-4 py-4">
            <div class="font-bold text-xl mb-2">Enterrement vie de jeune fille</div>
            <a href="/addEvents" class="a">
              Ajouter
            </a>
          </div>
        </div>
      </div>
    `;
  }

  run() {
    const createEventForm = document.querySelector('#app');
    createEventForm.innerHTML = this.render();
  }
}

export default CreateEvent;
