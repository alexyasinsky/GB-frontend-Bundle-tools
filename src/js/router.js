export function routerButtonHandler(route, pages) {
  switch (route) {
    case 'dateCalc':
      pages.dateCalcForm.style.display = 'block';
      pages.timerForm.style.display = 'none';
      break;
    case 'timer':
      pages.dateCalcForm.style.display = 'none';
      pages.timerForm.style.display = 'block';
      break;
  }
}