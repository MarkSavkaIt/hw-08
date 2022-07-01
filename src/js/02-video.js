import Vimeo from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe, { autoplay: true });

document.addEventListener('DOMContentLoaded', function (event) {
  const s = localStorage.getItem('s');
  console.log('localStorage: ', s);

  player.play(); // not work, GOOGLE rules

  if (s) player.setCurrentTime(s);
});

setInterval(() => {
  player
    .getCurrentTime()
    .then(function (seconds) {
      // seconds = the current playback position
      localStorage.setItem('s', seconds);
      console.log(seconds);
    })
    .catch(function (error) {
      console.log('getCurrentTime error', error);
      // an error occurred
    });
}, 1000);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
