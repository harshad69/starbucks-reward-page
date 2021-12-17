window.onscroll = function() {myFunction()};

var header = document.getElementById('container1')
var sticky = container1.offsetTop;

function myFunction() {
    if (window.pageYoffset > sticky) {
        header.classList.add('sticky');
    }
    else {
        header.classList.remove('sticky');
    }
}