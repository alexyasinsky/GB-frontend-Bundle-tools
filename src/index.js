import {diffDates, diffToHtml, handleCalcDates} from "./js/datecalc.js";
import {routerButtonHandler} from "./js/router.js";

const routerButtons = document.querySelectorAll('.routerButton');

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");



const timerForm = document.getElementById('timer');
const timerResult = document.getElementById('timer__result');

dateCalcForm.addEventListener("submit", (e)=> {
  handleCalcDates(e, dateCalcResult);
});

routerButtons.forEach( button => {
  button.addEventListener('click', (e)=> {
    const pages = {dateCalcForm, timerForm};
    routerButtonHandler(e.target.value, pages);
  })
});

let timerId;

timerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let action = document.activeElement.value;
  switch (action) {
    case 'start':
      timerResult.innerHTML = '';
      let formData = new FormData(timerForm);
      let time = +formData.get('time');
      timerId = setInterval(() => {
        timerResult.innerHTML = `${time}`;
        time -= 1;
      }, 1000);
      setTimeout(()=> {
        const sound = new Howl({
          src: ['bell-sound.mp3']
        });
        sound.play();
        clearInterval(timerId);
      }, time*1000+1000);
      break;
    case 'stop':
      clearInterval(timerId);
      timerResult.innerHTML = '';

      break;
    default:
      break;
  }
});


