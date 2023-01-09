"use strict";
/*Les génériques sont une fonctionnalité de TypeScript qui vous permet de travailler avec des types de données génériques. Cela signifie que vous pouvez écrire du code qui est indépendant du type de données spécifique qu'il manipule, ce qui le rend plus flexible et réutilisable.*/
function identity(arg) {
    return arg;
}
/*Ici, la fonction identity prend un argument de type T et le retourne. Le type T est un paramètre de type générique, ce qui signifie que lorsque vous appelez la fonction, vous devez spécifier le type que vous souhaitez utiliser pour T. Par exemple:*/
let output = identity("Hello"); // Output est de type string
let output1 = identity(666); // Output est de type string
console.log(output, output1);
function getMaxValues(values) {
    let maxValues = values[0];
    for (let i = 0; i < values.length; i++) {
        if (maxValues < values[i]) {
            maxValues = values[i];
        }
    }
    return maxValues;
}
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maxValues = getMaxValues(values);
console.log(maxValues);
const strings = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let maxStrings = getMaxValues(strings);
console.log(maxStrings);
const date = [new Date(2020, 1, 1), new Date(2020, 2, 1), new Date(2020, 3, 1)];
let maxDate = getMaxValues(date);
console.log(maxDate);
/*Dans cet exemple, la fonction getMaxValue utilise un générique T pour déclarer le type de la liste de valeurs en entrée et le type de la valeur renvoyée.
Lors de l'appel de la fonction, vous devez spécifier le type que vous souhaitez utiliser pour T en utilisant la même syntaxe que pour la déclaration du générique.

Ici, nous appelons la fonction avec des listes de différents types de valeurs (nombres, chaînes de caractères et dates) et nous spécifions le type à utiliser pour T en conséquence (number, string et Date).
Cela nous permet de travailler avec différents types de valeurs sans avoir à écrire de code spécifique pour chaque type.
*/
// function aFunction<T, U>(arg1: T, arg2: U): T{
//   // code de la fonction ici
// }
// Nous pouvons créer plusieurs generics
// On peut aussi utilise rles generics pour les fonctions fléches et un tableau
// Déclaration d'un tableau de génériques
// let valuesArr: Array<T> = [];
// Utilisation d'un générique dans une fonction fléchée
let aFunction = (arg) => {
    // code de la fonction ici
    return arg;
};
// Appel de la fonction avec un générique spécifié
let result = aFunction("hello");
