window.onscroll = function() {
    // Get the navbar
    var topnav = document.querySelector('.topnav');

    // Get the offset position of the navbar
    var sticky = topnav.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position.
    if (window.pageYOffset >= sticky) {
        topnav.classList.add("sticky");
    } else {
        topnav.classList.remove("sticky");
    }
};