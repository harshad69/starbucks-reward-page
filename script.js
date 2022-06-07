// window.onscroll = function() {myFunction()};

// var header = document.getElementById("container2");
// var sticky = header.offsetTop;
// var navbar = document.getElementById("container1");
// function myFunction() {
//     if (window.scrollY >= sticky) {
//         navbar.classList.add("sticky");
//     }
//     else {
//         navbar.classList.add("sticky"); 
//     }
// }

// get your fav for free
var divs = ["div1","div2","div3","div4","div5"];
var visibleId = null;
function show(id) {
    if(visibleId !== id) {
        visibleId = id;
    } 
    hide();
}
function hide() {
    var div, i, id;
    for(i = 0; i < divs.length; i++) {
        id = divs[i];
        div = document.getElementById(id);
        if(visibleId === id) {
        div.style.display = "block";
        } else {
        div.style.display = "none";
        }
    }
} 