// DESCRIPTION
// Create a function which checks a number for three different properties.
//     is the number prime?
//     is the number even?
//     is the number a multiple of 10?
//     Each should return either true or false, which should be given as an array. Remark: The Haskell variant uses data Property.
//     Examples
// numberProperty(7)  // ==> [true,  false, false]
// numberProperty(10) // ==> [false, true,  true]
// The number will always be an integer, either positive or negative. Note that negative numbers cannot be primes, but they can be multiples of 10:
// numberProperty(-7)  // ==> [false, false, false]
// numberProperty(-10) // ==> [false, true,  true]

function numberProperty(n) {
    function funPrime (n) {
        if( n <= 1 ){
            return false;
        }
        if(n === 2){
            return true;
        }
        else {
            for(let i = 2; i <= Math.sqrt(n); i++){
                if (n % i === 0) {
                    return false;
                }
            }
            return true;
        }
    }

    let prime = funPrime(n);
    let even = n % 2 === 0
    let multiple10 = n % 10 === 0

    return [prime, even, multiple10];
}

console.log("numberProperty: " + numberProperty(7) );