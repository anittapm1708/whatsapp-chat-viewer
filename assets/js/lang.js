/*function switchEsp(){
    try{
        eng = false;
        let buttonEsp = document.getElementById("esp");
        if(buttonEsp.style.backgroundColor == "rgb(24, 44, 57)")
            return;

        let buttonEng = document.getElementById("eng");

        buttonEng.style.backgroundColor = "#030c12";
        buttonEsp.style.backgroundColor = "#182c39";

        
        document.getElementById("titulo").textContent = "Interpreta tus mensajes exportados";
        document.getElementById("desc").innerHTML = "Cuando exportas tu chat de WA, se torna caótico leer las conversaciones<br>WA Reader les otorga formato a las conversaciones y las muestra como si fuese el original.";
        document.getElementById("txtDev").textContent = "Desarrollador";
        document.getElementById("txtDisc").innerHTML = "Esta página web funciona solo para experimento<br>";
        document.getElementById("txtCod").textContent = "Codigo fuente";
        document.getElementById("txtFinal").textContent = "Desarrollado para GitHub - 2022";

        if(document.getElementById("labArch") != null)
            document.getElementById("labArch").textContent = "Elige un archivo";

        if(document.getElementById("paragraph").textContent.includes("Has been loaded"))
            document.getElementById("paragraph").textContent = "Se han cargado " + msgChar + " mensajes";
        else
            document.getElementById("paragraph").textContent  = "Vista previa:";
        
        document.getElementById("userparagraph").textContent = "users en la conversación";
        document.getElementById("txtusr").textContent = "user activo";

        if(msgChar == 0){
            document.getElementById("subtitulo").textContent = "Selecciona el archivo para otorgar el formato";
            document.getElementById("day").textContent = "10 de septiembre del 2022";
            document.getElementById("us").textContent = "user";
            document.getElementById("body").textContent = "Así será el body del texto";
        }

    }catch(error){};
}

function switchEng(){
    try{
        eng = true;
        let buttonEng = document.getElementById("eng");
        if(buttonEng.style.backgroundColor == "rgb(24, 44, 57)")
            return;

        let buttonEsp = document.getElementById("esp");

        buttonEsp.style.backgroundColor = "#030c12";
        buttonEng.style.backgroundColor = "#182c39";

        document.getElementById("titulo").textContent = "Interprets your exported messages";
        document.getElementById("desc").innerHTML = "When you export your WA chat, turns chaotic read the conversations<br>WA Reader gives the format to the conversations and shows like the original chat.";

        if(document.getElementById("labArch") != null)
            document.getElementById("labArch").textContent = "Select a file";

        document.getElementById("txtDev").textContent = "Developer";
        document.getElementById("txtDisc").innerHTML = "This web page works only for experiment.<br>";

        document.getElementById("txtCod").textContent = "Source code";
        document.getElementById("txtFinal").textContent = "Developed for GitHub - 2022";
        document.getElementById("txtusr").textContent = "Active user";

        if(document.getElementById("paragraph").textContent.includes("Se han cargado"))
            document.getElementById("paragraph").textContent = "Has been loaded " + msgChar + " messages";
        else
            document.getElementById("paragraph").textContent  = "Preview:";

        document.getElementById("userparagraph").textContent = "Users in the conversation";

        if(msgChar == 0){
            document.getElementById("subtitulo").textContent = "Select the file to give the format";
            document.getElementById("day").textContent = "September 10, 2022";
            document.getElementById("us").textContent = "User";
            document.getElementById("body").textContent = "This is the text body";
        }
    }catch(error){};
}*/