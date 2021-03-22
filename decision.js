var nilai = 80;

// If Decision
console.log("== If Decision ==");
if (nilai >= 80) {
    console.log('Anda lulus ujian');
}else{
    console.log('Anda harus mengulang tahun depan');
}

console.log('');

// Swith Decision
console.log("== Switch Decision ==");
switch (nilai) {
    case 60:
        console.log('Anda harus mengikuti remedial');
        break;
    case 70:
        console.log('Yahh, sedikit lagi');
        break;
    case 80:
        console.log('Lulus');
        break;
    default:
        console.log('Format tidak sesuai');
}