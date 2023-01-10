"use strict";
/* L'opérateur 'satisfies' en TS est utilisé pour définir des contraintes sur les types d'un paramètre générique.
Il peut être utilisé dans une déclaration de fonction ou de classe pour spécifier que le type passé en paramètre
doit satisfaire certains propriétés ou implementer certaines méthodes*/
class Garage {
    voitures = [];
    ajouterVoiture(voiture) {
        if (voiture.nombreDePortes) {
            this.voitures.push(voiture);
        }
        else {
            console.log("La voiture doit avoir un nombre de portes!");
        }
        return this.voitures;
    }
}
const maVoiture = {
    marque: "Toyota",
    modele: "Camry",
    nombreDePortes: 4,
};
const monGarage = new Garage();
console.log(monGarage.ajouterVoiture(maVoiture));
