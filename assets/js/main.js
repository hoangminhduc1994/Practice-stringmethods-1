// bai 1

// let checkSubstrings = (mainString, subString) => {
//     return mainString.indexOf(subString) !== -1;
// }
// let mainString = "Hello, World!";
// let subString1 = "Hello";
// let subString2 = "Python";

// console.log(checkSubstrings(mainString, subString1));
// console.log(checkSubstrings(mainString, subString2));

// bai 2

//  let rutNganChuoi = (chuoi) => {
//     if (chuoi.length <= 8) {
//         return chuoi;
//     } else {
//         return chuoi.substring(0, 8) + '...';
//     }
// }
// let chuoi = ("Xin chào các bạn");
// let result = rutNganChuoi(chuoi);
// console.log(result);


// bai 3

let kiemTraChuoiDoiXung = (chuoi) => {
    chuoi = chuoi.replace(/\s/g, '').toLowerCase();
    
    for (let i = 0; i < Math.floor(chuoi.length / 2); i++) {
        if (chuoi[i] !== chuoi[chuoi.length - 1 - i]) {
            return false;
        }
    }   
    return true;
}

let chuoi = ("Race car")
var ketQua = kiemTraChuoiDoiXung(chuoi);
console.log("Chuỗi là chuỗi đối xứng:", ketQua);


// bai 5

let chuyenSnakeCase = (chuoi1) => {
    chuoi1 = chuoi1.toLowerCase();
    chuoi1 = chuoi1.replace(/\s+/g, '_');
    return chuoi1;
}

let chuoi1 = ("HELLO world");
let ketQua = chuyenSnakeCase(chuoi1);
console.log("Chuỗi sau khi chuyển sang dạng snake_case:", ketQua);