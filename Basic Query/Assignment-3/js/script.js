$(document).ready(function(){
    $("#clickId").on("click", function(){
        alert("clicked");
    });
    $("#hoverId").hover(function(){
        alert("hover");
    });

    $("#myLink").focus(function() {
        $("#message").text("The link has gained focus.");
        $("#message").fadeOut("slow");
    });

    $("#myLink").blur(function() {
        $("#message").text("The link has lost focus.");
        $("#message").fadeOut("slow");
    });
    $("#mouseOverId").mouseover(function(){
        alert("mouseOver");
    });
    $("#mouseOutId").mouseout(function(){
        alert("mouseOut");
    });

    $("#defaultPrevent").click(function (e) { 
        e.preventDefault();
        $("#message").text("validation failed. Link not open");
        $("#message").fadeOut(5000);

    });
});