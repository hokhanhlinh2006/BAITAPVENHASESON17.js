let number = prompt("Nhập một số bất kỳ:");
number = parseFloat(number);
if (!isNaN(number)) {
    let sqrtNumber = Math.sqrt(number);
    console.log(`Căn bậc hai của ${number} là: ${sqrtNumber.toFixed(2)}`);
} else {
    console.log("Vui lòng nhập một số hợp lệ:");
}