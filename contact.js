const nom = document.getElementById("nom");
const email = document.getElementById("email");
const objet = document.getElementById("objet");
const contenu = document.getElementById("contenu");
const Envoyer = document.getElementById("Envoyer");

function contraintenom(ev) {
    if (nom) {
       var input = ev.target;
       var content = input.value.trim();
       document.getElementById('error-nom').innerHTML = "";
       let error = '';
       if (!content) {
          error = 'votre nom est obligatoire';
       } else if (!/^[a-zA-Z0-9]{8,20}$/.test(content)) {
          error = "votre nom est incorrect ";
       }
       document.getElementById('error-nom').innerHTML = error;
       validateForm();
    }
}

function contraintemail(ev) {
    if (email) {
       var input = ev.target;
       var content = input.value.trim();
       document.getElementById('error-email').innerHTML = "";
       let error = '';
       if (!content) {
          error = 'votre email est obligatoire';
       } else if (!/^[a-z0-9_-]+[@][a-z]{2,6}\.[a-z]{2,8}$/.test(content)) {
          error = "votre email est incorrect ";
       }
       document.getElementById('error-email').innerHTML = error;
       validateForm();
    }
}

function contrainteobjet(ev) {
    if (objet) {
       var input = ev.target;
       var content = input.value.trim();
       document.getElementById('error-objet').innerHTML = "";
       let error = '';
       if (!content) {
          error = "l'objet est obligatoire";
       } else if (!/^[a-zA-Z0-9]{3,40}$/.test(content)) {
          error = "nombre de caractere issuffissant ou limité ";
       }
       document.getElementById('error-objet').innerHTML = error;
       validateForm();
    }
}

function contraintemessage(ev) {
    if (contenu) {
       var input = ev.target;
       var content = input.value.trim();
       document.getElementById('error-area').innerHTML = "";
       let error = '';
       if (!content) {
          error = "le message est obligatoire";
       } else if (!/^[a-zA-Z0-9]{5,1000}$/.test(content)) {
          error = "nombre de caractere issuffissant ou limité ";
       }
       document.getElementById('error-area').innerHTML = error;
       validateForm();
    }
}

function validateForm() {
    const nomValid = !document.getElementById('error-nom').innerHTML;
    const emailValid = !document.getElementById('error-email').innerHTML;
    const objetValid = !document.getElementById('error-objet').innerHTML;
    const messageValid = !document.getElementById('error-area').innerHTML;
    Envoyer.disabled = !(nomValid && emailValid && objetValid && messageValid);
}

nom.addEventListener('keyup', contraintenom);
email.addEventListener('keyup', contraintemail);
objet.addEventListener('keyup', contrainteobjet);
contenu.addEventListener('keyup', contraintemessage);

validateForm(); // Initial validation




