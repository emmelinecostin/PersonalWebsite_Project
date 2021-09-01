/* ICONS HOVER FUNCTION */

$(document).ready(function() {
    $('.facebook').hover(function() {
        $(this).css({height:"70px", width: "70px"})
    }, function () {
        $(this).css({height:"50px", width:"50px"});
    });
})

$(document).ready(function() {
    $('.instagram').hover(function() {
        $(this).css({height:"70px", width: "70px"})
    }, function () {
        $(this).css({height:"50px", width:"50px"});
    });
})

$(document).ready(function() {
    $('.github').hover(function() {
        $(this).css({height:"70px", width: "70px"})
    }, function () {
        $(this).css({height:"40px", width:"40px"});
    });
})

$(document).ready(function() {
    $('.linkedin').hover(function() {
        $(this).css({height:"70px", width: "70px"})
    }, function () {
        $(this).css({height:"50px", width:"50px"});
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


