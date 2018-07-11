var tanggal = 6; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan = 7; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun = 2018; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)
var result = tanggal + ' ' + bulan + ' ' + tahun;
if (tanggal >1 && tanggal <32) {

  switch(bulan) {
    case 1:   { bulan = 'january'; 
    result = tanggal + ' ' + bulan + ' ' + tahun;
    break; }
    case 2:   { bulan = 'february';
    result =tanggal + ' ' + bulan + ' ' + tahun; break; }
    case 3:   { bulan = 'march';
    result =tanggal + ' ' + bulan + ' ' + tahun; break; }
    case 4:   { bulan = 'april';
    result =tanggal + ' ' + bulan + ' ' + tahun; break; }
    case 5:   { bulan = 'may';
    result =tanggal + ' ' + bulan + ' ' + tahun; break; }
    case 6:   { bulan = 'june';
    result =tanggal + ' ' + bulan + ' ' + tahun; break; }
    case 7:   { bulan = 'july';
    result =tanggal + ' ' + bulan + ' ' + tahun; break; }
    case 8:   { bulan = 'aguest';
    result =tanggal + ' ' + bulan + ' ' + tahun; break; }
    case 9:   { bulan = 'september';
    result =tanggal + ' ' + bulan + ' ' + tahun; break; }
    case 10:  { bulan = 'october';
    result =tanggal + ' ' + bulan + ' ' + tahun; break; }
    case 11:  { bulan = 'november';
    result =tanggal + ' ' + bulan + ' ' + tahun; break; }
    case 12:  { bulan = 'december';
    result =tanggal + ' ' + bulan + ' ' + tahun; break; }
    default:  { result = 'no file available';}
  }
 
}else
{
  result = "no file available"
}

console.log(result);
