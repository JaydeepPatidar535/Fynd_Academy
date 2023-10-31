// const fs = require('fs');

// for (let i = 1; i <= 10; i++) {
//     const filename = `file${i}.txt`;
//     const data = `This is the content of file number ${i}.`;

//     fs.writeFile(filename, data, (err) => {
//     
//     console.error(`Error writing ${filename}: ${err}`);
//     
//     });
// }


const fs = require('fs');

for (let i = 1; i <= 10; i++) {
    const filename = `file${i}.txt`;

    fs.readFile(filename, 'utf8', (err, data) => {
    console.log(`Content of ${filename}:\n${data}\n`);

    });
}

