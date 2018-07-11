var nama = '';
var peran = '';
  if ( nama === '' && peran ==='') { 
   console.log("Nama harus diisi!") 
} else if(nama != '' && peran === '') {
   console.log("Halo " +nama+  ",Pilih peranmu untuk memulai game!");
} else if(nama ==='Yugi' && peran === 'ksatria') {
    console.log("Selamat datang di Dunia Proxytia, Yugi");
    console.log("Halo Ksatria Yugi, kamu dapat menyerang dengan senjatamu!");
} else if(nama ==='Amanj' && peran ==='Tabib') {
    console.log("Selamat datang di Dunia Proxytia, Amanj");
    console.log("Halo Tabib Amanj, kamu akan membantu temanmu yang terluka.");
} else if(nama === 'David' && peran ==='Penyihir') {
    console.log("Selamat datang di Dunia Proxytia, David");
    console.log("Halo Penyihir David, ciptakan keajaiban yang membantu kemenanganmu!");
} else {
    console.log("format is not match");
} 
