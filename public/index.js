/* hover over images */

$(document).ready(function() {
    $('#ezpresso').hover(function() {
        $(this).css({opacity: ".09", transitionDuration: "0.5s"})
    }, function () {
        $(this).css({opacity: "1" , transitionDuration: "0.5s"});
    });
})

$(document).ready(function() {
    $('#emmanuel').hover(function() {
        $(this).css({opacity: ".09", transitionDuration: "0.5s"})
    }, function () {
        $(this).css({opacity: "1" , transitionDuration: "0.5s"});
    });
})

$(document).ready(function() {
    $('#CovidCoop').hover(function() {
        $(this).css({opacity: ".09", transitionDuration: "0.5s"})
    }, function () {
        $(this).css({opacity: "1", transitionDuration: "0.5s"});
    });
})

// Moble Navbar Function 

// function navDropDown() {
//     var navDrop = document.getElementById("myLinks");
//     if (navDrop.style.display === "block") {
//       navDrop.style.display = "none";
//     } else {
//       navDrop.style.display = "block";
//     }
//   }

