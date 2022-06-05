let timerIntervalId;
let timerEndId;

function getBellSound() {
  const sound = new Howl({
    src: ['bell-sound.mp3']
  });
  return sound.play();
}

export default function (form, action, resultBox) {
  switch (action) {
    case 'start':
      resultBox.innerHTML = '';
      let formData = new FormData(form);
      let time = +formData.get('time');
      timerIntervalId = setInterval(() => {
        resultBox.innerHTML = `${time}`;
        time -= 1;
      }, 1000);
      timerEndId = setTimeout(()=> {
        getBellSound();
        clearInterval(timerIntervalId);
      }, time*1000+1000);
      break;
    case 'stop':
      clearInterval(timerIntervalId);
      clearTimeout(timerEndId);
      resultBox.innerHTML = '';
      break;
    default:
      break;
  }
}