/* NavBar Function */

$("#sec-1").click(function() {
    $('html, body').animate({
        scrollTop: 
        $("#one").offset().top-100000
    }, 1000);
 return false;
});

$("#sec-2").click(function() {
    $('html, body') .animate({
        scrollTop:        $("#two").offset().top-112
    }, 1000);
 return false;
});

$("#sec-3").click(function() {
    $(' html,body') .animate({
        scrollTop:        $("#three").offset().top-112
    }, 1000);
 return false;
});

$("#sec-4").click(function() {
 $(this).addClass("active");
    $('html,body ') .animate({
        scrollTop:        $("#four").offset().top-112
    }, 1000);
 return false;
});
/* IMAGES HOVER FUNCTION */

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




/* AJAX */

function loadRepo() {
    const xhttp = new XMLHttpRequest(); 
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            results = JSON.parse(this.responseText);
            results.forEach(repo=>{
                document.getElementById("repo").innerHTML+="<li>"+repo.name+"</li>";
            })
          //  document.getElementById("repo").innerHTML = results[0].name;
        }
    }
    xhttp.open("GET", "https://api.github.com/users/EMMELINECOSTIN/repos", true);
    xhttp.send();
}


