const welkom = function(age){
    // console.log(age);
    if( age >= 18){
        return true
    }else{
        return false
    }
}

const adult = function(age){
    if (welkom(age)) { return "Hello there"}
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


const calculVat = function (basePrice, Vatperc){
    return basePrice * ( Vatperc/100);

}

const calculPriceIncVat = function(basePrice, VatPerc){
    const vat = calculVat(basePrice, VatPerc)
    return vat + basePrice
}

console.log(calculPriceIncVat(1000, 21));


// ------

const calculBasePrice = function(priceIncVat, vatPercent){
    const baseprix = priceIncVat / (( 100 + vatPercent) /100)
    return baseprix
}


const calcBasePriceAndVat = function (priceIncVat, vatPercent){
    const baseprix = calculBasePrice(priceIncVat, vatPercent)
    const VAT = priceIncVat - baseprix
    return [baseprix, VAT ]
}


console.log(calcBasePriceAndVat(1210, 21));
