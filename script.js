const navBarLinks = document.getElementsByClassName("navbar-links")[0];

onload = function (){
    //Animar itens na sessão home
    $("#card").css({"animation": "revelar 1.5s ease"});

    setInterval(()=>{
        $("#ilustracao").css({"animation": "revelar 1.5s ease"}).css("opacity", "1");
    }, 1000);
}
