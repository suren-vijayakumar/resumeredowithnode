$(document).ready(function(){
    $("body").append("<button id= 'clickyButton'>Show Resume!</button>");
    $("body").on('click',  '#clickyButton',function(){
        $("#wrapper").slideDown();

    });
    $("#wrapper").on('click',function(){
        $(this).slideUp().hide();

    });
});