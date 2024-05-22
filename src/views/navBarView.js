import img from '../assets/myevents-remove.png';

class NavBarView {
  render() {
    return `
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <div class="logo">
            <img src="${img}" alt="logo">
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navParent" id="">
            <ul class="navbar-nav">
              <li class="">
                <a class="" href="/LogInController">Se connecter</a>
              </li>
              <li class="">
                <a class="" href="/RegisterController">S'inscrire</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    `;
  }

  run() {
    const navElement = document.querySelector('.nav');
    navElement.innerHTML = this.render();
  }
}

export default NavBarView;
