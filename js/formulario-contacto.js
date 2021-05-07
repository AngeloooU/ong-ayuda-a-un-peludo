
$(document).ready(function(){

    // ocultar todos los div que tengan class "alert" y se encuentren
    // dentro de un elemento cuyo id es "formulario-contacto".
    $("#formulario-contacto div.alert").hide();

    // función encargada de verificar si el valor del parámetro fieldValue
    // es vacío y mostrar o esconder, según corresponda, el mensaje en el
    // div de alerta asociado al campo indicado en el parámetro fieldName.
    function validarCampoVacio(fieldValue, fieldName) {
        if (fieldValue.trim().length == 0) {
            $("#"+fieldName).addClass("error-campo-formulario");
            $("label[for='"+fieldName+"'] > div.alert").html("El campo no puede ser vacío");
            $("label[for='"+fieldName+"'] > div.alert").show();
            $("label[for='"+fieldName+"'] > div.alert").fadeOut( 5000 )
        } else {
            $("#"+fieldName).removeClass("error-campo-formulario");
            $("label[for='"+fieldName+"'] > div.alert").hide();
        }
    }

    // asocia en el evento blur del elemento de formulario con id "fieldNombre" la llamada a la
    // función de validar si el campo es vacío.
    $("#fieldNombre").blur(function(){
        valorIngresado = $(this).val();
        console.log("El usuario ha dejado el campo nombre con el valor: '"+valorIngresado+"'");

        validarCampoVacio(valorIngresado, "fieldNombre");
    });
   
    // asocia en el evento blur del elemento de formulario con id "fieldEmail" la llamada a la
    // función de validar si el campo es vacío.
    $("#fieldEmail").blur(function(){
        valorIngresado = $(this).val();
        console.log("El usuario ha dejado el campo nombre con el valor: '"+valorIngresado+"'");

        validarCampoVacio(valorIngresado, "fieldEmail");
    });

    // asocia en el evento blur del elemento de formulario con id "fieldFechaNacimiento" la llamada a la
    // función de validar si el campo es vacío.
    $("#fieldFechaNacimiento").blur(function(){
        valorIngresado = $(this).val();
        console.log("El usuario ha dejado el campo nombre con el valor: '"+valorIngresado+"'");

        validarCampoVacio(valorIngresado, "fieldFechaNacimiento");
    });

    // asocia en el evento blur del elemento de formulario con id "fieldComentario" la llamada a la
    // función de validar si el campo es vacío.
    $("#fieldComentario").blur(function(){
        valorIngresado = $(this).val();
        console.log("El usuario ha dejado el campo nombre con el valor: '"+valorIngresado+"'");

        validarCampoVacio(valorIngresado, "fieldComentario");
    });
});


