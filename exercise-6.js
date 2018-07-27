var loopingpertama = 2;
console.log('LOOPING PERTAMA');
    while (loopingpertama <= 20 ) {
    console.log(loopingpertama ++, '-I love coding');
    loopingpertama++; 
}
console.log('LOOPING KEDUA')
var loopingkedua = 20;
    while (loopingkedua >= 1 ) {
    console.log(loopingkedua --,'- I will become fullstack developer');
    loopingkedua--; 
}

_____________________________________________________________________________
PROBLEM (2)

console.log("LOOPING PERTAMA");
 for(var i = 1;i <= 20; i++) {
  console.log(i + ' - I love coding');
}
 console.log('LOOPING KEDUA');
for(var j = 20;j > 0; j--) {
  console.log(j + ' - I will become fullstack developer');
}

_____________________________________________________________________________
PROBLEM (3)



var num=0;
for(i = 1; i <= 100; i++){
  if(i % 2===0){
    console.log('genap');
  }else{
    console.log('ganjil');
  }
}
for(j=1;j<=100;j+=2){
  var counter=j;
  if(j % 3===0){
    console.log(j +' kelipatan '+ j);
  }
}
for (x=1;x<=100;x+=5){
  var counter=x;
  if(x % 6===0){
    console.log(x +' kelipatan '+ x);
  }
}
for(y=1;y<=100; y+=9){
  var counter=y;
  if(y % 10===0){
    console.log(y +' kelipatan '+ y);
  }
}

