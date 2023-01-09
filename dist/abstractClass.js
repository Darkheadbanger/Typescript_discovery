"use strict";
// abstract classes
class TakePhoto {
    cameraModel;
    filter;
    constructor(cameraModel, filter) {
        this.cameraModel = cameraModel;
        this.filter = filter;
    }
    getReelTime() {
        // some complex calxulation
        return 8;
    }
}
class Instagram extends TakePhoto {
    cameraMode;
    filter;
    burst;
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const hc = new Instagram("test", "test", 3);
/* Une classe abstraite en TypeScript est une classe qui ne peut pas être instanciée directement.
Elle sert plutôt de modèle pour d'autres classes qui en héritent et qui implémentent les méthodes déclarées dans la classe abstraite.
Une classe abstraite peut déclarer des méthodes et des propriétés abstraites, qui sont des méthodes et des propriétés qui n'ont pas de corps et qui doivent être implémentées par les classes qui en héritent.
Les classes qui héritent d'une classe abstraite doivent impérativement implémenter toutes les méthodes et propriétés abstraites déclarées dans cette classe. */
/*Les classes abstraites sont utiles pour fournir une structure commune à plusieurs classes qui partagent des caractéristiques similaires, mais qui ne peuvent pas être instanciées elles-mêmes.
Elles permettent de définir un comportement ou une interface commune à ces classes et de forcer les classes qui en héritent à implémenter certaines méthodes ou propriétéss*/
/* Voici un exemple de projet de vie réelle utilisant une classe abstraite en Typescript:

Imaginons que vous travaillez sur une application de gestion de stock pour une entreprise de vente en ligne.
Vous pouvez utiliser une classe abstraite pour représenter les différents types d'articles que l'entreprise peut vendre:*/
class Item {
    id;
    name;
    price;
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
class PhysicalItem extends Item {
    weight;
    constructor(id, name, price, weight) {
        super(id, name, price);
        this.weight = weight;
    }
    description() {
        return `${this.name} (physical item) - $${this.price}`;
    }
}
class DigitalItem extends Item {
    constructor(id, name, price, dwonload_URL) {
        super(id, name, price);
    }
    description() {
        return `${this.name} (digital item) - $${this.price}`;
    }
}
const physicalItems = new PhysicalItem(1, "T shirt", 20, 200);
console.log(physicalItems.description());
const digitalItems = new DigitalItem(1, "Film Avatar", 10, "https://www.youtube.com/watch?v=kbI644DN4Dc");
console.log(digitalItems.description());
/*Dans cet exemple, la classe Item est une classe abstraite qui définit un constructeur et une méthode abstraite description. Les classes concrètes PhysicalItem et DigitalItem étendent la classe Item et implémentent la méthode description de manière spécifique à chaque type d'article.

Vous pouvez créer des instances de PhysicalItem et de DigitalItem en utilisant leur constructeur et en appelant leur méthode description.

Une classe abstraite en Typescript est une classe qui ne peut pas être instanciée directement. Elle sert de modèle pour les classes concrètes qui étendent cette classe et qui doivent implémenter ses méthodes abstraites.
Les méthodes abstraites sont des méthodes qui n'ont pas de corps et qui doivent être implémentées par les classes concrètes qui étendent la classe abstraite.*/
