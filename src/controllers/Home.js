import NavBarView from '../views/navBarView';
import CreateEvent from '../views/createEvent';
import HomeView from '../views/homeView';

class Home {
  constructor() {
    this.navBarView = new NavBarView();
    this.CreateEvent = new CreateEvent();
    this.HomeView = new HomeView();
    this.run();
  }

  run() {
    this.navBarView.run();
    this.CreateEvent.run();
    this.HomeView.run();
  }
}

export default Home;
