"use strict";
/*Les classes génériques sont des classes qui utilisent un ou plusieurs paramètres de type générique pour rendre leur code plus flexible et réutilisable. Elles vous permettent de définir une classe qui peut travailler avec différents types de données sans avoir à écrire de code spécifique pour chaque type.*/
class DataContainer {
    data = [];
    constructor(data) {
        this.data = data;
    }
}
// Utilisation de la classe generiques avec différents tyoes de données
let numbersGenericsClass = new DataContainer([1, 2, 3, 4]);
let stringsGenericsClass = new DataContainer(["a", "b", "c", "d"]);
console.log(numbersGenericsClass, stringsGenericsClass);
/*Dans cet exemple, la classe DataContainer utilise un générique T pour déclarer le type des données stockées dans le tableau data. Lors de l'instanciation de la classe, vous devez spécifier le type à utiliser pour T en utilisant la même syntaxe que pour la déclaration du générique.*/
/*Voici un exemple d'utilisation des classes génériques dans un projet de la vie réelle:

Imaginons que vous écrivez une bibliothèque de fonctions de validation pour vérifier la validité des données d'entrée. Vous souhaitez que votre bibliothèque soit capable de travailler avec différents types de données, tels que les chaînes de caractères, les nombres et les objets.

Vous pouvez utiliser une classe générique pour écrire une classe unique qui prend en charge tous ces types de données, comme ceci:*/
class Validator {
    validate(data) {
        // Pour les chaînes de caractères, vérifiez si la chaîne est non vide
        if (typeof data === "string") {
            return data.length > 0;
        }
        // Pour les nombres, vérifiez si le nombre est positif
        if (typeof data === "number") {
            return data > 0;
        }
        // Pour les objets, vérifiez si l'objet contient au moins une propriété
        if (typeof data === "object" && data !== null && data !== undefined) {
            return Object.keys(data).length > 0;
        }
        // Pour tous les autres types, renvoie false
        return false;
    }
}
// Utilisation de la classe générique avec différents types de données
let stringValidator = new Validator();
let numberValidator = new Validator();
let objectValidator = new Validator();
console.log("ici :", stringValidator, numberValidator, objectValidator);
/*Dans cet exemple, la classe Validator utilise un générique T pour déclarer le type de données à valider. Lors de l'instanciation de la classe, vous devez spécifier le type à utiliser pour T en utilisant la même syntaxe que pour la déclaration du générique. Cela nous permet d'utiliser la classe avec différents types de données sans avoir à écrire de code spécifique pour chaque type.*/
