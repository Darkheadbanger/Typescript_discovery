// Discrimintaed Unions

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}
interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}
type Shape = Circle | Square | Rectangle;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2; // ** puissance 2^2 par ex
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.length * shape.width;
    default:
      const _defaultForShape: never = shape;
      throw new Error(`Invalid shape ${_defaultForShape}`);
  }
}

/*Les unions discriminées (ou discriminated unions) en TypeScript sont un moyen de gérer les cas où un objet peut avoir plusieurs types possibles, mais où chaque type a une propriété spécifique qui peut être utilisée pour discriminer entre les types. Cela vous permet de créer des types qui ont des propriétés spécifiques qui permettent de les distinguer les uns des autres, et de traiter ces types de manière appropriée.*/

/*Ce code utilise les unions discriminées de TypeScript pour définir un type Shape qui peut être soit un objet de type Circle, soit un objet de type Square, soit un objet de type Rectangle. Chacun de ces types a une propriété discriminante kind qui peut être utilisée pour les distinguer les uns des autres.

Ensuite, il y a une fonction getArea qui prend en entrée un objet de type Shape et utilise un switch case pour vérifier la propriété discriminante kind pour déterminer le type d'objet passé en entrée. Selon la valeur de kind, la fonction retournera le résultat approprié, le calcul de l'aire pour un cercle, un carré ou un rectangle. En utilisant la propriété kind qui est une propriété spécifique de chaque interface , on peut s'assurer qu'on a accès aux propriétés qu'on souhaite utiliser pour calculer l'aire d'une forme.

Il y a un cas par défaut qui utilise une variable de type never pour générer une erreur. Cela garantit que si un objet de type non géré est passé à la fonction getArea, une erreur sera générée indiquant que cela n'est pas un shape valide. Cela empêche les erreurs potentielles causées par des bugs ou des entrées utilisateur incorrectes. C'est également une bonne pratique de toujours inclure un cas par défaut pour gérer les cas imprévus.*/
