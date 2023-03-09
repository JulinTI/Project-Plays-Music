//Variables
let musics = [
    {
        title: 'Project', artist: 'Julio Cesar', src: 'music/Emotional Mess - Amy Lynn & the Honey Men.mp3', img: 'images/birk-enwald-UiQAb2rzL40-unsplash.jpg'
    },

    {
        title: 'Project', artist: 'Julio Cesar', src: 'music/Ice & Fire - King Canyon.mp3', img: 'images/el-guseinov-2mY7P8wjj80-unsplash.jpg'
    },

    {
        title: 'Project', artist: 'Julio Cesar', src: 'music/Mulholland - King Canyon.mp3', img: 'images/zhenyu-luo-xd0GQoS-oJM-unsplash.jpg'
    }
];

let music = document.querySelector('audio');
let image = document.querySelector('img');
let musicName = document.querySelector('.description h2');
let artistName = document.querySelector('.description i');
let musicDuration = document.querySelector('.end');
let indexMusic = 0;

renderMusic(indexMusic);

//events

document.querySelector('.botao-play').addEventListener('click', playMusic);
document.querySelector('.botao-pause').addEventListener('click', pauseMusic);
music.addEventListener('timeupdate', refreshBar);
musicDuration.textContent = secondsToMinutes(Math.floor(music.duration));
document.querySelector('.turnBack').addEventListener('click', () => {
    indexMusic--;
    if (indexMusic < 0) {
        indexMusic = 2;

    }
    renderMusic(indexMusic);
});
document.querySelector('.advance').addEventListener('click', () => {
    indexMusic++;
    if (indexMusic > 2) {
        indexMusic = 0;

    }
    renderMusic(indexMusic);
});



//Functions

function renderMusic(index) {
    music.setAttribute('src', musics[index].src);
    music.addEventListener('loadeddata', () => {
        musicName.textContent = musics[index].title;
        artistName.textContent = musics[index].artist;
        image.src = musics[index].img;
        musicDuration.textContent = secondsToMinutes(Math.floor(music.duration));

    });

}


function playMusic() {
    music.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';

};


function pauseMusic() {
    music.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';

}

function refreshBar() {
    let bar = document.querySelector('progress');
    bar.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let musicTime = document.querySelector('.start');
    musicTime.textContent = secondsToMinutes(Math.floor(music.currentTime));

}

function secondsToMinutes(seconds) {
    let minuteField = Math.floor(seconds / 60)
    let secondsField = seconds % 60;
    if (secondsField < 10) {
        secondsField = '0' + secondsField;
    }

    return minuteField + ':' + secondsField;

}

