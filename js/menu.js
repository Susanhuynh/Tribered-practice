var myNav = document.getElementById('navigation');
var myImg = document.getElementsByClassName('nav-logo')[0].getElementsByTagName('img')[0];

window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 20 ) {
        myNav.classList.add("scrolled");
        myImg.classList.add("changed");
    } 
    else {
        myNav.classList.remove("scrolled");
        myImg.classList.remove("changed");
    }
};