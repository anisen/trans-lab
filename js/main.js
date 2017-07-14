
/* Holiii acá va tu código también 

document.getElementById('correo').addEventListener('input', function() {
	campo = event.target;
	validado = document.getElementById('emailCorrecto');

	emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
    	validado.innerText = "válido";
    } else {
    	validado.innerText = "incorrecto";
    }
});*/

$(document).ready(function() {
	/*sidenav*/
  //$(".button-collapse").hide();
  $(".button-collapse").click(function() {
    //$(".button-collapse").show();
});
  
  $(".button-collapse").sideNav();
  /*sidnav*/
  /*menu desplegable*/
  $('.collapsible').collapsible();
  /*menu desplegable*/

  /*API*/
  $("#boton-saldo").click(function(i) {
  	i.preventDefault();
  	var id= $("#input-saldo").val();

  	$.ajax({
  		url: 'https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+id +'',
  		type: 'GET',
  		dataType: 'json',
  	})
  	.done(function(x) {
  		console.log(x.saldoTarjeta);
        $('#vacio').append('<p>'+x.saldoTarjeta+'</p>')
  	})
  	.fail(function() {
  		console.log("error");
  	});
  }); 
  /*API*/ 
});