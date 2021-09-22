# Hepsiburada React Frontend Bootcamp Ödev 1

Bu repo 122. Hepsiburada React Frontend Bootcamp'inde verilen 1. ödevin cevabını içerir.


## Kurulum


```sh
git clone https://github.com/patika-hepsiburada-react-bootcamp/odev-1-gulalicelik.git
cd odev-1-gulalicelik
npm i
npm start
```
## Dosya Yapısı

```
odev-1-gulalicelik  
└── src
│   │  app.js
│   └───lib
│    │  ─service.js
│   
└── .gitignore
│   
└── package-lock.json
│   
└── package.json
│   
└── README.md
    
```
## Tanım
[Axios](https://github.com/axios/axios) kütüphanesini kullanarak [user](https://jsonplaceholder.typicode.com/users/1)  ve [post](https://jsonplaceholder.typicode.com/posts?userId=1) endpointlerine  **async - await**  anahtar kelimeleri asenkron istek atıp gelen verileri birleştirip default olarak export eden bir [service.js](https://github.com/patika-hepsiburada-react-bootcamp/odev-1-gulalicelik/blob/master/src/lib/service.js)  dosyasına sahiptir.Bu dosya [app.js](https://github.com/patika-hepsiburada-react-bootcamp/odev-1-gulalicelik/blob/master/src/app.js) içine import edilip  **getData()** fonksiyonu çalıştırılıp gelen sonuç loglanmıştır.
