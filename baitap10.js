let n = parseInt(prompt("Nhập một số n:"));
let sqrtN = Math.sqrt(n);
let result = (sqrtN % 1 === 0) ? `${n} là số chính phương` : `${n} không phải số chính phương`;
console.log(result);