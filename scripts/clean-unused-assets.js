// scripts/clean-unused-assets.js
/**
 * Scan a React/Vite/Next.js project for unused static assets and move them to a trash folder.
 *
 * Run from the project root:
 *   node scripts/clean-unused-assets.js
 *
 * After reviewing the generated `trash/unused` folder, delete it manually.
 */

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = process.cwd();
// Adjust these arrays if your assets live elsewhere.
const ASSET_DIRS = ['public', path.join('src', 'assets')];
const SOURCE_GLOBS = [
  '**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx',
  '**/*.html', '**/*.css', '**/*.scss'
];

/** Recursively collect files (optionally filtered by extensions). */
function getFiles(dir, extensions = null) {
  let results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results = results.concat(getFiles(full, extensions));
    } else if (!extensions || extensions.includes(path.extname(entry.name))) {
      results.push(full);
    }
  }
  return results;
}

// 1️⃣ Gather candidate asset files
let assetFiles = [];
ASSET_DIRS.forEach(rel => {
  const abs = path.join(PROJECT_ROOT, rel);
  if (fs.existsSync(abs)) {
    assetFiles = assetFiles.concat(getFiles(abs));
  }
});

// 2️⃣ Gather source files to search
let sourceFiles = [];
SOURCE_GLOBS.forEach(glob => {
  const ext = '.' + glob.split('.').pop();
  sourceFiles = sourceFiles.concat(getFiles(PROJECT_ROOT, [ext]));
});

// 3️⃣ Build a set of referenced assets
const referenced = new Set();
sourceFiles.forEach(srcPath => {
  const content = fs.readFileSync(srcPath, 'utf8');
  assetFiles.forEach(assetPath => {
    const relFromSrc = path.relative(path.dirname(srcPath), assetPath).replace(/\\/g, '/');
    const basename = path.basename(assetPath);
    // Look for either the relative path or just the filename inside quotes or backticks.
    const pattern = new RegExp(`["'`](${relFromSrc}|${basename})["'`]`, 'i');
    if (pattern.test(content)) {
      referenced.add(assetPath);
    }
  });
});

// 4️⃣ Move unused assets to trash
const TRASH_ROOT = path.join(PROJECT_ROOT, 'trash', 'unused');
fs.mkdirSync(TRASH_ROOT, { recursive: true });
let removed = 0;
assetFiles.forEach(asset => {
  if (!referenced.has(asset)) {
    const rel = path.relative(PROJECT_ROOT, asset);
    const dest = path.join(TRASH_ROOT, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.renameSync(asset, dest);
    console.log(`🗑️  Moved: ${rel}`);
    removed++;
  }
});

console.log('\n✅ Done –', removed, 'file(s) moved to', TRASH_ROOT);
console.log('🔍 Review the folder; when satisfied delete it:');
console.log('   rm -rf', TRASH_ROOT);
