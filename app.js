require('dotenv').config();
var jimp = require('jimp');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// require('./config/dbConnect')

app.get('/', (req, res) => {
  let { x, y } = req.query;
  x = parseInt(x);
  y = parseInt(y);
  
  // var images = ['images/background.jpg', 'images/banner.png', 'images/logo.png'];
  var images = ['images/background.jpg', 'images/banner.png', 'images/logo.png'];

  var jimps = [];

  for (var i = 0; i < images.length; i++) {
    jimps.push(jimp.read(images[i]));
  }

  Promise.all(jimps)
    .then(function (data) {
      return Promise.all(jimps);
    })
    .then(function (data) {
      data[0].composite(data[1], 0, 0);
      data[0].composite(data[2], 0, 0);

      data[0].write('public/test.png', function () {
        console.log('wrote the image');
        res.sendFile(path.join(__dirname, 'public', 'test.png'))
      });
    });
});

app.listen(port, () => {
  console.log('server start om port ' + port);
});
