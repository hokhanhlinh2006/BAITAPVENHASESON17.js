let soTienGui = parseFloat(prompt("Nhập số tiền gửi (VNĐ):"));
let soThangGui = parseInt(prompt("Nhập số tháng gửi:"));
let laiSuatNam = 4.3; 
let laiSuatThang = laiSuatNam / 12 / 100; 
let tienLai = soTienGui * laiSuatThang * soThangGui;
console.log(`Số tiền gửi: ${soTienGui.toLocaleString()} VNĐ`);
console.log(`Số tháng gửi: ${soThangGui} tháng`);
console.log(`Số tiền lãi nhận được: ${tienLai.toLocaleString()} VNĐ`);