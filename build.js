const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'src', 'index.html');
const destDir = path.join(__dirname, 'dist');
const dest = path.join(destDir, 'index.html');

fs.mkdirSync(destDir, { recursive: true });
fs.copyFileSync(src, dest);

console.log('Archivo copiado a dist/');