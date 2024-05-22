import NavBarView from '../views/navBarView';
// import initializeCalendar from '../views/calendarView';
import HomeView from '../views/homeView';
import CreateEvent from '../views/createEvent';

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
