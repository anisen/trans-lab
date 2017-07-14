
/* Holiii acá va tu código también */

/*function validacionInputs(){
	var correo= document.getElementById("correo").value;
	var contrasena= document.getElementById("contrasena").value;
	var boton=document.getElementById("boton-iniciosesion");

	boton.addEventListener('click', function(){
		if (corre!==/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/) {
			alert("hola")
		}
	})
	
}*/
$(document).ready(function() {
  //$(".button-collapse").hide();
  $(".button-collapse").click(function() {
    //$(".button-collapse").show();
  });
  
  $(".button-collapse").sideNav();

});