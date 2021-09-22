import axios from 'axios';

const getData = async userId => {
  try {
    //id'ye göre kullanıcıyı çekiyoruz.
    const { data: user } = await axios(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    //kullanıcıya ait postları çekiyoruz
    const { data: posts } = await axios(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    // aldığımız verileri birleştirerek return ediyoruz.
    return {
      ...user,
      posts,
    };
  } catch (e) {
    console.log(e.message); // işlem  başarısız olursa hata mesajını ekrana yazdırıyoruz
  }
};

export default getData;
