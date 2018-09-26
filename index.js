const https = require('https');
const fs = require('fs');

const input = require('./input.js');

// From: https://stackoverflow.com/a/22907134/8982654 Thanks, yo!
const download = function(url, dest, cb) {
  const file = fs.createWriteStream(dest);
  const request = https.get(url, function(response) {
    response.pipe(file);
    file.on('finish', function() {
      file.close(cb);  // close() is async, call cb after close completes.
    });
  }).on('error', function(err) { // Handle errors
    fs.unlink(dest); // Delete the file async. (But we don't check the result)
    if (cb) cb(err.message);
  });
};

const callback = function(message) {
  if (typeof message !== 'undefined') {
    console.log(message);
  } else {
    console.log('No callback message defined.');
  }
}

const saveImages = function(arr) {
  console.log('Begin saving files.');
  if (typeof arr !== 'undefined' && arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      let name = arr[i].name,
          url  = arr[i].photoUrl,
          path = 'images/',
          ext = url.substring(url.lastIndexOf('.'), url.length);

      const imgFileName = path + name + ext;

      console.log('Saving image: ' + imgFileName);
      download(url, imgFileName, callback('Success:      ' + imgFileName)); // Extra spaces to match up with upper message
    }
  } else {
    console.log('Input is either blank or undefined. Did you put your JSON object in input.js?');
  }
}

saveImages(input.staffMembers);
