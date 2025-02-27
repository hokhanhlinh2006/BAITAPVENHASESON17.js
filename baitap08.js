let date1 = new Date(prompt("Nhập ngày thứ nhất (YYYY-MM-DD):"));
let date2 = new Date(prompt("Nhập ngày thứ hai (YYYY-MM-DD):"));
if (isNaN(date1.getTime()) || isNaN(date2.getTime())) {
    console.log("Vui lòng nhập đúng định dạng YYYY-MM-DD.");
} else {
    let difference = Math.abs((date2 - date1) / (1000 * 60 * 60 * 24));
    console.log(`Độ lệch là ${difference} ngày`);
}
