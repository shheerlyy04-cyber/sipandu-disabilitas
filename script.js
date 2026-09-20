// ================================
// SIPANDU DISABILITAS
// JavaScript Website
// ================================

// 1. MEMPERBESAR TEKS
function perbesarTeks() {
  document.body.style.fontSize = "18px";
}

// 2. MENGECILKAN TEKS
function perkecilTeks() {
  document.body.style.fontSize = "14px";
}

// 3. KONTRAS TINGGI
function kontras() {
  document.body.classList.toggle("high-contrast");
}

// 4. MEMBACA TEKS DENGAN SUARA
function bacakan() {
  const teks = document.body.innerText;

  if ("speechSynthesis" in window) {
    const suara = new SpeechSynthesisUtterance(teks);

    suara.lang = "id-ID";
    suara.rate = 0.9;
    suara.pitch = 1;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(suara);
  } else {
    alert("Fitur pembaca suara tidak tersedia di perangkat ini.");
  }
}

// 5. BERHENTI MEMBACA
function berhentiBaca() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

// 6. MENAMPILKAN PILIHAN KEBUTUHAN
function pilihKebutuhan(kebutuhan) {

  let pesan = "";

  if (kebutuhan === "penglihatan") {
    pesan =
      "Untuk pengguna dengan hambatan penglihatan, gunakan fitur Bacakan dan Perbesar Teks.";
  }

  else if (kebutuhan === "pendengaran") {
    pesan =
      "Untuk pengguna dengan hambatan pendengaran, informasi tersedia dalam bentuk teks.";
  }

  else if (kebutuhan === "mobilitas") {
    pesan =
      "Untuk pengguna dengan hambatan mobilitas, tersedia informasi bantuan layanan.";
  }

  else if (kebutuhan === "bantuan") {
    pesan =
      "Jika membutuhkan bantuan, silakan hubungi petugas DPMPTSP Pacitan.";
  }

  alert(pesan);
}

// 7. INFORMASI LAYANAN
function tampilkanLayanan(layanan) {

  let judul = "";
  let isi = "";

  if (layanan === "nib") {
    judul = "Layanan NIB";
    isi =
      "Informasi mengenai Nomor Induk Berusaha (NIB). Persyaratan dan prosedur perlu dikonfirmasi kepada petugas DPMPTSP.";
  }

  else if (layanan === "perizinan") {
    judul = "Layanan Perizinan";
    isi =
      "Informasi mengenai pelayanan perizinan. Persyaratan dapat berbeda sesuai jenis layanan.";
  }

  else if (layanan === "konsultasi") {
    judul = "Konsultasi";
    isi =
      "Masyarakat dapat berkonsultasi mengenai layanan yang tersedia di DPMPTSP.";
  }

  else if (layanan === "pengaduan") {
    judul = "Pengaduan";
    isi =
      "Gunakan layanan pengaduan untuk menyampaikan pertanyaan, kritik, atau kendala pelayanan.";
  }

  alert(judul + "\n\n" + isi);
}

// 8. KEMBALI KE ATAS
function keAtas() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// 9. PESAN SELAMAT DATANG
window.addEventListener("load", function () {
  console.log("SIPANDU DISABILITAS berhasil dimuat.");
});