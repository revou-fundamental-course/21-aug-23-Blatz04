//Slides
var currImage = 0;
var images = document.getElementsByClassName("sliding-image");
showSlide()
function showSlide(){
    for (i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }
    if (currImage > images.length -1){
        currImage = 0;
    }
    images[currImage].style.display = "block";
    currImage++;
    setTimeout(showSlide, 5000)
}

// // Tanya ketika web sudah diload semua
// document.addEventListener("DOMContentLoaded", function () {
//     // Tanya pengguna
//     const username = window.prompt("Masukkan nama pengguna:");
    
//     // Update <span> pengguna
//     const usernameSpan = document.getElementById("pengguna");
//     if (username) {
//         usernameSpan.textContent = username;
//     } else {
//         usernameSpan.textContent = "Pengguna"; // Default
//     }
// })
