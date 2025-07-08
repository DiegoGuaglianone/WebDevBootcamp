/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import fs from 'fs';
import qr from 'qr-image';
import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Deixe a URL do seu site favorito!',
    },
    {
      type: 'confirm',
      name: 'confirmation',
      message: 'Gostou do questionario?',
    },
  ])
  .then((answers) => {
    console.log(`Your URL, ${answers.url}!`);
    console.log(`Confirmation is: ${answers.confirmation}`);

    // 1. Generate QR
    const qr_svg = qr.image(answers.url, { type: 'png' });

    // 2. Save QR as image file
    const output = fs.createWriteStream('nosso_qr.png');
    qr_svg.pipe(output);

    output.on('finish', () => {
      console.log('QR code image saved as nosso_qr.png');
    });

    // 3. Save URL to text file
    fs.appendFile('URL.txt', answers.url + '\n', (err) => {
      if (err) {
        console.error('Failed to write to file:', err);
      } else {
        console.log('URL saved to urls.txt');
      }
    });
  });

    //   const filePath = 'urls.json';

    // // Check if file exists
    // if (!fs.existsSync(filePath)) {
    //   fs.writeFileSync(filePath, '[]');
    // }

    // const newData = {
    //   url: answers.url,
    //   confirmation: answers.confirmation,
    //   date: new Date().toISOString()
    // };

    // // Step 1: Read existing content
    // const fileContent = fs.readFileSync('urls.json', 'utf-8');
    // const urlsArray = JSON.parse(fileContent);

    // // Step 2: Add new entry
    // urlsArray.push(newData);

    // // Step 3: Save back to file
    // fs.writeFileSync('urls.json', JSON.stringify(urlsArray, null, 2));
    // console.log('JSON entry added!');