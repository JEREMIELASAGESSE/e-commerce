var formRegister = document.forms['login'];
let Imail = formRegister['email'];
let password = formRegister['password'];
let valider = document.getElementById("valider");

valider.disabled = true; // Désactiver le bouton par défaut

// POUR L'EMAIL
function contraintEmail(ev) {
    if (Imail) {
       var input = ev.target;
       var content = input.value.trim();
       document.getElementById('error-email').innerHTML = "";
       var error = '';
       if (!content) {
          error = 'votre adresse mail est obligatoire';
       } else if (!/^[a-z0-9_-]+[@][a-z]{2,6}\.[a-z]{2,8}$/.test(content)) {
          error = "votre adresse mail est incorrect";
       }
       document.getElementById('error-email').innerHTML = error;
       validateForm();
    }
}

// POUR LE PASSWORD
function contraintePassword(ev) {
    if (password) {
       var input = ev.target;
       var content = input.value.trim();
       document.getElementById('error-password').innerHTML = "";
       var error = '';
       if (!content) {
          error = 'votre mot de passe est obligatoire';
       } else if (!/^[a-zA-Z0-9]{8,20}$/.test(content)) {
          error = "votre mot de passe est incorrect";
       }
       document.getElementById('error-password').innerHTML = error;
       validateForm();
    }
}

function validateForm() {
    const emailValid = !document.getElementById('error-email').innerHTML;
    const passwordValid = !document.getElementById('error-password').innerHTML;
    valider.disabled = !(emailValid && passwordValid);
}

password.addEventListener('keyup', contraintePassword);
Imail.addEventListener('keyup', contraintEmail);

validateForm(); // Initial validation



    //TRAVAIL A FAIRE :
    /*
    2 obliger les saisies
    5 un client pour passer une commande si il a compte et qu'il est connecté
    6 creer une bd qsl
    7 connection de bd et l'interface
    8 les requette
    9 teste
    10 deployement
    */