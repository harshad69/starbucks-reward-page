window.onscroll = function() {myFunction()};

var header = document.getElementById("container2");
var sticky = header.offsetTop;
var navbar = document.getElementById("container1");
function myFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.add("sticky"); 
    }
}

// get your fav for free
function switchVisible() {
    if (document.getElementById('div1')) {

        if (document.getElementById('div1').style.display == 'none') {
            document.getElementById('div1').style.display = 'block';
            document.getElementById('div2').style.display = 'none';
        }
        else {
            document.getElementById('div1').style.display = 'none';
            document.getElementById('div2').style.display = 'block';
        }
    }
}