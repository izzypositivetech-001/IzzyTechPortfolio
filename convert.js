import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const directoryPath = path.join(process.cwd(), 'public');

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  } 
  
  files.forEach((file) => {
    if (file.endsWith('.png') || file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.PNG')) {
      const filePath = path.join(directoryPath, file);
      const outputName = file.replace(/\.(png|jpeg|jpg|PNG)$/, '.webp');
      const outputPath = path.join(directoryPath, outputName);
      
      sharp(filePath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => {
          console.log(`Converted ${file} to ${outputName}`);
          fs.unlinkSync(filePath); // Delete original
        })
        .catch(err => {
          console.log(`Error converting ${file}: ${err}`);
        });
    }
  });
});
