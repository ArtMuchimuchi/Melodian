function resetHomeButton () {
    let home_button = document.querySelector("#home-button");
    home_button.classList.replace("nav-bar--left__button-list__button--highlight","nav-bar--left__button-list__button");
}

if(window.location.pathname.match(/profile/)){
    resetHomeButton();

    let profile_button = document.querySelector("#profile-button");
    profile_button.classList.replace("nav-bar--left__button-list__button","nav-bar--left__button-list__button--highlight");
}
else if(window.location.pathname.match(/music/)) {
    if(window.location.pathname.match(/new/)) {
        resetHomeButton();

        let add_music_button = document.querySelector("#add-music-button");
       add_music_button.classList.replace("nav-bar--left__button-list__button","nav-bar--left__button-list__button--highlight");
    }
}
else if(window.location.pathname.match(/artist/)) {
    if(window.location.pathname.match(/new/)) {
        resetHomeButton();

        let add_artist_button = document.querySelector("#add-artist-button");
        add_artist_button.classList.replace("nav-bar--left__button-list__button","nav-bar--left__button-list__button--highlight");
    }
}
else if(window.location.pathname.match(/deleteUser/)) {
    resetHomeButton();

    let delete_user_button = document.querySelector("#delete-user-button");
    delete_user_button.classList.replace("nav-bar--left__button-list__button","nav-bar--left__button-list__button--highlight");
    
}
