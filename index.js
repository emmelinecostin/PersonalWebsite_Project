/* NavBar Function */

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


