

window.addEventListener('load',() =>{
    document.getElementById('file').addEventListener('change',abrirfile)
})
var lines = [];
let dateAnt;
let msgAnt;
let users =  [];
let userColor = [];
var eng = true;
var nmode = true;
var msgChar = 0;

const months = ["January", "February", "March", "April", "May", "June", "July","August","September","Octuber","November","December"];

let warnings = ["Messages and calls are","left","You're no longer","changed to", "You removed","Your security code with",
                "added","changed this group's","created group","Your'e now an admin","You created group","was added",
                "changed the group description","joined using this group's","changed the subject","changed the group",
                "You're now an admin","started a call"];

var activeUser = document.getElementById("optionpov");

activeUser.addEventListener("change",function(){
    var user = users[activeUser.selectedIndex].substring(0,users[activeUser.selectedIndex].length - 1).split(' ').join('');
    chooseUsr(user);
});

function abrirfile(event){
    let file = event.target.files[0];
    let reader = new FileReader();

    if(file){
        if(file.name.substring(file.name.length - 3,file.name.length) != "txt"){
            document.getElementById("subtitle").textContent = "Select a file with the .txt extension";
            return;
        }
        document.getElementById("subtitle").textContent = file.name;
        document.getElementById("day").remove();
        document.getElementById("containall").remove();
        document.getElementById("containmsg").remove();
        document.getElementById("labArch").remove();
        document.getElementById("configs").style.display = "block";


        reader.onload = function(e){
            let content = e.target.result;
            lines = content.split('\n');
            var textFinal = "";
            internationalNumberFormat = new Intl.NumberFormat('es-US')
            document.getElementById("reload").style.display = "flex";
            msgChar = internationalNumberFormat.format(parseInt(lines.length));
    
                textFinal = "Has been loaded " + msgChar + " messages";

            lines.forEach(function(line){
                SplitMessage(line);
            })
            document.getElementById("paragraph").textContent = textFinal;
            chooseUsr(users[0].substring(0,users[0].length - 1).split(' ').join(''));
  
        };
        reader.readAsText(file);
    } else {
       
            document.getElementById("subtitle").textContent = "Fail to charge the file";
    };
}

function SplitMessage(line){
    let gap =  0;
    let originLin = line;
    line = line.split(' ');
    let user = line[4];
    let bodyMessage = "";
    let date = line[0];
    let hour = line[1] + " " + line[2];
    var Positions = 0;
    var validRegex = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;
    try{
        originLin = originLin.replace(">","&gt;");
        originLin = originLin.replace("<","&lt;");

        if(checks(line,date))
            return;

        if(eng) date = date.substring(0,date.length - 1);

        if(!validRegex.test(date)){
            separateLine(bodyMessage,originLin)
            return;
        }

        if(user[user.length - 1] == ":"){
            gap = 5;
            for(var i = 0 ; i < gap ; i++){
                Positions += line[i].length;
            }
        } else{
            for(var i = 4; i < line.length ; i++){
                if(line[i].indexOf(':') != -1){
                    gap = i + 1;
                    for(var i = 0 ; i < gap ; i++){
                        if(i >= 5)
                            user += " " + line[i];
                        Positions += line[i].length;
                    }
                    break;
                }
            }
        }

        bodyMessage = originLin.substring((Positions+gap),originLin.length).replace(/ /g,"&nbsp");

        if(!users.includes(user)){
            users.push(user);
            userColor.push("hsl(" + Math.round((Math.random() * 359)) + ", 64%, 64%)");
            listUsers();
            createUserOption(user.substring(0,user.length - 1));
        }

        AddendumMessages(user,bodyMessage,hour,line);
    }catch(error){};
}

