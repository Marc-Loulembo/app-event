class Calendar {
  constructor() {
    let calendarEl;
    this.calendarEl = document.querySelector('#app');
    if (calendarEl && window.FullCalendar) {
      const calendar = new window.FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
      });
      calendar.render();
    }
    this.run();
  }

  render() {
    return `
    
    `;
  }

  run() {
    this.calendarEl.innerHTML = this.render();
  }
}

export default Calendar;
