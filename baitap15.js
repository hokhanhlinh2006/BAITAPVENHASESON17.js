let r = parseFloat(prompt("Nhập bán kính của hình cầu:"));
const PI = Math.PI;
let thetich = (4 / 3) * PI * Math.pow(r, 3);
let dientichbemat = 4 * PI * Math.pow(r, 2); 
let chuvilonnhat = 2 * PI * r; 
console.log(`Thể tích hình cầu: ${thetich.toFixed(2)}`);
console.log(`Diện tích bề mặt hình cầu: ${dientichbemat.toFixed(2)}`);
console.log(`Chu vi lớn nhất của hình cầu: ${chuvilonnhat.toFixed(2)}`);