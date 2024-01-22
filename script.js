'use strict'
function pow(num, degree){
    return degree === 0 ? 1 : num * pow(num, degree - 1);
};

const result = pow(4, 3);
console.log(`${result}`);


