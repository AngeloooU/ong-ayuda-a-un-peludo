function actualizarImagen(identificador) {
    console.log("Ahora deberíamos actualizar la imagen "+identificador);

    $("#ajax-loading-"+identificador).removeClass("invisible");
    $.get("https://api.thedogapi.com/v1/images/search?limit=1", function(response){
        
        console.log("servicio con nueva imagen devuelta ok");
        $.each(response, function(index, element){

            console.log("servicio con nueva imagen devuelta ok: "+element.url);
            $("#imagen-"+identificador).attr("src",element.url);
            $("#imagen-"+identificador).ready(function(){
                $("#ajax-loading-"+identificador).addClass("invisible");
            })
            
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
            registroHTML += "      <img id=\"imagen-"+index+"\"  src=\""+element.url+"\" height=\"auto\" width=\"200\"/>"
            registroHTML += "  </td>"
            registroHTML += "  <td>"
            registroHTML += "      <button class=\"btn btn-info\" onclick=\"javascript:actualizarImagen("+index+");\"  >"
            registroHTML += "          <span id=\"ajax-loading-"+index+"\" class=\"spinner-border spinner-border-sm invisible\"></span> Reemplazar imagen"
            registroHTML += "      </button>"
            registroHTML += "  </td>"
            registroHTML += "</tr>"
            $("#lista-perros").append(registroHTML);
        });
    })

});