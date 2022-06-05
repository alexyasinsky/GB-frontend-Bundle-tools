import {handleCalcDates} from "./js/datecalc.js";
import {routerButtonHandler} from "./js/router.js";
import handleTimer from './js/timer.js';
import './styles/style.scss';

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", (e)=> {
  handleCalcDates(e, dateCalcResult);
});

const routerButtons = document.querySelectorAll('.routerButton');

routerButtons.forEach( button => {
  button.addEventListener('click', (e)=> {
    const pages = {dateCalcForm, timerForm};
    routerButtonHandler(e.target.value, pages);
  })
});

const timerForm = document.getElementById('timer');
const timerResult = document.getElementById('timer__result');

timerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let action = document.activeElement.value;
  handleTimer(timerForm, action, timerResult);
});


