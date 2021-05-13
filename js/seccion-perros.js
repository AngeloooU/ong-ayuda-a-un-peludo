function actualizarImagen(identificador) {

    console.log("mostrar spiner para reflejar la ejecución de la llamada ajax de fondo");
    $("#ajax-loading-"+identificador).removeClass("invisible");

    $.get("https://api.thedogapi.com/v1/images/search?limit=1", function(response){
        
        //iterar por el único elemento devuelto por la lista
        $.each(response, function(index, element){
            //crear imagen para precargar antes de reemplazar por la existente
            var newImagen = new Image();
            newImagen.src = element.url;

            //cuando la imagen ya se encuentra descargada
            newImagen.onload = function() {

                // se reemplaza la seleccionada por la descargada
                $("#imagen-"+identificador).attr("src",element.url);
                
                console.log("ocultando spiner");
                $("#ajax-loading-"+identificador).addClass("invisible");
            };               
        });
    });
}

$(document).ready(function() {

    $.get("https://api.thedogapi.com/v1/images/search?limit=5", function(response){
        $.each(response, function(index, element){
            registroHTML = "<tr>"
            registroHTML += "  <td>"
            registroHTML += "      "+index
            registroHTML += "  </td>"
            registroHTML += "  <td>"
            registroHTML += "      <img id=\"imagen-"+element.id+"\"  src=\""+element.url+"\" height=\"100\" width=\"auto\" />"
            registroHTML += "  </td>"
            registroHTML += "  <td>"
            registroHTML += "      "+ ((!$.isArray(element.breeds) || !element.breeds.length)? "Sin Información" :element.breeds[0].name)
            registroHTML += "  </td>"
            registroHTML += "  <td>"
            registroHTML += "      "+ ((!$.isArray(element.breeds) || !element.breeds.length)? "Sin Información" :element.breeds[0].temperament)
            registroHTML += "  </td>"
            registroHTML += "  <td>"
            registroHTML += "      <button class=\"btn btn-info\" onclick=\"javascript:actualizarImagen('"+element.id+"');\"  >"
            registroHTML += "          <span id=\"ajax-loading-"+element.id+"\" class=\"spinner-border spinner-border-sm invisible\"></span> Reemplazar"
            registroHTML += "      </button>"
            registroHTML += "  </td>"
            registroHTML += "</tr>"
            $("#lista-perros").append(registroHTML);
        });
    })

});