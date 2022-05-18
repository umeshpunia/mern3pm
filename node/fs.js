const fs=require('fs')

// fs.rmdir('assets',err=>{
//     if(err) return console.log(err)
//     console.log('Directory created')
// })

// fs.unlink('first1.js',err=>{
//     if(err) return console.log(err)
//     console.log('File created')
// })


a=fs.readFileSync('first.txt',"utf8")

console.log('end',a)


