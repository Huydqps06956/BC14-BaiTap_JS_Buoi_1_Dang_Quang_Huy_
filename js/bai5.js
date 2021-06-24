var n,unit,ten,sum;
n = prompt("Bạn hãy nhập 1 số có 2 chữ số cần tính tổng ký số :");
ten = Math.floor(n%100/10);
unit = n%10;
sum= unit + ten;
console.log("Tổng ký số của "+n+" là : " +sum);