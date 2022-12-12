
$(document).ready( function() {
    $("#uel").on("click", function(){
        $("#mainPage").load("uel.html");
    })
    $("#jsp").on("click", function(){
        $("#mainPage").load("jsp.html");
    })
    $("#jsf").on("click", function(){
        $("#mainPage").load("jsf.html");
    })

});