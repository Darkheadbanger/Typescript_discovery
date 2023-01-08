"use strict";
// classes
class User {
    name;
    email;
    city = "";
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}
const hitesh = new User("David", "davidbouhaben@yahoo.co.id");
