
const buf=Buffer.alloc(10);
//above is empty
buf.write("hello kfsdjkfsd fjksdfkjdsfjksdfjksd")
//above is written
//normal string buffer
console.log(buf.toString())
// console.log(buf)


// const buf = Buffer.from('hello world', 'utf8');

// console.log(buf.toString('hex'));
// // Prints: 68656c6c6f20776f726c64
// console.log(buf.toString('base64'));