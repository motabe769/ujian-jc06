
var string = "a%6&z#!(*$H121H!BNDKSlkasd338(*&#$%@#76577C";
    
var huruf = /[a-zA-Z]/g; 
var hasil1 = string.match(huruf);

var angka = /[0-9]/g
var hasil2 = string.match(angka);
    

console.log('Karakter huruf yang terdapat dalam string adalah : ')
console.log(hasil1);
console.log('Karakter angka yang terdapat dalam string adalah : ')
console.log(hasil2);

