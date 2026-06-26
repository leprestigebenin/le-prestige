let panier = [];
let total = 0;

function ajouterPanier(nom, prix){

    panier.push({nom, prix});
    total += prix;

    afficherPanier();

}

function afficherPanier(){

    let liste = document.getElementById("liste-panier");

    liste.innerHTML="";

    panier.forEach(function(produit){

        liste.innerHTML += `
            <p>${produit.nom} - ${produit.prix.toLocaleString()} FCFA</p>
        `;

    });

    document.getElementById("total").innerHTML = total.toLocaleString();

}

function commanderWhatsApp(){

    let texte = "Bonjour Le Prestige,%0A%0AJe souhaite commander :%0A";

    panier.forEach(function(produit){

        texte += "- " + produit.nom + " : " + produit.prix + " FCFA%0A";

    });

    texte += "%0ATotal : " + total + " FCFA";

    window.open("https://wa.me/2290197592841?text=" + texte);

}