//tanya ketika web sudah diload semua
document.addEventListener("DOMContentLoaded", function () {
    // Tanya pengguna
    const username = window.prompt("Masukkan nama pengguna:");
    
    // Update <span> pengguna
    const usernameSpan = document.getElementById("pengguna");
    if (username) {
        usernameSpan.textContent = username;
    } else {
        usernameSpan.textContent = "Pengguna"; // Default
    }
})

//slide gambar
var currImage = 0; //index gambar
var images = document.getElementsByClassName("sliding-image");

showSlide()

function showSlide(){
    for (i = 0; i < images.length; i++){
        images[i].style.display = "none";
    } //hide semua gambar
    if (currImage > images.length -1){ //-1 untuk array yang dimulai dari nol
        currImage = 0; //reset index gambar
    }
    images[currImage].style.display = "block"; //display
    currImage++; //next image
    setTimeout(showSlide, 5000) //panggil fungsi tiap 5 detik
}

//validation

function validateForm() {
    const nama = document.forms["form-contact"]["nama"].value;
    const tl = document.forms["form-contact"]["tl"].value;
    const jenis = document.forms["form-contact"]["jenis"].value;
    const pesan = document.forms["form-contact"]["pesan"].value;

    if (nama  == "" || tl  == "" || jenis  == "" || pesan == "" ) {
        alert("Form ada yang belum diisi");
        return false;
    }

    return rangkumForm(nama, tl, jenis, pesan)
}

function rangkumForm(nama, tl, jenis, pesan) {
    document.getElementById("output-nama").innerHTML = nama;
    document.getElementById("output-tl").innerHTML = tl;
    document.getElementById("output-jenis").innerHTML = jenis;
    document.getElementById("output-pesan").innerHTML = pesan;

    return false;
}