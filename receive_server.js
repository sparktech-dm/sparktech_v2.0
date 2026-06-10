import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method === 'POST' && req.url === '/save') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const base64Data = body.replace(/^data:image\/\w+;base64,/, "");
        const buffer = Buffer.from(base64Data, 'base64');
        fs.writeFileSync('public/rocket.webp', buffer);
        console.log('SUCCESS: Yellow rocket image saved to public/rocket.webp');
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('OK');
        setTimeout(() => process.exit(0), 100);
      } catch (err) {
        console.error(err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error');
      }
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(9999, () => {
  console.log('Temporary receiver server listening on port 9999...');
});
