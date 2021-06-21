const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt');
const writeStream = fs.createWriteStream('./docs/blog4.txt');

//Read Stream

readStream.on('data', (chunk) => {
    console.log('-------- NEW CHUNK ------')
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n')
    writeStream.write(chunk);
})

//Piping

readStream.pipe(writeStream);