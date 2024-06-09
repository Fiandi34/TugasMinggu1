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
class supercar extends mobil {
  constructor(merk, warna, tipe, model) {
    super(merk, warna, model);
    this.super = tipe;
  }
  getInfo() {
    return `${super.getInfo()}. mobil ini bertipe ${this.super}`;
  }
}
const mobil2 = new mobil("buggati", "hitam", "veyron", "supercar");
console.log(mobil2.getInfo());
