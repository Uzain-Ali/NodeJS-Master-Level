const fs = require("fs");
const os = require("os");

console.log(os.cpus().length)
// fs.writeFileSync("./test.txt","Hello World");

// fs.writeFile("./test.txt","Hello World",(err)=>{});

// const result = fs.readFileSync("./contact.txt","utf-8");
// console.log(result);

// fs.readFile("./contact.txt","utf-8", (err, result)=>{
//     if(err) console.log("Error", err)
//     else console.log(result)
// })

// fs.appendFileSync("./test.txt", "Hey there");

// fs.cpSync("./test.txt", "./copy.txt");

// fs.unlinkSync("./copy.txt");

// fs.mkdirSync("uzain/a/b", {recursive:true})