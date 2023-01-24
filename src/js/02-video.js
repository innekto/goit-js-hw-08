import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const currentTime = 'videoplayer-current-time';
// console.log(localStorage)
function onPlay(time) {
    localStorage.setItem(currentTime, time.seconds);

}
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(currentTime));


