//Bài 5: Tính tổng 2 ký số
//Bước 1: tạo biến cho số cần nhập
//Bước 2: Tìm chữ số hàng chục, hàng đơn vị sau đó cộng 2 số vừa tìm được
//Bước 3: in kết quả tổng ra màn hình


var num = 23
var so_hang_dv = num % 10
var so_hang_chuc = Math.floor(num/10)
var tong = so_hang_dv + so_hang_chuc
console.log("tong",tong)