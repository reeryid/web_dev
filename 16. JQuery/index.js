// Jquery add Class
$("p").addClass("black_mamba")

// Jquery change CSS
$("h1").css("color","red")

$("p").html("fck this shit, indeed jews r problem");

//Jquery event lister
$("button").click(function (e) { 
    //animation
    $("h1").slideToggle();
});
$(document).keypress(function (e) { 
    $("button").html(e.key);
});

$("h1").append("<i> is this even working</i>");
// $(selector).prepend(content);
// $(selector).after(content);
// $(selector).before(content);
// $(selector).remove();