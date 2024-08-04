let num =Math.floor(Math.random());
console.log(num);


num=15;

//３と５の倍数
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
}


//３の倍数
else if (num % 3 === 0) {
  console.log('3の倍数です');
}

//５の倍数
else if (num % 5 === 0) {
  console.log('5の倍数です');
}


//いずれでもない場合
else {
  console.log(num);
}