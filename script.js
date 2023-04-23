function afficherHeure() {
    // Créer un nouvel objet Date
    var date = new Date();
  
    // Récupérer les heures, minutes et secondes
    var heures = date.getHours();
    var minutes = date.getMinutes();
  
  
    // Ajouter un zéro devant les chiffres inférieurs à 10
    heures = heures < 10 ? "0" + heures : heures;
    minutes = minutes < 10 ? "0" + minutes : minutes;

  
let amOrMp="";
if  (heures > 12){
  amOrMp="PM";
} else{
  amOrMp="AM";
}


    // Afficher l'heure dans un élément HTML avec l'id "horloge"
   document.querySelector(".horloge").innerHTML = heures + ":" + minutes + " " +amOrMp ;
 
  }
  
  // Actualiser l'heure toutes les secondes en appelant la fonction afficherHeure
  setInterval(afficherHeure, 1000);


