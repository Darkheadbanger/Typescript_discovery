// Pourquoi uin interface est il si imporatn en typescript
/*Les interfaces en TypeScript permettent de définir un contrat qui décrit les propriétés et méthodes que doit implémenter une classe ou un objet. Elles sont utiles pour plusieurs raisons :

    Elles permettent de s'assurer que les classes et les objets respectent un certain contrat, ce qui peut être utile pour s'assurer que tous les objets d'une certaine application respectent un certain modèle de données ou une certaine logique métier.

    Elles permettent de bénéficier de la vérification de type de TypeScript, ce qui peut être utile pour éviter les erreurs de développement et s'assurer que le code est correct.

    Elles permettent de découpler le code de l'application, ce qui peut être utile pour faciliter la maintenance et l'extensibilité du code.*/

interface Utilisateur {
  nom: string;
  email: string;
  age: number;
  estPremium: boolean;
}

class MonApplication {
  utilisateur: Utilisateur;

  constructor(utilisateur: Utilisateur) {
    this.utilisateur = utilisateur;
  }

  envoyerEmail() {
    if (this.utilisateur.estPremium) {
      console.log(`Envoi d'un email à ${this.utilisateur.email}`);
    }
  }
}

const utilisateur: Utilisateur = {
  nom: "John",
  email: "john@example.com",
  age: 30,
  estPremium: true,
};

const app = new MonApplication(utilisateur);
app.envoyerEmail(); // Affiche 'Envoi d'un email à john@example.com'

/* Dans cet exemple, l'interface Utilisateur définit les propriétés et méthodes que doit avoir un objet utilisateur.
 La classe MonApplication prend un objet utilisateur en paramètre de son constructeur et s'attend à ce qu'il respecte le contrat défini 
 par l'interface Utilisateur. La vérification de type de TypeScript permet de s'assurer que l'objet utilisateur passé en paramètre possède 
 bien toutes les propriétés et méthodes attendues.*/
