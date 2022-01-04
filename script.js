window.onscroll = function() {myFunction()};

var header = document.getElementById("container2");
var sticky = header.offsetTop;
var navbar = document.getElementById("container1");
function myFunction() {
    if (window.scrollY >= sticky) {
        header.classList.add("sticky");
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.add("sticky"); 
        header.classList.remove("sticky");
    }
}