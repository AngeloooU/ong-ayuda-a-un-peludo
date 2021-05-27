
$(document).ready(function() {

HEAD
    $.get{"https://api.thecatapi.com/v1/images/serach?limit=5", function(response) {
        console.log("El servicio de CAT API ha respondido.")
        console.log(response);

        $.each(response, function(index, element) {
            registroHTML = "<tr>";
            registroHTML = "        <td>";
            registroHTML = "            "+index;
            registroHTML = "        </td>";
            registroHTML = "        <td>";
            registroHTML = "            <img src=\""+element.url+"\" id=\"image=element.id"\" width=\"200\"    "
            registroHTML = "        </td>";
            registroHTML = "         <button class=\"btn btn-info\">Cambiar imagen</button>"
            registroHTML = "        </td>";
            registroHTML = "</tr>";

            $("#listado-gatos").append(registroHTML);

            if {contadorImagenesCargadas < 5)  {}
        }
    }

});

    var nroTotalImagenes = 15;
    var nroColumnasPorFila = 3;
    var selectorTablaHTML = "#lista-gatos"
    var url = "https://api.thecatapi.com/v1/images/search?limit="+nroTotalImagenes

    generar_galeria_imagenes(selectorTablaHTML, nroTotalImagenes, nroColumnasPorFila, url,"Cambiar Imagen");
});

function getBtnActionURL() {
    return "https://api.thecatapi.com/v1/images/search?limit=1";
}
