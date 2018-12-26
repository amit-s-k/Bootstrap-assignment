$(function(){
    console.log("hello");
    $("#toggler").blur(function(event){
        console.log("hey");
        if(window.innerWidth<=768){
            $("#navbarNavAltMarkup").collapse("hide");
        }

    });
});