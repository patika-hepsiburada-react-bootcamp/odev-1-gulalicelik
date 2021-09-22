import getData from './lib/service.js';
// asenkron bir fonksiyon olan get datayı await anahtar kelimesi ile çağırıp veri geldikten sonra, gelen veriyi bir değişkene atıyoruz.
const result = await getData(1);

//gelen sonucu logluyoruz
console.log(result);
