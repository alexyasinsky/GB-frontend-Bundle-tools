import {DateTime} from "./luxon.js";
import {formatError} from "./utils.js";

export function diffDates(firstDate, secondDate) {
  firstDate = DateTime.fromISO(firstDate);
  secondDate = DateTime.fromISO(secondDate);
  if (firstDate > secondDate)
    secondDate = [firstDate, firstDate = secondDate][0];
  return secondDate.diff(firstDate, ['years', 'months', 'days']).toObject();
}

export const diffToHtml = diff => `
    <span>
        ${diff.years ? 'Лет: ' + diff.years : ''} ${diff.months ? 'Месяцев: ' + diff.months : ''} ${diff.days ? 'Дней: ' + diff.days : ''}
    </span> 
`;

export function handleCalcDates(event, resultBox) {
  resultBox.innerHTML = "";
  event.preventDefault();
  let {firstDate, secondDate} = event.target.elements;
  firstDate = firstDate.value;
  secondDate = secondDate.value;

  if (firstDate && secondDate) {
    const diff = diffDates(firstDate, secondDate);
    resultBox.innerHTML = diffToHtml(diff);
  } else resultBox.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля");
}