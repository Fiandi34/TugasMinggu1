class mobil {
  constructor(merk, warna, model) {
    this.bmw = merk;
    this.putih = warna;
    this.klasik = model;
  }

  driver() {
    return `${this.bmw} ${this.putih} ${this.klasik}`;
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
class razor extends supercar {
  driverRazor() {
    return `mobil yang memiliki ${super.getInfo()}`;
  }
}
const mobil1 = new mobil("bmw", "putih", "klasik");
const carsuper = supercar("buggati", "hitam", "veyron", "super");
const list = new razor("buggati", "biru", "cyiron", "super");
console.log(mobil1.driver());
console.log(carsuper.getInfo());
console.log(list.driverRazor());
