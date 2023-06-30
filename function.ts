function sum(a1: number, a2 : number) {

    console.log(a1*a2)

}
sum(2,5)

function checking() : void {
    console.log("Not Getting anything")
}

function getime() : number {
   return (new Date().getDate())
}
console.log(getime())

function Multivalues(a : number, b: number, c?) {
    console.log(a+b+(c | 0))
}
Multivalues(5,10)

function Power(value : number, exponent : number = 5) {
    console.log(value ** exponent)
}
Power(2)

