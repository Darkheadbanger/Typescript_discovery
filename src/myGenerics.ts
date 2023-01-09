/*Les génériques sont une fonctionnalité de TypeScript qui vous permet de travailler avec des types de données génériques. Cela signifie que vous pouvez écrire du code qui est indépendant du type de données spécifique qu'il manipule, ce qui le rend plus flexible et réutilisable.*/

function identity<T>(arg: T): T {
  return arg;
}

/*Ici, la fonction identity prend un argument de type T et le retourne. Le type T est un paramètre de type générique, ce qui signifie que lorsque vous appelez la fonction, vous devez spécifier le type que vous souhaitez utiliser pour T. Par exemple:*/

let output = identity<string>("Hello"); // Output est de type string
let output1 = identity<number>(666); // Output est de type string
console.log(output, output1);

function getMaxValues<T>(values: T[]): T {
  let maxValues = values[0];
  for (let i = 0; i < values.length; i++) {
    if (maxValues < values[i]) {
      maxValues = values[i];
    }
  }
  return maxValues;
}

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maxValues = getMaxValues<number>(values);
console.log(maxValues);

const strings = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
let maxStrings = getMaxValues<string>(strings);
console.log(maxStrings);

const date = [new Date(2020, 1, 1), new Date(2020, 2, 1), new Date(2020, 3, 1)];
let maxDate = getMaxValues<Date>(date);
console.log(maxDate);

/*Dans cet exemple, la fonction getMaxValue utilise un générique T pour déclarer le type de la liste de valeurs en entrée et le type de la valeur renvoyée. 
Lors de l'appel de la fonction, vous devez spécifier le type que vous souhaitez utiliser pour T en utilisant la même syntaxe que pour la déclaration du générique.

Ici, nous appelons la fonction avec des listes de différents types de valeurs (nombres, chaînes de caractères et dates) et nous spécifions le type à utiliser pour T en conséquence (number, string et Date). 
Cela nous permet de travailler avec différents types de valeurs sans avoir à écrire de code spécifique pour chaque type.
*/
