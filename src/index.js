import './styles.css';

const displayOfTimerValuesEl = document.querySelectorAll('.value');
const timerBox = document.querySelector('.timer');

timerBox.insertAdjacentHTML(
  'beforebegin',
  '<p class="description-of-events">Until the birthday of your beloved father</p>',
);

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  Timer = setInterval(() => {
    const takingAwayTime = this.targetDate - Date.now();
    const getTime = this.getTimerCalculation(takingAwayTime);

    this.getDrawingNumbers(getTime);

    this.clearsTheTimerAtTheEnd(takingAwayTime);
  }, 1000);

  getTimerCalculation(time) {
    const days = this.AddZero(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.AddZero(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.AddZero(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const secs = this.AddZero(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  AddZero(value) {
    return String(value).padStart(2, '0');
  }

  getDrawingNumbers({ days, hours, mins, secs }) {
    displayOfTimerValuesEl[0].textContent = days;
    displayOfTimerValuesEl[1].textContent = hours;
    displayOfTimerValuesEl[2].textContent = mins;
    displayOfTimerValuesEl[3].textContent = secs;
  }

  clearsTheTimerAtTheEnd(time) {
    if (time < 0) {
      clearInterval(this.Timer);
      timerBox.textContent = 'happy birthday beloved father ^_^';
      const endOfEvent = document.querySelector('.description-of-events');
      endOfEvent.remove();
    }
  }
}

const timerValue = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('September 12, 2021'),
});
