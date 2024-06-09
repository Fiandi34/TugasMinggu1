//promise adalah sebuah object yang mepresentasikan dari operasi asyncronous yang memiliki kondisi yang harus dipenuhi atau memiliki nilai
//promise punya 3 kondisi yaitu :
//pending (tunda/tunggu) = ketika dia sedang dijalankan atau dipanggil
//fullfiled (terselesaikan) = ketika janjinya terpenuhi
//reject (gagal) = ketika janjinya tidak terpenuhi
//xml adalah sebuah fungsi yang digunakan untuk memanggil api
//yang diambil adalah sebuah request http dari server yang dikirim ke kita berupa sebuah response
// api (application programming interface)
//api adalah sebuah kumpulan data yang sudah ada dari aplikasi/server lain yang dapat dikelola kembali
//contoh syntax api:
//{ 
    //"success": true
//  "status": 200
//  "rowcount: 5"
//  "message: successfull"
//  "hero": [
//{
//  "hero_id": 1
//  "hero_name": "escanor"
//  "hero_avatar": "sunshine.jpg"
//  "hero_role: "damage dealer"
//  "hero_speciality: crowcontrol"
//}
//xhr adalah cara asyncronous untuk memanggil request http
//fungsi get adalah untuk mendapat api
//       post adalah untuk mengirimkan data ke api
//       put adalah untuk merubah data di api
//       delete adalah untuk menghapus data di api
//fungsi true menjadi asyncronous(berjalan bersamaan)
//fungsi false menjadi syncronous(berjalan berurutan)
const testimoni = new Promise ((resolve,reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("get","https//linkyangdituju",true);
    xhr.onload = function(){
        if (xhr.status == 200){
            resolve(JSON.parse(xhr.response))
        }
        else {
            reject("error")
        }
    };
    xhr.onerror= function(){
        reject("404 not found")
    };
    xhr.send()
});

async function showTestimoni(){
    try {
        const response = await testimoni
    // await adalah sebagai penanda bahwa butuh waktu tunggu sampai data dari api didapatkan
    // setiap penggunaan async harus pakai await
    let testimoniHTML = "";
    response.array.array.forEach((item)=>{
        testimoniHTML += `div class="testimoni">
        <img src="${item.image}" alt="testimoni" class="profile-testi"/>
        <p class="quote">${item.content}</p>
        <p class="author">${item.author}</p>
        <p class="author">${item.rating} <i class="fa-light fa-star"></i></p>
        </div>`
    });
    document.getElementById("testmonial").innerHTML = testimoniHTML;
    } catch (error){
        console.log(error)
    }
}
//callback = memanggil fungsi kembali
showTestimoni();

async function filterTestimoni(rating){
    try{
        const response = await testimoni;
        let testimoniHTML = "";

        const dataFilter = response.filter(data) => data.rating === rating);
        if (dataFilter.length)
    }
}