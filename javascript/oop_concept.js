//Constructor functions
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

const person1 = new Person('John', 'Doe', '05-06-1989')
console.log(person1)

//Constructor functions in function
function PersonFun(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getFullYear();
    }
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const personFun1 = new PersonFun('John', 'Doe', '05-06-1989')
console.log(personFun1.getBirthYear())
console.log(personFun1.getFullName())

// Along with Constructor with Prototype
function PersonPrototype(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

PersonPrototype.prototype.getBirthYear = function(){
        return this.dob.getFullYear();
    }

PersonPrototype.prototype.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }

const personPrototype = new PersonPrototype('John', 'Doe', '05-06-1989')
console.log(personPrototype)
console.log(personPrototype.getFullName())

// Class In OOP Concept.

class PersonClass {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const personClass = new PersonClass('John', 'Doe', '05-06-1989')
console.log(personClass)
