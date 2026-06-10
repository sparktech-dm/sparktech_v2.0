import { Jimp } from 'jimp';

async function main() {
  console.log('Reading rocket.webp...');
  const image = await Jimp.read('public/rocket.webp');
  
  // We want to color it yellow: #f0c417 (R: 240, G: 196, B: 23)
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
    const a = this.bitmap.data[idx + 3];

    // If it has opacity, color it yellow
    if (a > 10) {
      this.bitmap.data[idx + 0] = 240; // R
      this.bitmap.data[idx + 1] = 196; // G
      this.bitmap.data[idx + 2] = 23;  // B
    }
  });

  console.log('Writing modified image...');
  await image.write('public/rocket.webp');
  console.log('Successfully colored rocket yellow!');
}

main().catch(async (err) => {
  console.log('Trying alternative Jimp import...');
  try {
    const JimpDefault = (await import('jimp')).default;
    const image = await JimpDefault.read('public/rocket.webp');
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      const a = this.bitmap.data[idx + 3];
      if (a > 10) {
        this.bitmap.data[idx + 0] = 240; // R
        this.bitmap.data[idx + 1] = 196; // G
        this.bitmap.data[idx + 2] = 23;  // B
      }
    });
    await image.write('public/rocket.webp');
    console.log('Successfully colored rocket yellow using default import!');
  } catch (innerErr) {
    console.error('Failed to color rocket:', innerErr);
  }
});
