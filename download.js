import fs from 'fs';
import https from 'https';

const url = "https://upload.wikimedia.org/wikipedia/commons/7/7a/Mahatma-Gandhi%2C_studio%2C_1931.jpg";

https.get(url, (res) => {
  if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
    https.get(res.headers.location, (redirectRes) => {
      const file = fs.createWriteStream("public/gandhi.jpg");
      redirectRes.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Download completed.');
      });
    });
  } else {
    const file = fs.createWriteStream("public/gandhi.jpg");
    res.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log('Download completed.');
    });
  }
}).on('error', err => {
  console.error(err.message);
});
