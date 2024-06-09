class mobil {
  merk = "";
  warna = "";
  model = "";

  constructor(merk, warna, model) {
    this.bmw = merk;
    this.putih = warna;
    this.klasik = model;
  }

  getInfo() {
    return `mobil ini adalah merk ${this.bmw} warna ${this.putih} yang dibuat tahun ${this.klasik}`;
  }
}
