/* L'opérateur 'satisfies' en TS est utilisé pour définir des contraintes sur les types d'un paramètre générique.
Il peut être utilisé dans une déclaration de fonction ou de classe pour spécifier que le type passé en paramètre
doit satisfaire certains propriétés ou implementer certaines méthodes*/

/*Par exemple, si vous aviez une fnction qui prend en paramètre un objet qui doit avoir une propriété "length*,
vous pourriez utiliser l'opérateur "satisfies pour spécifier que le type passé en paramètre doit être un objet
qui implemente l'interface "ArrayLikes*/

/*Imaginons que nous avons un objet qui représente une voiture, et que nous voulons écrire une fonction pour ajouter une voiture à un "garage" virtuel. Le garage ne peut contenir que des voitures qui ont une certaine propriété "nombreDePortes" spécifique. Nous pouvons utiliser l'opérateur "satisfies" pour spécifier que le type de voiture passé en paramètre doit avoir une propriété "nombreDePortes" :*/

interface Voiture {
  marque: string;
  modele: string;
  nombreDePortes: number;
}

class Garage<T extends Voiture> {
  private voitures: T[] = [];

  ajouterVoiture(voiture: T): T[] {
    if (voiture.nombreDePortes) {
      this.voitures.push(voiture);
    } else {
      console.log("La voiture doit avoir un nombre de portes!");
    }
    return this.voitures;
  }
}

const maVoiture: Voiture = {
  marque: "Toyota",
  modele: "Camry",
  nombreDePortes: 4,
};

const monGarage = new Garage<Voiture>();
console.log(monGarage.ajouterVoiture(maVoiture));
