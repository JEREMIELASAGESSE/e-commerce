//menu
let navbar=document.getElementById("navbar")//acces à la nabar
let menu =document.getElementById("menu")//acces au menu
let fermerMenu=document.querySelector('.fermerMenu')//acces fermeture
if (menu) {
    menu.addEventListener("click",()=>{
        navbar.classList.add('active')
    })
}
if (fermerMenu) {
    fermerMenu.addEventListener("click",()=>{
        navbar.classList.remove('active')
    })
}



//LE PANNIER
let fermer=document.querySelector(".fermer")
let Lepanier=document.querySelector(".Lepanier")
let Tpanier=document.querySelector(".Tpanier")
//gestion de l'ouverture et la fermeture du panier
//ouverture
Tpanier.addEventListener("click",()=>{
    Lepanier.classList.add('active')
})
//fermeture
fermer.addEventListener("click",()=>{
    Lepanier.classList.remove('active')
})
//gestion d'ajoute d'elemnet dans le panier
let ajoutpanier=document.querySelectorAll(".panier")
ajoutpanier.forEach(button => {
    button.addEventListener('click',event=>{
        const cartProduit=event.target.closest(".cartProduit")
        addTocart(cartProduit)
    })
    
});
//acces au conteneur
const conteneurPanier=document.querySelector('.conteneurPanier')
//la fonction addTcart
const addTocart=cartProduit=>{
    //acces au éléments se trouvant dans la cartProduit
    const produitmgsrc=cartProduit.querySelector("img").src
    const produittitre=cartProduit.querySelector(".nom").textContent
    const produitprix=cartProduit.querySelector(".prix").textContent

    //condition pour ne pas ajouter deux fois le meme produit au panier
    const catItems = conteneurPanier.querySelectorAll('.titrePanier');
    for (let item of catItems) {
        if (item.textContent === produittitre) {
            alert("Ce produit a déjà été ajouté au panier");
            return;
        }
    }
    
    // Création d'une div qui va contenir les éléments
    const cartbox = document.createElement('div');
    // Ajout de la classe 'cartPanier' à la div créée
    cartbox.classList.add('cartPanier');
    // Ajout des éléments de façon dynamique dans la div créée
    cartbox.innerHTML = `
        <img src="${produitmgsrc}" class="imagePanier">
        <div class="detailProduit">
            <h3 class="titrePanier">${produittitre}</h3>
            <span class="prixPanier">${produitprix}</span>
            <div class="quantityPanier">
                <button id="ajout">+</button>
                <span class="number">1</span>
                <button id="reduit">-</button>
            </div>
        </div>
         <i class="fas fa-trash-alt supprimer"></i>
    `;
    // Ajout de la div dans le conteneur
    conteneurPanier.appendChild(cartbox);
    //suppression d'élément dans le panier
    cartbox.querySelector(".supprimer").addEventListener("click",()=>{
        cartbox.remove()
        updateCartcount(-1)
        miseAjourTotal()
    })
    // gestion de la quantité
    cartbox.querySelector(".quantityPanier").addEventListener("click",event =>{
      const nombreElement=cartbox.querySelector(".number")
      const reduitElement=cartbox.querySelector("#reduit")
      const ajoutElement=cartbox.querySelector("#ajout")
      let quantity=nombreElement.textContent
      if (event.target.id === "reduit" && quantity >1) {
           quantity--
           reduitElement.addEventListener("click",()=>{
            miseAjourTotal()
           })
            if (quantity===1) {
            reduitElement.style.color = "#999"
            
             }
        
      }else if (event.target.id === "ajout") {
        quantity++
        ajoutElement.addEventListener("click",()=>{
            miseAjourTotal()
           })
         reduitElement.style.color = "#333"
        
      } 
        nombreElement.textContent=quantity
        miseAjourTotal()
    })
    updateCartcount(1)
    miseAjourTotal()
}

const miseAjourTotal=() =>{
    const prixTotal=document.querySelector('.totalPrix')
    const cartBoxes= conteneurPanier.querySelectorAll(".cartPanier")
    let total=0
    cartBoxes.forEach(cartBox => {
      const prixElement =cartBox.querySelector(".prixPanier")
      const quantityElement =cartBox.querySelector(".number")
      const prix = prixElement.textContent.replace("FCFA","")
      const quantity = parseInt( quantityElement.textContent)
      total +=(prix * quantity)        
    });
    prixTotal.textContent=`${total} FCFA`
}

//mise a jour des decontes
let cartItemcount = 0
const updateCartcount = change =>{
    const cartItemcountBadge=document.querySelector(".deconte") 

      cartItemcount+=change

    if (cartItemcount > 0) {
        cartItemcountBadge.style.visibility ="visible"
        cartItemcountBadge.textContent = cartItemcount
    }else{
        cartItemcountBadge.style.visibility="hidden"
        cartItemcountBadge.textContent=""
    }

}

//COMMANDER DU PANNIER
const commander=document.querySelector(".commander")
commander.addEventListener("click",()=>{
    const cartBoxes=conteneurPanier.querySelectorAll(".cartPanier")
    if (cartBoxes.length === 0) {
        alert('le panier est vide !!!')
        return
    }
    cartBoxes.forEach(cartBox => cartBox.remove());
    cartItemcount=0
    updateCartcount(0)
    miseAjourTotal()
    alert(' commande approuvée , vous serez contactez et nous vous remercions  pour votre fideleté')
})