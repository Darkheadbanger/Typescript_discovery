"use strict";
// instanceOf ne peut qu'être utilisé pour le mot new donc instance d'une classe
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
/* l'operateur "instanceof" en TS fonctionne de la même manière qu'en JS. Il permet de
il permet de determiner si un objet est une instance d'un certain type de constructeur
ou non. Il renvoie "true* si l'objet à gauche de l'opérateur est une instance
de la classe ou du constructeur spécifié à droite de l'opérateyrn et false sinon */
// Voici un exemple de ce à quoi cela pourrait ressembler en utilisant un type de constructeur :
class A {
    methodA() {
        console.log("Je suis la méthode de la classe A");
    }
}
class B {
    methodB() {
        console.log("Je suis de la méthode B");
    }
}
let myVariable = new A();
// Certains code qui determine la valeur de myVariable
if (myVariable instanceof A) {
    myVariable.methodA();
    // TS va checker si il est safe, car vous avez fait la restriction ce type
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird food";
    }
}
/*Les prédicats de types en Typescript sont des fonctions qui permettent de vérifier le type d'un paramètre ou d'une variable, et de "narrow" (restreindre) le type de cette variable en fonction du résultat de cette vérification. Ces prédicats de types sont généralement utilisés lorsque vous travaillez avec des types unions, qui peuvent avoir plusieurs valeurs possibles.*/
/*Lorsque vous utilisez un prédicat de type dans une position de gardien de type, le type du paramètre est restreint à celui qui est indiqué dans le prédicat de type.*/
/*Dans le code que vous avez fourni, la fonction isFish est un prédicat de type, qui prend en entrée un paramètre pet qui peut être de type Fish ou de type Bird, et retourne un booléen indiquant si pet est un Fish. Cette fonction est utilisée dans le guard de type if (isFish(pet)) pour restreindre le
"le type du paramètre est restreint à celui qui est indiqué dans le prédicat de type" était incomplète.*/
// Voici un exemple de types de preicates
class Car {
    drive() {
        console.log("Vroom vroom");
    }
}
class Boat {
    sail() {
        console.log("Splash splash");
    }
}
let vehicle = new Car();
function isCar(vehicle) {
    return vehicle.drive !== undefined;
}
function isBoat(vehicle) {
    return vehicle.sail !== undefined;
}
if (typeof vehicle.drive === "function") {
    vehicle.drive();
}
else if (vehicle instanceof Boat) {
    vehicle.sail();
}
else {
    console.log("Unsupported vehicle type");
}
/*Ce code vérifie si l'objet vehicle est une instance de la classe Car ou Boat, et appelle la méthode appropriée en conséquence.*/
/*La première condition vérifie si la propriété drive de vehicle est une fonction en utilisant typeof vehicle.drive === "function". Si cette condition est vraie, cela signifie que vehicle est une instance de la classe Car, et la méthode drive est appelée.

La deuxième condition vérifie si vehicle est une instance de la classe Boat en utilisant vehicle instanceof Boat. Si cette condition est vraie, cela signifie que vehicle est une instance de la classe Boat, et la méthode sail est appelée.

Si aucune des conditions n'est vraie, cela signifie que vehicle n'est pas une instance valide, et un message "Unsupported vehicle type" est affiché dans la console.

Il y a aussi des fonctions isCar, isBoat qui utilise as operator to narrow down types and make sure that if isCar return true then vehicle is Car and so on.*/
