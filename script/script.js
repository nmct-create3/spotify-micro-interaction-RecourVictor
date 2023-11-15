

const listenToToggle = function () {
    // document.querySelector(".js-toggle").addEventListener("click", function() {
    //     document.querySelector(".js-toggle").classList.toggle("added");
    // });

    const toggle = document.querySelector(".js-toggle");
    toggle.addEventListener("click", function() {
        toggle.classList.toggle("added");
    });
}

const init = function () {
    console.log('script loaded');
    listenToToggle();

}

init();