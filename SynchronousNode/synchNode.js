const fs = require('fs');

if(process.argv.length !== 3){
    console.log(`Invalid Input`);
     process.exit(1);
}

filename = process.argv[2];

try {
    const readFile = (fs.readFileSync(filename));
    strFile = readFile + "";

    let upperCaseStr = "";
    for(let i = 0; i < strFile.length; i++){
        upperCaseStr += strFile[i].toUpperCase();
    }
    console.log(upperCaseStr);
} catch (err){
    console.log(`ENDENT: no such file or directory, open '${process.argv[2]}'`);
}