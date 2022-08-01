// EX1:
// Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không
// Giải:

// let a = Number(prompt(`nhập a`));
// let b = Number(prompt(`nhập b`));

// if (a%b===0) {
//     alert(`a chia hết cho b`)
// }
// else{
//     alert(`a không chia hết cho b`)
// }

// EX2:
// Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10.
// Giải:

// let tuoi = Number(prompt(`Nhập tuổi`));

// if (tuoi>=15) {
//     alert(`${tuoi} tuổi: Đủ điều kiện học lớp 10`)
// }
// else {
//     alert(`${tuoi} tuổi: Không đủ điều kiện học lớp 10`)    
// }

// EX3:
// Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0
// Giải:

// let a = Number(prompt(`Nhập số nguyên`));

// if (a>0 && a%1===0) {
//     alert(`${a}: là số nguyên lớn hơn 0`)
// }
// else{
//     alert(`${a}: là số nguyên nhỏ hơn 0`)
// }

// EX4:
// Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó
// Giải:

// let a = Number(prompt(`Nhập số nguyên a`));
// let b = Number(prompt(`Nhập số nguyên b`));
// let c = Number(prompt(`Nhập số nguyên c`));

// Math.ceil(a,b,c);

// if (a>b && a>c && a%1===0) {
//     alert(`${a}: là số nguyên lớn nhất `)
// }
//     else if (b>a && b>c && b%1===0) {
//         alert(`${b}: là số nguyên lớn nhất `)
//     }
//     else if (c>a && c>b && c%1===0) {
//         alert(`${c}: là số nguyên lớn nhất `)
//     }

// EX5: 
// Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ
// Giải:   

// let diem1 = prompt("Nhập điểm 1");
// let diem2 = prompt("Nhập điểm 2");
// let diem3 = prompt("Nhập điểm 3");

// let TB = 0.1*diem1 + 0.2*diem2 + 0.7*diem3 

// if (TB<=3.9) {
//     alert(`${TB} diểm: xếp loại Kém`)
// }
//     else if (TB>=4 && TB<=5.4) {
//         alert(`${TB} điểm: xếp loại Trung Bình Yếu`)
//     }
//     else if (TB>=5.5 && TB<=6.9) {
//         alert(`${TB} điểm: xếp loại Trung Bình`)
//     }
//     else if (TB>=7 && TB<=8.4) {
//         alert(`${TB} điểm: xếp loại Khá`)
//     }
//     else if (TB>=8.5 && TB<=10) {
//         alert(`${TB} điểm: xếp loại Giỏi`)
//     }
    
// EX6:
// Tính hoa hồng nhận được tuỳ theo mức doanh số bán hàng
// Giải:

// let a = Number(prompt("Nhập tiền thu nhập"));

// if (a>0 && a<=5000000) {
//     alert(`Số tiền thuế là ${a*5/100}`);
// } 
//     else if (5000000<=a && a<10000000) {
//         alert(`Số tiền thuế là ${(5000000*5/100) + ((a-5000000)*10/100)}`);
//         } 
//     else if (10000000<=a && a<18000000 ) {
//         alert(`Số tiền thuế là ${(5000000*5/100) + (5000000*10/100) + (a-10000000)*15/100}`);
//         } 
//     else if (a<=18000000 && a<32000000) {
//         alert(`Số tiền thuế là ${(5000000*5/100) + (5000000*10/100) + (8000000*10/100) + ((a-18000000)*20/100)}`);
//         }
//     else if (a<=32000000 && a<52000000) {
//         alert(`Số tiền thuế là ${(5000000*5/100) + (5000000*10/100) + (8000000*10/100) + (14000000*10/100) + ((a-32000000)*25/100)}`);
//         }
//     else if (a<=52000000 && a<80000000) {
//         alert(`Số tiền thuế là ${(5000000*5/100) + (5000000*10/100) + (8000000*10/100) + (14000000*10/100) + (20000000*10/100) + ((a-52000000)*30/100)}`);
//         }
//     else if (a>=80000000) {
//         alert(`Số tiền thuế là ${(5000000*5/100) + (5000000*10/100) + (8000000*10/100) + (14000000*10/100) + (20000000*10/100) + (28000000*10/100) + ((a-80000000)*35/100)}`);
//         }

// EX7: 
// Tính số cân nặng của cơ thể:

// Chỉ số khối cơ thể (Body mass index-BMI) là một thước đo sức khỏe dựa trên cân nặng và chiều cao.
// Nó được tính bằng cách lấy cân nặng đơn vị tính kilogam chia cho bình phương của chiều cao đơn vị tính mét.

// Công thức: bmi = weight / ( height ^ 2 )

// Chỉ số BMI đối với người trên 20 tuổi được phân loại và diễn giải theo bảng sau:
// Ví dụ: 
// Một người có cân nặng là 65Kg và chiều cao là 1.75m thì BMI là 65 / (1.75**2) = 21.22
// Chỉ số này nằm trong khoảng 18.5 đến 25.0 cho nên được phân loại là Normal (bình thường).

// Khối lệnh để phân loại chỉ số cơ thể:
// + Nếu BMI<18.5 : Thiếu cân
// + Nếu 18.5<=BMI<25 : Bình thường
// + Nếu 25<=BMI<30 : Thừa cân
// + Nếu BMI===30 : Béo phì
// + Còn lại: Béo quá! Giảm cân đi

// Giải:

// let mass = prompt(`Nhập cân nặng`);
// let height = prompt(`Nhập chiều cao`);
// let BMI = mass / ((height/100) * (height/100));

// if (BMI<18.5) {
//     alert(`BMI là` +BMI)
//     alert(`Bạn thiếu cân`)
// }
//     else if (BMI>=18.5 && BMI<25) {
//         alert(`BMI là` +BMI)
//         alert(`Bạn bình thường`)
//     }
//     else if (BMI>=25 && BMI<30) {
//         alert(`BMI là` +BMI)
//         alert(`Bạn thừa cân`)
//     }
//     else if (BMI===30) {
//         alert(`BMI là` +BMI)
//         alert(`Bạn béo phì rồi`)
//     }
// else {
//     alert(`BMI là` +BMI)
//     alert(`Béo quá! Giảm cân đi`)
//     }