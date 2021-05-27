
$(document).ready(function() {

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