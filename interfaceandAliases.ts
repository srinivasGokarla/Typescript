// TypeScript allows types to be defined separately from the variables that use them.

// Aliases and Interfaces allows types to be easily shared between different variables/objects.

type name = string;
type age = number;
type city = string;

type Profile = {
    Age: age,
    Name: name,
    City: city
}

const AgeIinfo : age = 28;
const NameInfo : name = "Srinivas";
const CityInfo  : city = "Vizag"

const prof : Profile = {
    Age : AgeIinfo,
    Name: NameInfo,
    City : CityInfo
}

console.log(prof)

//Type Aliases allow defining types with a custom name (an Alias).

// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

type DateOfyear = number;
type GenderType = string;
type DepartmentType = string;

type Details = {
    year : DateOfyear,
    gender : GenderType,
    department : DepartmentType
}

const Year : DateOfyear = 1995;
const Gender : GenderType = "Male";
const Department : DepartmentType = "Software Developer"

const details : Details =  {
year : Year,
gender : Gender,
department : Department
}

console.log(details)

//Interfaces are similar to type aliases, except they only apply to object types


interface person {
    fullname : string,
    email : string,
    password : string,
    mobile : number,
}

const Person : person =  {
    fullname : "Srinivas Gokarla",
    email : "Srinivas@dxminds.com",
    password : "Gokarla217",
    mobile : 8790844853
}

console.log(Person)

//Extending an interface means you are creating a new interface with the same properties as the original, plus something new.

interface personInfo extends person {
    location : string
}


const PersonInfo : personInfo = {
    fullname : "Srinivas G",
    email : "Srinivasgokarla@dxminds.com",
    password : "srinivas217",
    mobile : 6302484961,
    location : "Hyderabd"
}


console.log(PersonInfo)