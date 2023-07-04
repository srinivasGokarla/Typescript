//TypeScript comes with a large number of types that can help with some common type manipulation, usually referred to as utility types.

// This chapter covers the most popular utility types.

//Partial changes all the properties in an object to be optional.

interface Point {
    X : number;
    Y : string
}


const PointFace : Partial <Point> = {}

console.log(PointFace.X = 10)

//Required changes all the properties in an object to be required.

interface Car {
    make : string,
    model: number,
    mailege : number
}

const CarInfo : Required <Car>  = {
    make :"Honda",
    model : 2023,
    mailege : 60
}

console.log(CarInfo)