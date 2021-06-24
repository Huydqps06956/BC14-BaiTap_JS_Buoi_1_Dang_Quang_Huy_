var chuVi,dienTich,chieuDai,chieuRong;
chieuDai =prompt("Bạn hãy nhập vào Chiều Dài của HCN ");
chieuRong =prompt("Bạn hãy nhập vào Chiều Rộng của HCN");
chieuDai = parseInt(chieuDai);
chieuRong = parseInt(chieuRong);
chuVi= (chieuDai + chieuRong)*2;
dienTich= chieuDai* chieuRong;
console.log("Diện tích HCN :" +dienTich);
console.log("Chu vi HCN :" +chuVi);