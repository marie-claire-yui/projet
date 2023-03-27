
addEventListener("DOMContentLoaded", (event) => {
    console.log("pagechargée");
    document.body.style.backgroundColor = "red"; //1 Au chargement de la page, changez la couleur de fond de la page index.html
    const node = document.createElement("li"); // 2 Au chargement de la page, insérez un <li>Lorem</li> à la fin d’une liste.
    const textnode = document.createTextNode("Lorem");
    node.appendChild(textnode);
    document.querySelector("li:last-child").appendChild(node);
}); // pb: le li n'apparait pas dans l'inspecteur mais apparait bien sur le navigateur (2)


// 3 Au clic sur le bouton 1, supprimez le dernier <li> dans la liste 1.
function function1(){
    document.querySelector("li:last-child").remove();
}

// 4 Au clic sur le bouton 2, repliez la liste 2.
function function2(){
    document.querySelector("ul:nth-child(2)").remove();
}

// 5 Au clic sur le bouton 3, ajoutez une classe CSS au bouton 1 pour qu'il récupère une marge supérieure supplémentaire.
function function3(){
    document.getElementById('btn1').style.marginTop = "50px";
} //pb semble appliquer la margin sur tout les boutons et pas uniquement sur le  premier

// 6 Au clic sur le bouton 4, changez de classe CSS pour qu'il change de couleur
function function4(){
    document.getElementById('btn4').style.color = "blue";
}

//7 Au clic sur le bouton 5, chargez l'image “background.jpg” en image de fond sur la section #section-1.
function function5(){
    const image = document.createElement('img');
    image.setAttribute("src","img/background.jpg")
    const section_bg = document.getElementById('section-1');
    section_bg.append(image);
}

//8 Au survol du bouton 6, changez la couleur de tous les boutons en vert.
function function6(){
 var buttons = document.getElementsByTagName('button');
for (var i = 0, len = buttons.length; i < len; ++i) {
    buttons[i].style.color = "orange";
}
}

// 9 Annulez le clic sur le bouton 7 et changez sa couleur lors d'un double clic.
function function7(){
    addEventListener('dblclick', function () {
        document.getElementById('btn7').style.color = "blue";
      }); // annuler le click?
}

// 10 Au clic sur le bouton 8, faites disparaître/apparaître tous les <h2> de la page.


// function function8(){
//    var titleH2 = document.getElementsByTagName('h2');
//    for (var index = 0; index < titleH2.length; index++) {
//     titleH2[index].remove();
// }
// }
function function8(){
   let titleH2 = document.querySelectorAll('H2');
   for(var i=0;i<titleH2.length;i++){ 
    titleH2[i].classList.toggle("blue");
        }
        for(var i=0;i<titleH2.length;i++){ 
            const titleH2Class = document.getElementsByClassName("blue");
            if (titleH2Class[i].style.display === "none"){
                titleH2Class[i].style.display = "block";
            } else {
                titleH2Class[i].style.display = "none"
            };
        }
    }; // fonctionne en deux temps (deux clicks)

// ADVANCED DOM 1

var now = new Date();
alert(now);
document.getElementById('section-2').innerHTML = "now";

