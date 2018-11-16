(() => {
// get a refernece to the lottie container

const preloader = document.querySelector('.preloader');

let preloadAnim = bodymovin.loadAnimation({
    wrapper : preloader,
    animType : 'svg',
    loop: false,
    autoplay : false,
    path : 'data/download_icon.json'
});

function playAnimation(){
    preloadAnim.play();
}


preloader.addEventListener("click", playAnimation);



})();