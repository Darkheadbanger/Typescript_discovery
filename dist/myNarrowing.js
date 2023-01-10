"use strict";
// Type narrowing
/*Le "type narrowing" en TypeScript est une fonctionnalité qui permet de restreindre le type d'une variable en fonction de son contenu. Par exemple, si vous avez une variable qui peut être soit un nombre entier, soit une chaîne de caractères, le type de cette variable sera "number | string". Cependant, si vous utilisez le type narrowing et que vous affectez une valeur numérique à cette variable, le type de la variable sera automatiquement restreint à "number", ce qui signifie que vous ne pourrez plus affecter de chaîne de caractères à cette variable.
Cela peut être utile pour éviter les erreurs de type lorsque vous travaillez avec des variables qui peuvent avoir plusieurs types possibles.*/
/*Voici un exemple de projet simple qui utilise le type narrowing en TypeScript :

Imaginons que vous avez une fonction qui prend en entrée un paramètre qui peut être soit un nombre entier, soit une chaîne de caractères. Selon le type de cet argument, vous voulez renvoyer une valeur différente.
Vous pouvez utiliser le type narrowing pour éviter les erreurs de type dans ce cas :*/
function getValue(input) {
    if (typeof input === "number") {
        return input * 2;
    }
    else if (typeof input === "string") {
        return input.toUpperCase();
    }
}
function isAdmin(account) {
    // return account.isAdmin; Impossible
    if ("isAdmin" in account) {
        // is la propriété "isAdmin" existe dans l'account sois User soid Admin alors
        return account.isAdmin;
    }
}
