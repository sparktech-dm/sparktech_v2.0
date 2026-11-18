const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const sharp = require(path.join(projectRoot, 'node_modules/sharp'));

const inputLogo = path.join(projectRoot, 'public/Logo.png');

async function generateAssets() {
  console.log('--- Generating Optimized SparkTech Logo Assets ---');

  if (!fs.existsSync(inputLogo)) {
    throw new Error('Input logo not found at ' + inputLogo);
  }

  const originalStats = fs.statSync(inputLogo);
  console.log(`Original logo size: ${(originalStats.size / 1024).toFixed(2)} KB (${originalStats.size} bytes)`);

  // 1. Trim source to get precise emblem boundaries
  const { data: trimmedBuffer, info: trimInfo } = await sharp(inputLogo)
    .trim()
    .toBuffer({ resolveWithObject: true });

  console.log(`Trimmed emblem: ${trimInfo.width}x${trimInfo.height} px`);

  // Helper to place trimmed emblem centered in square canvas
  async function createSquareIcon(canvasSize, emblemSize, format = 'png', options = {}) {
    const resizedEmblem = await sharp(trimmedBuffer)
      .resize(emblemSize, emblemSize, { fit: 'inside' })
      .toBuffer();

    const pipeline = sharp({
      create: {
        width: canvasSize,
        height: canvasSize,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    }).composite([{ input: resizedEmblem, gravity: 'center' }]);

    if (format === 'webp') {
      return pipeline.webp({ quality: options.quality || 95, effort: 6 }).toBuffer();
    }
    return pipeline.png({ compressionLevel: 9, effort: 10 }).toBuffer();
  }

  // Multi-res ICO builder
  function buildIco(images) {
    const header = Buffer.alloc(6);
    header.writeUInt16LE(0, 0); // reserved
    header.writeUInt16LE(1, 2); // type: 1 = ICO
    header.writeUInt16LE(images.length, 4); // image count

    const dirEntries = [];
    let offset = 6 + images.length * 16;

    for (const img of images) {
      const entry = Buffer.alloc(16);
      entry.writeUInt8(img.width === 256 ? 0 : img.width, 0);
      entry.writeUInt8(img.height === 256 ? 0 : img.height, 1);
      entry.writeUInt8(0, 2); // color palette count
      entry.writeUInt8(0, 3); // reserved
      entry.writeUInt16LE(1, 4); // color planes
      entry.writeUInt16LE(32, 6); // bits per pixel
      entry.writeUInt32LE(img.buffer.length, 8); // size of image data
      entry.writeUInt32LE(offset, 12); // offset of image data
      dirEntries.push(entry);
      offset += img.buffer.length;
    }

    return Buffer.concat([header, ...dirEntries, ...images.map(img => img.buffer)]);
  }

  // A. Header WebP Logo (240 x 248 px, 3x Retina density for 52px height)
  console.log('Generating Header WebP Logo...');
  const headerWebp = await sharp(inputLogo)
    .resize(240, 248, { fit: 'contain' })
    .webp({ quality: 95, effort: 6 })
    .toBuffer();

  const headerWebpPathPublic = path.join(projectRoot, 'public/logo.webp');
  const headerWebpPathSrc = path.join(projectRoot, 'src/assets/logo.webp');
  fs.writeFileSync(headerWebpPathPublic, headerWebp);
  fs.writeFileSync(headerWebpPathSrc, headerWebp);
  console.log(`[OK] Header logo (public/logo.webp & src/assets/logo.webp): ${(headerWebp.length / 1024).toFixed(2)} KB`);

  // B. Google Search Favicon (48x48 PNG)
  console.log('Generating Google Search Favicon (48x48 PNG)...');
  const favicon48 = await createSquareIcon(48, 44, 'png');
  const favicon48Path = path.join(projectRoot, 'public/favicon-48x48.png');
  fs.writeFileSync(favicon48Path, favicon48);
  console.log(`[OK] Google Search Favicon 48x48: ${(favicon48.length / 1024).toFixed(2)} KB`);

  // C. High-Density Favicon (96x96 PNG)
  console.log('Generating High-Density Favicon (96x96 PNG)...');
  const favicon96 = await createSquareIcon(96, 88, 'png');
  const favicon96Path = path.join(projectRoot, 'public/favicon-96x96.png');
  fs.writeFileSync(favicon96Path, favicon96);
  console.log(`[OK] Favicon 96x96: ${(favicon96.length / 1024).toFixed(2)} KB`);

  // D. Multi-Resolution Favicon ICO (48x48, 32x32, 16x16)
  console.log('Generating Multi-Resolution Favicon ICO...');
  const favicon32 = await createSquareIcon(32, 30, 'png');
  const favicon16 = await createSquareIcon(16, 15, 'png');
  const icoBuffer = buildIco([
    { width: 48, height: 48, buffer: favicon48 },
    { width: 32, height: 32, buffer: favicon32 },
    { width: 16, height: 16, buffer: favicon16 }
  ]);
  const icoPath = path.join(projectRoot, 'public/favicon.ico');
  fs.writeFileSync(icoPath, icoBuffer);
  console.log(`[OK] Favicon ICO (48+32+16): ${(icoBuffer.length / 1024).toFixed(2)} KB`);

  // E. Apple Touch Icon (180x180 PNG)
  console.log('Generating Apple Touch Icon (180x180 PNG)...');
  const appleTouch = await createSquareIcon(180, 144, 'png');
  const appleTouchPath = path.join(projectRoot, 'public/apple-touch-icon.png');
  fs.writeFileSync(appleTouchPath, appleTouch);
  console.log(`[OK] Apple Touch Icon: ${(appleTouch.length / 1024).toFixed(2)} KB`);

  // F. Organization Logo (512x512 PNG & WebP)
  console.log('Generating Organization Schema Logo (512x512 PNG & WebP)...');
  const orgLogoPng = await createSquareIcon(512, 450, 'png');
  const orgLogoPngPath = path.join(projectRoot, 'public/logo-512x512.png');
  fs.writeFileSync(orgLogoPngPath, orgLogoPng);
  console.log(`[OK] Organization Logo 512x512 PNG: ${(orgLogoPng.length / 1024).toFixed(2)} KB`);

  const orgLogoWebp = await createSquareIcon(512, 450, 'webp', { quality: 95 });
  const orgLogoWebpPath = path.join(projectRoot, 'public/logo-512x512.webp');
  fs.writeFileSync(orgLogoWebpPath, orgLogoWebp);
  console.log(`[OK] Organization Logo 512x512 WebP: ${(orgLogoWebp.length / 1024).toFixed(2)} KB`);

  // G. In-place optimization of Logo.png for backwards compatibility
  console.log('Optimizing fallback public/Logo.png and src/assets/Logo.png...');
  fs.writeFileSync(path.join(projectRoot, 'public/Logo.png'), orgLogoPng);
  fs.writeFileSync(path.join(projectRoot, 'src/assets/Logo.png'), orgLogoPng);
  console.log(`[OK] Fallback Logo.png updated in-place: ${(orgLogoPng.length / 1024).toFixed(2)} KB`);

  console.log('\n--- Asset Generation Complete ---');
}

generateAssets().catch(err => {
  console.error('Asset generation failed:', err);
  process.exit(1);
});

