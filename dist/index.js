"use strict";
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
    name;
    email;
    userId;
    // private _courseCount = 1; // Il faut changer au protected si on veu l'utiliser a la classe fille car privé est utilisable uniquement à l'interieur de la classe parente
    _courseCount = 1;
    city = ""; // Private uniquement accessible dans la classe et non en dehors
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    deleteTokken() {
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
    isFamilly = true;
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
