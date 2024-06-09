const testimoniData = [
  {
    image: (src = "/gambar/antony_43.png"),
    content: "tidak ramah bintang 1",
    author: "Antony",
    rating: 1,
  },
  {
    image: (src = "/gambar/gambar2.jpg"),
    content: "sus",
    author: "Dwayne Johnson",
    rating: 2,
  },
  {
    image: (src = "/gambar/gambar3.jpeg"),
    content: "lumayan lah",
    author: "Ambatukam",
    rating: 3,
  },
  {
    image: (src = "/gambar/gambar4.jpg"),
    content: "Nice",
    author: "Christian Bale",
    rating: 4,
  },
  {
    image: (src = "/gambar/gambar5.jpeg"),
    content: "Bro literally me",
    author: "Ryan Gosling",
    rating: 5,
  },
];

function html(item) {
  return `<div class="testimoni">
        <img src="${item.image}" alt="testimoni" class="profile-testi"/>
        <p class="quote">${item.content}</p>
        <p class="author">${item.author}</p>
        <p class="author">${item.rating} <i class="fa-light fa-star"></i></p>
  </div>`;
}

function allTestimoni() {
  let testiHtml = "";
  testimoniData.forEach((item) => {
    testiHtml += html(item);
  });
  document.getElementById("testimonials").innerHTML = testiHtml;
}
allTestimoni();

function filterTestimoni(rating) {
  let testiHtml = "";
  const testimoniFilter = testimoniData.filter((item) => {
    return item.rating === rating;
  });
  if (testimoniFilter.length === 0) {
    testiHtml = "<h1>Data not found</h1>";
  } else {
    testimoniFilter.forEach((item) => {
      testiHtml += html(item);
    });
  }
  document.getElementById("testimonials").innerHTML = testiHtml;
}
