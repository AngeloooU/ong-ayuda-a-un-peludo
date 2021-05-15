
function generar_galeria_imagenes(
    selectorTablaHTML, numeroTotalImagenes, numeroColumnasPorFila, url, textoBoton) {

    var spinerPrincipalHTML = "";
    spinerPrincipalHTML += "<thead>";
    spinerPrincipalHTML += "    <tr>";
    spinerPrincipalHTML += "        <th colspan=\""+numeroColumnasPorFila+"\">";
    spinerPrincipalHTML += "            <div class=\"text-center\">";
    spinerPrincipalHTML += "                <div id=\"ajax-loader\" class=\"spinner-border text-info\"></div>";
    spinerPrincipalHTML += "            </div>";
    spinerPrincipalHTML += "        </th>";
    spinerPrincipalHTML += "    </tr>";
    spinerPrincipalHTML += "</thead> ";   

    $(selectorTablaHTML).append(spinerPrincipalHTML);
    $(selectorTablaHTML).append("<tbody></tbody>");

    $.get(url, function(response) { 
        
        contadorImagenesCargadas = 0;
        indiceFilaActual = 0;
        filas = new Array();        
        filas[indiceFilaActual] = $("<tr></tr>");
        $(selectorTablaHTML +" tbody").append(filas[indiceFilaActual]);

        $.each(response, function(index, element) {

            if (((index+1)%numeroColumnasPorFila) == 0) {        
                indiceFilaActual++;        
                filas[indiceFilaActual] = $("<tr></tr>"); 
                $(selectorTablaHTML +" tbody").append(filas[indiceFilaActual]);
            }

            var img = new Image();
            img.src = element.url;
            img.onload = function() {
                                               
                registroHTML = "<td class=\"text-center\">";
                registroHTML += "    <img id=\"imagen-"+element.id+"\" src=\""+element.url+"\" class=\"img-thumbnail\" style=\"width:204px;height:auto;\" /><br/>";                
                registroHTML += "    <button class=\"btn btn-info\" onclick=\"javascript:btnAction('"+element.id+"');\"  >"
                registroHTML += "       <span id=\"ajax-loader-img-"+element.id+"\" class=\"spinner-border spinner-border-sm\"></span>"
                registroHTML += "       "+textoBoton
                registroHTML += "    </button>"
                registroHTML += "</td>";

                var registro = $(registroHTML).hide().fadeIn(2000);
                console.log("agregando el gato #"+index+", url: "+element.url);
                $(filas[Math.floor(index/numeroColumnasPorFila)]).append(registro);
                $("#ajax-loader-img-"+element.id).hide();

                if (contadorImagenesCargadas == (numeroTotalImagenes -1)) {
                    $("#ajax-loader").addClass("invisible");                 
                } else {
                    console.log("Incrementando contador de imagenes listas: "+contadorImagenesCargadas)
                    contadorImagenesCargadas++;
                }
            }
        });
        
    });
}

function btnAction(identificadorImagen) {

    console.log("mostrar spiner para reflejar la ejecución de la llamada ajax de fondo");
    $("#ajax-loader-img-"+identificadorImagen).show();

    $.get(getBtnActionURL(), function(response){
        
        //iterar por el único elemento que debería devolver la respuesta
        $.each(response, function(index, element){
            //crear imagen para precargar antes de reemplazar por la existente
            var newImagen = new Image();
            newImagen.src = element.url;

            //cuando la imagen ya se encuentra descargada
            newImagen.onload = function() {

                $("#imagen-"+identificadorImagen).fadeOut(1000, function(){
                    // se reemplaza la seleccionada, una vez que ya se ha desvanecido, por la nueva ya descargada 
                    $("#imagen-"+identificadorImagen).attr("src",element.url);
                                    
                    // se oculta el spiner
                    $("#ajax-loader-img-"+identificadorImagen).hide();

                    // se vuelve a mostrar, pero con la nueva imagen
                    $("#imagen-"+identificadorImagen).fadeIn(2000);
                });
                
            };               
        });
    });
}