function AddendumMessages(user,bodyMessage,hour,line){   
    // Create the parent div
    const div = document.createElement("div");
    div.textContent = "";
    div.id = "msg";

    // Create the paragraph for the user
    const usrText = document.createElement("p");
    usrText.textContent = user;
    if(msgAnt == user) usrText.style.display = "none";

    // gives you your assigned color
    for(var i = 0 ; i < users.length; i++){
        if(users[i] == user){
            usrText.style.color = userColor[i];
        }
    }

    // Create the paragraph of the message
    const msgText = document.createElement("p");

    msgText.innerHTML = bodyMessage;
    msgText.id = "body";
    msgText.className = "bodycont";

    // Create the paragraph of the date
    const dateText = document.createElement("p");
    dateText.textContent = hour;
    dateText.id = "date";

    // Gets the item that will parent the message
    var currentDiv = document.getElementById("area");

    // Create the paragraph of the day if needed
    if(dateAnt != line[0]){
        const alldiv = document.createElement("div");
        alldiv.id = "containall";
        alldiv.className = "date";
        const data = document.createElement("p");
          var year = parseInt(line[0].split('/')[2].substring(0,line[0].split('/')[2].length - 1));
            if(year < 2000) year += 2000;
            data.textContent = months[line[0].split('/')[0] - 1] +" "+line[0].split('/')[1] +", " + year;
    
        data.id = "day";

        alldiv.append(data);
        currentDiv.append(alldiv);
    }

    var elements = document.createElement("div");
    elements.id = "elements";

    var contain = document.createElement("div");
    contain.id = "containmsg";

    contain.className = "oth " + user.substring(0,user.length-1).split(' ').join('');
    contain.style.display = "flex";
    elements.append(usrText,msgText);
    div.append(elements,dateText);
    contain.append(div);
    currentDiv.append(contain);  
    dateAnt = line[0];
    msgAnt = user;
}

function advertMsg(line){
    let advert = ""
            
    for(var i = 4 ; i < line.length ; i++){
        advert += " " + line[i];
    }

    
    const alldiv = document.createElement("div");
    alldiv.id = "containall";

    const warn = document.createElement("p");
    warn.textContent = advert;
    warn.id = "warn";
    var currentDiv = document.getElementById("area");
    alldiv.append(warn);
    currentDiv.append(alldiv);
}

function listUsers(){
    const userparagraph = document.getElementById("userparagraph");
    userparagraph.style.display = "block"

    const mainDiv = document.getElementById("contUsers");
    mainDiv.style.display = "flex"

    const userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.style.backgroundColor = userColor[userColor.length - 1];

    const userIcon = document.createElement("div");
    userIcon.id = "image";

    const username = document.createElement("span");
    username.textContent = users[users.length - 1].substring(0,users[users.length - 1].length-1);

    userDiv.appendChild(userIcon);
    userDiv.appendChild(username);
    mainDiv.appendChild(userDiv);
}

function checks(line,date){
    var flag = false;
        warnings.forEach(function ( warn ) {
            if(line.join(" ").includes(warn) && !line.join(" ").substring(20,line.join(" ").length).includes(":")){
                advertMsg(line);
                flag = true;
                return true;
            }
        });
    
    return flag;
}

function separateLine(bodyMessage,originLin){
    bodyMessage = originLin.replace(/ /g,"&nbsp");
    const currentDiv = document.getElementsByClassName("bodycont")[document.getElementsByClassName("bodycont").length - 1];
    currentDiv.innerHTML += "<br>" + bodyMessage;
    return;
}

function whatsapptwo(){
    if(msgChar != 0)
        return;

    document.getElementById("logoapp").src = "assets/images/whatsapp.png";
    document.getElementById("wareader").textContent = "WhatsApp 2";

    document.getElementById("title").textContent = "WhatsApp 2 Revealed";
    document.getElementById("subtitle").textContent = "With the WhatsApp cart";
    for(element of document.getElementsByClassName("paragraph")) element.textContent = "";
    document.getElementById("entrance").remove();
    document.getElementById("area").remove();
    document.getElementById("paragraph").remove();
    document.getElementById("desc").textContent =  "OMG, cart do whatsapp";

    document.getElementById("eng").disabled = true;
    document.getElementById("esp").disabled = true;


    let carrodiv = document.createElement("div");
    carrodiv.id = "carrowasa";

    let carro = document.createElement("img");
    carro.src = "assets/images/carro.png";
    carrodiv.appendChild(carro);
    document.getElementById("subtitle").insertAdjacentElement("afterend",carrodiv);
}

function createUserOption(username){
    const obj = document.getElementById("optionpov");
    var option = document.createElement("option");
    option.value = username;
    option.textContent = username;
    obj.append(option);
}

function chooseUsr(username){
    console.log(username);
    let allMsg = document.getElementsByClassName("oth");
    Array.from(allMsg).forEach(msg => {
        if(msg.className.includes("env"))
            msg.className = msg.className.substring(0,msg.className.length - 3);
        if(msg.className.includes(username))
            msg.className += " env";
    })

}   