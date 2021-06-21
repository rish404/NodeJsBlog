const fs = require('fs');

// reading files
// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }  
//   console.log(data.toString());
// });

// console.log('last line');

// writing files
// fs.writeFile('./docs/blog1.txt', 'Hello, world', () => {
//     console.log('File was written');
// })

//directories
if(!fs.existsSync('./assests')){
    fs.mkdir('./assets', (err) => {
        if (err){
            console.log(err);
        }
        console.log('folder created');
    })
}