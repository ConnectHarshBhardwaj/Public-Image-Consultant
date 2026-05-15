import https from 'https';

https.get("https://i.ibb.co/r2gCQnLK/gandhi-ji-image.jpg", (res) => {
  console.log(res.statusCode);
  console.log(res.headers);
});
