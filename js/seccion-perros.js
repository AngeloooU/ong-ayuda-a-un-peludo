
$(document).ready(function() {

    $.get("https://api.thedogapi.com/v1/images/search?limit=5", function(response) {
        console.log("El servicio de DOG API ha respondido.")
        console.log(response);
        
        contadorImagenesCargadas = 0;

        $.each(response, function(index, element) {
            var img = new Image();
            img.src = element.url;
            img.onload = function() {
                console.log("agregando el perro #"+index+", url: "+element.url);
                registroHTML = "<tr>";
                registroHTML += "    <td>";
                registroHTML += "        "+index;
                registroHTML += "    </td>";
                registroHTML += "    <td>";
                registroHTML += "        <img src=\""+element.url+"\" id=\"imagen-"+element.id+"\" width=\"200\" height=\"auto\"  />";
                registroHTML += "        <div id=\"ajax-loader-img-"+element.id+"\" class=\"spinner-border text-info invisible\"></div>"
                registroHTML += "    </td>";
                registroHTML += "    <td>";
                registroHTML += "        <button class=\"btn btn-info\" onclick=\"javascript:actualizarImagen('"+element.id+"');\"  >"
                registroHTML += "           Reemplazar"
                registroHTML += "        </button>"
                registroHTML += "    </td>";
                registroHTML += "</tr>";

                var registro = $(registroHTML).hide().fadeIn(2000);
                $("#lista-perros").append(registro);

                if (contadorImagenesCargadas == 4) {
                    $("#ajax-loader").addClass("invisible");                 
                } else {
                    console.log("Incrementando contador de imagenes listas: "+contadorImagenesCargadas)
                    contadorImagenesCargadas++;
                }
            }
        });
        
    });
});

function actualizarImagen(identificador) {

    console.log("mostrar spiner para reflejar la ejecución de la llamada ajax de fondo");
    $("#ajax-loader-img-"+identificador).removeClass("invisible");
    $("#imagen-"+identificador).hide();

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
                $("#ajax-loader-img-"+identificador).addClass("invisible");
                $("#imagen-"+identificador).show();
            };               
        });
    });
}