//Tasca 1
let salaries = 
{
    John: 100,
    Ann: 160,
    Pete: 130
}

function sumarSalaries (salaries)
{
    let total = 0
    for (key in salaries)
    {
        total = total + salaries[key];
    }
    console.log("La suma de todos los salarios da un total de " + total)
    return total;
}
sumarSalaries(salaries);


//Tasca 2
// a) Copia per referencia
let a =
{
    Nombre: "kevin",
    Apellido: "Tejeda",
    Edad: 24
}

let b = a
console.log(b)

//b) clone
let c = Object.assign({}, a)
console.log(c)

//c) clonat recursiu

let d = structuredClone(a)
console.log(d)

//Tasca3

function marry(man, woman){
    woman.husband = man;
    man.wife = woman;

    return{
        father:man,
        mother:woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
})

// delete family.father;
// delete family.mother.husband;

// family = null

console.log(family)

//a) El resultado de borrar tanto "family.father" como "family.mother.husband" lo que provoca es que el garbage collector prescindira
//   de la variable father debido a que se han eliminado todas las referencias a este pero deja el objeto de family con el name: Ann

//b) Si hacemos un family = null el garbage collector tendria como candidatos para ser eliminados las variables "father" y "mother" al
//   igual que al objeto family debido a que null elimina las referencias que tiene con la funcion "marry"

//Tasca 5

function makeUser(){
    return {
        name: "John",
        ref: function ()  {
            ref
    }
}
}
let user = makeUser();
console.log(user.ref)

//a) Aqui user.ref hace referencia al objeto window debido a que este this esta siendo usado dentro de un contexto global
//b) Se podria solucionar usando una funcion flecha para que asi "this" siempre haga referenca al objeto que se este creando.

//Tasca 6

let calculator = {
    read() {
        this.num1 = parseInt(prompt("Introduce el primer valor")),
        this.num2 = parseInt(prompt("Introduce el segundo valor"))
    },
    sum (){
        let total = this.num1 + this.num2;
        alert("El total de la suma es de " + total)
        return total
    },
    mul () {
        let total = this.num1 * this.num2;
        alert("El total de la multiplicacion es de " + total)
        return total
    }

}

// calculator.read();
// alert( calculator.sum())
// alert( calculator.mul())


//Tasca 7

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;

    },
    showStep: function() {
        console.log(this.step);
        return this;
    }
};

ladder.up().up().down().showStep().down().showStep();

//TEST

// let user9 = {
//     name: "Eva",
//     greet: function() {
//         console.log("Hello, " + this.name);
//     }
// };
// let greetFunctionz = user9.greet;
// greetFunctionz();



// let user8 = {
//     name: "Eva",
//     greet: function() => {
//         console.log("Hello, " + this.name)
//     }
// };

// let greetFunction = user8.greet;
// greetFunction();


 