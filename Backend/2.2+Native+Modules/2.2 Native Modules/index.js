const fs = require("fs");

// fs.writeFile("mensagem.txt", "Diego esteve aqui!", (err)=> {
//     if (err) throw err;
//     console.log("O arquivo foi salvo!");
// });

fs.readFile('./mensagem.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
}); 