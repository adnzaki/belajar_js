var teks = 'Halo cebong'

/**
 * Dalam source code ini, anda telah belajar cara membuat variabel,
 * cara membuat operasi hitung dengan variabel, membuat fungsi
 * membuat fungsi dengan parameter dan logika kondisi sederhana
 */
function hitung(a, b, tipe) {
    var hasil
    if(tipe == '+') {
        hasil = a + b
    } else if(tipe == '-') {
        hasil = a - b
    } else if(tipe == 'x') {
        hasil = a * b
    } else {
        hasil = a / b
    }

    return hasil
}

console.log(hitung(13, 10, '-'))