$("#click").click(function() {
    var name = prompt("si o no??");

    if (name === "si") {
        $(".validacion").text("esta bien, pasa");
    } else {
        $(".validacion").text("no podes pasar, andate a tu casa");
    }
})




$("h1").css("background-color", "red");