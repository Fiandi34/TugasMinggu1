class mobil {
  merk = "";
  warna = "";
  model = "sport";

  constructor(merk, warna, model) {
    this.bmw = merk;
    this.putih = warna;
    this.klasik = model;
  }

  getInfo() {
    return `mobil ini adalah merk ${this.bmw}, ${this.putih}, ${this.klasik}`;
  }
}
const car1 = new mobil("mercedes", "hitam", "muscle");
console.log(car1.getInfo());
