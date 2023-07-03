//Class members also be given special modifiers which affect visibility.
class Person1 {
    name : string;
}

const person = new Person1()

person.name = "srinivas"

console.log(person)

/*
There are three main visibility modifiers in TypeScript.

public - (default) allows access to the class member from anywhere
private - only allows access to the class member from within the class
protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
*/


class Profile1 {
     name : string;

  public  constructor(name: string) {
        this.name = name
    }

    public getNam(): string {
        return this.name
    }
}

const profil = new Profile1("Srinivas")

console.log(profil.getNam())

//TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.

class Model {
    public constructor( private name : string) {

    }
    public getModel() : string {
        return this.name
    }
}

const model = new Model("Bloggers")

console.log(model.getModel())

//Similar to arrays, the readonly keyword can prevent class members from being changed.


class Company {
    private  readonly name : string;

    public constructor(name : string) {
        this.name = name;
    }
    public getComp() : string {
        return this.name
    }
}

const company = new Company("Dx minds")

console.log(company.getComp())


//Interfaces (covered here) can be used to define the type a class must follow through the implements keyword.

interface Shape  {
  getArea : () => number
}

class Rectangle implements Shape {
    public constructor(protected readonly width : number, protected readonly height : number) {
    }
       public getArea() : number {
        return this.width*this.height
       }
    }
const rectangel = new Rectangle(20,30)

console.log(rectangel.getArea())

//When a class extends another class, it can replace the members of the parent class with the same name.

// Newer versions of TypeScript allow explicitly marking this with the override keyword.


interface Area {
    getShape : () => number
}

class Rect implements Area {
    public constructor(protected readonly wid : number, protected readonly hig : number) {

    }
    public getShape(): number {
        return this.wid*this.hig
    }

    public toString(): string {
        return `Rectangle[width=${this.wid}, height=${this.hig}]`;
      }
}

class Square extends Rect {
    public constructor( wid: number) {
        super(wid, wid);
    }

    public toString(): string {
        return `square[width=${this.wid}]`
    }
}

const mysqr = new Square(25)

console.log(mysqr.toString())


