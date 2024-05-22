import Router from './Router';
import RegisterController from './controllers/RegisterController';
import LogInController from './controllers/LogInController';
import Home from './controllers/Home';
import CreateEvent from './views/createEvent';
import Calendar from './views/calendarView';

import './index.scss';

const routes = [
  {
    url: '/',
    controller: Home
  },
  {
    url: '/RegisterController',
    controller: RegisterController
  },
  {
    url: '/LogInController',
    controller: LogInController
  },
  {
    url: '/createEvent',
    controller: CreateEvent
  },
  {
    url: '/calendarView',
    controller: Calendar
  }
];

new Router(routes);
