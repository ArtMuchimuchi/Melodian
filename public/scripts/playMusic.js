let playButton = document.querySelectorAll(".play-code__play-button");
let coverImage = document.querySelectorAll(".play-code__music-cover-image");
let musicName = document.querySelectorAll(".play-code__music-name");
let artist = document.querySelectorAll(".play-code__artist");
let musicLength = document.querySelectorAll(".show-duration span");
let audioForLoad = [];
let audioController = new Audio();

let ifPlaying = false;

let ifMute = false;

let volume = 0.5;

let audioControllerPlayButton = document.querySelector(".audio-controller__controls__control-play__button__play-button img");

let audioControllerTimeline = document.querySelector(".audio-controller__controls__control-play__timeline__range");

let audioControllerVolume = document.querySelector(".audio-controller__controls__control-volume__range__range-bar");

let audioControllerMute = document.querySelector(".audio-controller__controls__control-volume__button img");

audioController.ontimeupdate = changeTimelinePosition;

audioController.onended = musicEnded;

audioControllerTimeline.addEventListener("change", changeSeek);

audioControllerVolume.addEventListener("change", changeVolume);

audioControllerMute.addEventListener("click", toggleMute);

audioController.volume = volume;
audioControllerVolume.style.backgroundSize = `${audioControllerVolume.value}% 100%`;

for(let i=0;i<playButton.length;i++) {
    let audioControllerImage = document.querySelector(".audio-controller__cover-image"); 
    let audioControllerMusicName = document.querySelector(".audio-controller__info__music-name");
    let audioControllerArtist = document.querySelector(".audio-controller__info__artist");
    let audioControllerDuration = document.querySelector(".audio-controller__controls__control-play__timeline__remain-time");

    audioForLoad[i] = new Audio();
    audioForLoad[i].src = playButton[i].getAttribute("music-source");
    audioForLoad[i].preload = "metadata";

    audioForLoad[i].onloadedmetadata = ()=>{
        if(musicLength[i].textContent==="1") {
            musicLength[i].textContent = convertTime2(audioForLoad[i].duration);
        }
        else {
            musicLength[i].textContent = convertTime(audioForLoad[i].duration);
        }
    }

    playButton[i].onclick = () => {
        audioControllerTimeline.disabled = false;
        audioControllerImage.src = coverImage[i].getAttribute("src");
        audioController.preload = "metadata";
        audioController.onloadedmetadata = ()=>{
            audioControllerDuration.textContent = convertTime(audioController.duration);
        }
        audioController.src = playButton[i].getAttribute("music-source")
        audioControllerMusicName.innerHTML = musicName[i].innerHTML;
        audioControllerArtist.innerHTML = artist[i].innerHTML;
        audioController.play();
        ifPlaying = true;
        switchPicture("pause");
        audioControllerPlayButton.addEventListener("click", togglePlay);
    }
}

function switchPicture (switchTarget) {
    if(switchTarget==="pause") {
        audioControllerPlayButton.src = "/images/icons/pause.png";
    }
    else if(switchTarget==="play"){
        audioControllerPlayButton.src = "/images/icons/play-button.png";
    }
}

function togglePlay () {
    if(ifPlaying) {
        audioController.pause();
        switchPicture("play");
        ifPlaying = false;
    }
    else {
        audioController.play();
        switchPicture("pause");
        ifPlaying = true;
    }
}

function changeTimelinePosition () {
    const percentagePosition = (100*audioController.currentTime) / audioController.duration;
    audioControllerTimeline.style.backgroundSize = `${percentagePosition}% 100%`;
    audioControllerTimeline.value = percentagePosition;

    let audioControllerCurrent = document.querySelector(".audio-controller__controls__control-play__timeline__current-time");
    audioControllerCurrent.innerHTML = convertTime(audioController.currentTime);
}

function changeSeek () {
    const time = (audioControllerTimeline.value * audioController.duration) / 100;
    audioController.currentTime = time;

    let audioControllerCurrent = document.querySelector(".audio-controller__controls__control-play__timeline__current-time");
    audioControllerCurrent.innerHTML = convertTime(time);
}

function convertTime (time) {
    let durationMin = Math.floor(Math.floor(time)/60);
    let durationSec =  Math.floor(time) - durationMin*60;
    return durationMin + ":" + durationSec.toLocaleString('en-us', {minimumIntegerDigits:2, useGrouping:false});
}

function convertTime2 (time) {
    let durationMin = Math.floor(Math.floor(time)/60);
    let durationSec =  Math.floor(time) - durationMin*60;
    return durationMin + " min " + durationSec.toLocaleString('en-us', {minimumIntegerDigits:2, useGrouping:false}) + " sec";
}

function musicEnded () {
    switchPicture("play");
    ifPlaying = false;
}

function changeVolume () {
    const newVolume = audioControllerVolume.value/100;
    audioController.volume = newVolume;
    volume = newVolume;

    audioControllerVolume.style.backgroundSize = `${audioControllerVolume.value}% 100%`;

    if(ifMute===true) {
        toggleMute();
    }
}

function toggleMute () {
    if(ifMute) {
        audioController.muted = false;
        ifMute = false;
        audioControllerMute.src = "/images/icons/volume.png";

        audioControllerVolume.value = volume*100;
        audioControllerVolume.style.backgroundSize = `${audioControllerVolume.value}% 100%`;
    }
    else {
        audioController.muted = true;
        ifMute = true;
        audioControllerMute.src = "/images/icons/mute.png";

        audioControllerVolume.value = 0;
        audioControllerVolume.style.backgroundSize = `${audioControllerVolume.value}% 100%`;
    }
}
