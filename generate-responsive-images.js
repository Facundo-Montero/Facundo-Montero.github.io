// generate-responsive-images.js
// Genera 3 tamaños (400w, 800w, 1200w) de cada .webp en img/
// Uso: node generate-responsive-images.js
//
// Instalar antes: npm install sharp

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMG_DIR = path.join(__dirname, 'img');
const SIZES = [400, 800, 1200];

const files = fs.readdirSync(IMG_DIR).filter(f => f.endsWith('.webp') && !f.includes('-4') && !f.includes('-8') && !f.includes('-12'));

(async () => {
  for (const file of files) {
    const name = file.replace('.webp', '');
    const input = path.join(IMG_DIR, file);

    for (const size of SIZES) {
      const output = path.join(IMG_DIR, `${name}-${size}.webp`);
      await sharp(input).resize(size).webp({ quality: 80 }).toFile(output);
      console.log(`✓ ${name}-${size}.webp`);
    }
  }
  console.log('Listo. Ahora corré el script de actualización de HTML.');
})();
