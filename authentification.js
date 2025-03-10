var formRegister = document.forms['register'];
let Nom = formRegister['nom'];
let Prenom = formRegister['prenom'];
let tel = formRegister['tel'];
let Imail = formRegister['email'];
let password = formRegister['password'];
let passwordConfirm = formRegister['confirm_password'];
let Envoyer = document.getElementById("Envoyer");

 //Envoyer.disabled = true; Désactiver le bouton par défaut

function contrainteNom(ev) {
    var input = ev.target;
    var content = input.value.trim();
    document.getElementById('error-nom').innerHTML = "";
    var error = '';
    if (!content) {
        error = "votre nom est obligatoire";
    } else if (!/^[a-zA-Z'é ]{2,15}$/.test(content)) {
        error = "votre nom n'est pas pris en compte";
    }
    document.getElementById('error-nom').innerHTML = error;
    validateForm();
}

function contraintePrenom(ev) {
    var input = ev.target;
    var content = input.value.trim();
    document.getElementById('error-prenom').innerHTML = "";
    var error = '';
    if (!content) {
        error = "votre prenom est obligatoire";
    } else if (!/^[a-zA-Z'é ]{3,30}$/.test(content)) {
        error = "votre prenom n'est pas pris en compte";
    }
    document.getElementById('error-prenom').innerHTML = error;
    validateForm();
}

function contraintetel(ev) {
    var input = ev.target;
    var content = input.value.trim();
    document.getElementById('error-tel').innerHTML = "";
    var error = '';
    if (!content) {
        error = "votre numero est obligatoire";
    } else if (!/^[0-9]{10,}$/.test(content)) {
        error = "votre numero n'ai pas pris en compter";
    }
    document.getElementById('error-tel').innerHTML = error;
    validateForm();
}

function contraintEmail(ev) {
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

function contraintePassword(ev) {
    var input = ev.target;
    var content = input.value.trim();
    document.getElementById('error-password').innerHTML = "";
    var error = '';
    if (!content) {
        error = 'votre mot de passe est obligatoire';
    } else if (!/^[a-zA-Z0-9]{8,20}$/.test(content)) {
        error = "votre mot de passe est incorrect ";
    }
    document.getElementById('error-password').innerHTML = error;
    validateForm();
}

function contraintConfirm(ev) {
    var input = ev.target;
    var content = input.value.trim();
    document.getElementById('erro-password_comfirm').innerHTML = "";
    var error = '';
    if (!content) {
        error = 'la confirmation de votre mot de passe !!!';
    } else if (content !== password.value) {
        error = "les deux mot de passe sont diferents";
    }
    if (error) {
        document.getElementById('erro-password_comfirm').innerHTML = error;
    }
    validateForm();
}

function validateForm() {
    const nomValid = !document.getElementById('error-nom').innerHTML;
    const prenomValid = !document.getElementById('error-prenom').innerHTML;
    const telValid = !document.getElementById('error-tel').innerHTML;
    const emailValid = !document.getElementById('error-email').innerHTML;
    const passwordValid = !document.getElementById('error-password').innerHTML;
    const confirmPasswordValid = !document.getElementById('erro-password_comfirm').innerHTML;
    Envoyer.disabled = !(nomValid && prenomValid && telValid && emailValid && passwordValid && confirmPasswordValid);
}

Nom.addEventListener('keyup', contrainteNom);
Prenom.addEventListener('keyup', contraintePrenom);
tel.addEventListener('keyup', contraintetel);
Imail.addEventListener('keyup', contraintEmail);
password.addEventListener('keyup', contraintePassword);
passwordConfirm.addEventListener('keyup', contraintConfirm);

validateForm(); // Initial validation
