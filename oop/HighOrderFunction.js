//map = digunakan untuk memanggil array baru dengan hasil dari fungsi tertentu ke setiap array yang dipanggil
const number = [1, 2, 3, 4, 5];
const double = number.map(function (num) {
  return num * 2;
});
console.log(double);
//filter = digunakan untuk membuat array baru yang isinya elemen yang memenuhi kondisi yang ditentukan
const number = [1, 2, 3, 4, 5];
const even = number.filter(function (num) {
  return num % 2 == 0;
});
console.log(even);
//forEach = metode yang menjalankan fungsi tertentu sekali untuk setiap elemen dalam array. forEach mengembalikan nilai melalui log bukan return
const number = [1, 2, 3, 4, 5];
number.forEach(function (elemen) {
  console.log(elemen);
});
//reduce = digunakan untuk mereduksi array menjadi nilai tunggal melalui fungsi yang diberikan, dapat berupa penjumlahan, penggabungan, atau fungsi lainnya.
const number = [1, 2, 3, 4, 5];
const sum = number.reduce(function (total, sum) {
  return total + sum;
}, 0);
console.log(sum);
