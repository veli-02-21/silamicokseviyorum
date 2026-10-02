
/* =========================
   İLİŞKİ SÜRESİ
========================= */

const baslangicTarihi = new Date("2026-09-05T00:00:00");


function sayaciGuncelle() {

    const simdi = new Date();

    let fark = simdi - baslangicTarihi;

    if (fark < 0) {
        fark = 0;
    }


    /* Toplam saniye */

    const toplamSaniye = Math.floor(fark / 1000);


    /* Saniye */

    const saniye = toplamSaniye % 60;


    /* Toplam dakika */

    const toplamDakika = Math.floor(toplamSaniye / 60);

    const dakika = toplamDakika % 60;


    /* Toplam gün */

    const toplamGun = Math.floor(
        toplamSaniye / (60 * 60 * 24)
    );


    /* Hafta */

    const hafta = Math.floor(
        toplamGun / 7
    );


    /* Ay */

    let ay =
        (new Date().getFullYear() - baslangicTarihi.getFullYear()) * 12
        +
        (new Date().getMonth() - baslangicTarihi.getMonth());


    if (
        simdi.getDate() < baslangicTarihi.getDate()
    ) {
        ay--;
    }


    if (ay < 0) {
        ay = 0;
    }


    /* Ekrana yazdır */

    document.getElementById("months").textContent = ay;

    document.getElementById("weeks").textContent = hafta;

    document.getElementById("days").textContent = toplamGun;

    document.getElementById("minutes").textContent = dakika;

    document.getElementById("seconds").textContent = saniye;
}


/* İlk çalıştırma */

sayaciGuncelle();


/* Her saniye güncelle */

setInterval(sayaciGuncelle, 1000);


/* =========================
   MÜZİK
========================= */


const music = document.getElementById("music");
const playButton = document.getElementById("playButton");
const record = document.getElementById("record");
const tonearm = document.getElementById("tonearm");

playButton.addEventListener("click", function () {

    if (music.paused) {

        music.play();

        // Plak dönmeye başlar
        record.classList.add("playing");

        // Pikap kolu plağın üzerine iner
        tonearm.classList.add("playing");

        playButton.textContent = "❚❚";

    } else {

        music.pause();

        // Plak durur
        record.classList.remove("playing");

        // Pikap kolu geri kalkar
        tonearm.classList.remove("playing");

        playButton.textContent = "▶";
    }

});


music.addEventListener("ended", function () {

    record.classList.remove("playing");

    tonearm.classList.remove("playing");

    playButton.textContent = "▶";

});