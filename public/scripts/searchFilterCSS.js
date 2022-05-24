let buttonMusic = document.querySelector(".display-music-filter__music");
let buttonArtist = document.querySelector(".display-music-filter__artist");

let musicDetail = document.querySelector(".display-music-header");

let musicContent = document.querySelector(".display-music-container");
let artistContent = document.querySelector(".display-artist-container");


buttonMusic.onclick = () => {
    buttonMusic.classList.toggle("display-music-filter__element--unselected", false);
    buttonArtist.classList.toggle("display-music-filter__element--unselected", true);
    musicContent.classList.toggle("hidden", false);
    artistContent.classList.toggle("hidden", true);
    musicDetail.classList.toggle("hidden", false);
}

buttonArtist.onclick = () => {
    buttonMusic.classList.toggle("display-music-filter__element--unselected", true);
    buttonArtist.classList.toggle("display-music-filter__element--unselected", false);
    musicContent.classList.toggle("hidden",true);
    artistContent.classList.toggle("hidden",false);
    musicDetail.classList.toggle("hidden", true);
}
