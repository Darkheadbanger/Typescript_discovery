// classes

// class User {
//   public name: string;
//   private email: string; // Par défaut est publique
//   readonly city: string = ""; // Private uniquement accessible dans la classe et non en dehors
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//     // this.city = ""; // possibilité de l'utiliser ici en tant que public, dans la classe
//   }
// }

// Les pros écrire de cette manière
class User {
  // private _courseCount = 1; // Il faut changer au protected si on veu l'utiliser a la classe fille car privé est utilisable uniquement à l'interieur de la classe parente
  protected _courseCount = 1;

  readonly city: string = ""; // Private uniquement accessible dans la classe et non en dehors
  constructor(
    public name: string,
    public email: string,
    private userId: number
  ) {}

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  private deleteTokken() {
    console.log("Tokken deleted");
  }

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error(`Course count should be more than`);
    }

    this._courseCount = courseNum;
  }
}

class SubUser extends User {
  isFamilly: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

// const hitesh = new User("David", "davidbouhaben@yahoo.co.id");
const hitesh = new User("David", "davidbouhaben@yahoo.co.id", 20);
// hitesh.city = "Delhi"
hitesh.city;

// hitesh. // On ne peut pas acceder la méthode deleteTokken car c'est une méthode privé, uniquement accesible à l'intérieur de la classe
// Protected ne peut pas petre utilisé ici comme privé mais possible de l'utiliser dans la classe fille dans le cas de l'héritage
