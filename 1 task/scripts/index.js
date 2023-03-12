// Импорт всех необходимых переменных
const inputEl = document.querySelector('.time-placeholder__input');
const buttonEl = document.querySelector('.time-placeholder__button');
const timerHour = document.querySelector('.timer-item__time_hour');
const textHour = document.querySelector('.timer-item__text_hour');
const timerMinutes = document.querySelector('.timer-item__time_minutes');
const textMinutes = document.querySelector('.timer-item__text_minutes');
const timerSeconds = document.querySelector('.timer-item__time_seconds');
const textSeconds = document.querySelector('.timer-item__text_seconds');
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    return (seconds) => {
      const timer = setInterval(() => {
        // Очистка интервала
        if (seconds <= 0) {
          clearInterval(timer);
          timerHour.textContent = 'hh';
          timerMinutes.textContent = 'mm';
          timerSeconds.textContent = 'ss';
        }
        // Если требуется повторно запустить таймер
        buttonEl.addEventListener('click', () => {
          clearInterval(timer);
        })
        // Расчет секунд, минут, часов
        let sec = Math.floor(seconds % 60);
        let min = Math.floor(seconds / 60 % 60);
        let hours = Math.floor(seconds / 60 / 60 % 24);
        // Добавить 0 перед цифрой, если значение меньше 10
        const zeroTimer = (zero) => {
          if (zero < 10 && zero >= 0) {
            return `0${zero}`
          }
          return zero;
        }
        // Расчет для точного наименования времени
        const titleDeclension = (time, title) => {
          return title[(time % 100 > 4 && time % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(time % 10 < 5) ? time % 10 : 5]];
        };
        // Добавление текста и цифр
        timerHour.textContent = `${zeroTimer(hours)}`;
        timerMinutes.textContent = `${zeroTimer(min)}`;
        timerSeconds.textContent = `${zeroTimer(sec)}`;
        textHour.textContent = titleDeclension(hours, ['час', 'часа', 'часов']);
        textMinutes.textContent = titleDeclension(min, ['минута', 'минуты', 'минут']);
        textSeconds.textContent = titleDeclension(sec, ['секунда', 'секунды', 'секунд']);
        --seconds;
      }, 1000)
  };
};

const animateTimer = createTimerAnimator();
// проверка инпута на наличие букв, в инпут должны вводиться только цифры
inputEl.addEventListener('input', (e) => {
  e.target.value = e.target.value.replace(/\D/g, "")
});
// Запуск таймера и очистка инпута
buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  if (seconds > 0) {
    timerHour.textContent = 'hh';
    timerMinutes.textContent = 'mm';
    timerSeconds.textContent = 'ss';
    animateTimer(seconds);
  }
  inputEl.value = '';
});
