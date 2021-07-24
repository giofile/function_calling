const welkom = function(age){
    // console.log(age);
    if( age >= 18){
        return true
    }else{
        return false
    }
}

const adult = function(age){
    if (age >18) { return "Hello there"}
    else{
        return "Hey kiddo"
    }
}


const test = adult(13)
console.log(test);
const test1 = adult(24)
console.log(test1);
const test2 = adult(90)
console.log(test2);



const taxBerekening = function(basePrice, aantal){
    const sum = basePrice * aantal;
    return sum
}

const abc =taxBerekening(2,3)
console.log(abc);


const foodTax = function(basePrice, aantal) {
    const sumTwo = taxBerekening() * 1.09;
   console.log(sumTwo);
    }

foodTax(3,2)


const goodiesTax = function(basePrice, aantal){
    const sumThree = taxBerekening() * 1.21
    console.log(sumThree);
}

goodiesTax(1,2)



const base= function(amount, perc){
    const baseprix = amount / ( perc / 100)
    return baseprix
  
}
const teste = base(56/1.09)
console.log(teste);
