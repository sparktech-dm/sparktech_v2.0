// scripts/clean-unused-assets.cjs
/**
 * Scan a React/Vite/Next.js project for unused static assets and safely move them to a trash folder.
 *
 * Usage:
 *   node scripts/clean-unused-assets.cjs            # Dry-run preview (safe, no files moved)
 *   node scripts/clean-unused-assets.cjs --apply    # Actually move unused assets to trash/unused
 */

const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '..');

// Directories to scan for assets
const ASSET_DIRS = ['public', path.join('src', 'assets')];

// File extensions to inspect for references
const SEARCH_EXTS = new Set([
  '.js', '.jsx', '.ts', '.tsx',
  '.html', '.css', '.scss',
  '.json', '.cjs', '.mjs', '.md'
]);

// Directories to ignore during source scan
const EXCLUDE_DIRS = new Set([
  'node_modules',
  'dist',
  '.git',
  'trash',
  '.gemini',
  'build',
  '.vscode'
]);

// Critical web standards & SEO files that must NEVER be deleted from public/
const PROTECTED_FILES = new Set([
  'robots.txt',
  'sitemap.xml',
  'llms.txt',
  '_redirects',
  'favicon.ico',
  'site.webmanifest',
  'manifest.json',
  '.htaccess',
  'cname'
]);

// Check CLI flags
const isApply = process.argv.includes('--apply') || process.argv.includes('--move') || process.argv.includes('-y');

/** Recursively collect files while skipping excluded directories. */
function getFiles(dir, allowedExts = null) {
  let results = [];
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      if (EXCLUDE_DIRS.has(entry.name)) continue;

      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        results = results.concat(getFiles(fullPath, allowedExts));
      } else if (!allowedExts || allowedExts.has(path.extname(entry.name).toLowerCase())) {
        results.push(fullPath);
      }
    }
  } catch (err) {
    console.error(`Warning: Could not read directory ${dir}:`, err.message);
  }
  return results;
}

/** Escape special regex characters in a string. */
function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

console.log('🔍 Scanning project for static assets and references...');

// 1️⃣ Gather candidate asset files
let assetFiles = [];
ASSET_DIRS.forEach(rel => {
  const abs = path.join(PROJECT_ROOT, rel);
  if (fs.existsSync(abs)) {
    assetFiles = assetFiles.concat(getFiles(abs));
  }
});

// 2️⃣ Gather source files to search
const sourceFiles = getFiles(PROJECT_ROOT, SEARCH_EXTS);

console.log(`📁 Found ${assetFiles.length} candidate asset files.`);
console.log(`📄 Found ${sourceFiles.length} source files to inspect.`);

// Preload all source file contents once for optimal performance
const sources = sourceFiles.map(filePath => ({
  filePath,
  relPath: path.relative(PROJECT_ROOT, filePath).replace(/\\/g, '/'),
  content: fs.readFileSync(filePath, 'utf8')
}));

// 3️⃣ Identify referenced assets
const referenced = new Set();
const referenceReasons = new Map();

assetFiles.forEach(assetPath => {
  const basename = path.basename(assetPath);
  const lowerBasename = basename.toLowerCase();

  // Always protect critical SEO / infrastructure files
  if (PROTECTED_FILES.has(lowerBasename)) {
    referenced.add(assetPath);
    referenceReasons.set(assetPath, 'Protected web standards / SEO file');
    return;
  }

  const encodedBasename = encodeURIComponent(basename);
  const safeBasename = escapeRegExp(basename);
  const safeEncoded = escapeRegExp(encodedBasename);

  // Match filename preceded by quote, slash, url(, space, or beginning of line
  const pattern = new RegExp(`(?:['"\`\\(\\s\\/=,]|^)(?:${safeBasename}|${safeEncoded})(?:['"\`\\)\\s\\?#;,]|$)`, 'i');

  for (const src of sources) {
    if (src.filePath === assetPath) continue;

    if (pattern.test(src.content) || src.content.includes(basename)) {
      referenced.add(assetPath);
      referenceReasons.set(assetPath, `Referenced in ${src.relPath}`);
      break;
    }
  }
});

// 4️⃣ Filter unused assets
const unusedAssets = assetFiles.filter(asset => !referenced.has(asset));

console.log(`\n📊 Scan Results:`);
console.log(`   - Total Assets:      ${assetFiles.length}`);
console.log(`   - Referenced Assets: ${referenced.size}`);
console.log(`   - Unused Assets:     ${unusedAssets.length}`);

if (unusedAssets.length === 0) {
  console.log('\n✨ No unused assets found! All static assets are actively referenced.');
  process.exit(0);
}

const TRASH_ROOT = path.join(PROJECT_ROOT, 'trash', 'unused');

console.log('\n⚠️  Identified Unused Assets:');
let totalBytes = 0;
unusedAssets.forEach(asset => {
  const size = fs.statSync(asset).size;
  totalBytes += size;
  const rel = path.relative(PROJECT_ROOT, asset).replace(/\\/g, '/');
  console.log(`   - ${rel} (${(size / 1024).toFixed(1)} KB)`);
});
console.log(`   Total reclaimable space: ${(totalBytes / 1024).toFixed(1)} KB`);

// 5️⃣ Handle moving files (Dry-run by default)
if (!isApply) {
  console.log('\nℹ️  DRY-RUN MODE: No files were moved.');
  console.log('   To safely move these unused assets to trash, run:');
  console.log('   node scripts/clean-unused-assets.cjs --apply\n');
} else {
  fs.mkdirSync(TRASH_ROOT, { recursive: true });
  let movedCount = 0;

  unusedAssets.forEach(asset => {
    const rel = path.relative(PROJECT_ROOT, asset);
    const dest = path.join(TRASH_ROOT, rel);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.renameSync(asset, dest);
    console.log(`🗑️  Moved: ${rel} -> ${path.relative(PROJECT_ROOT, dest)}`);
    movedCount++;
  });

  console.log(`\n✅ Done – ${movedCount} file(s) moved to ${TRASH_ROOT}`);
  console.log('🔍 Review the folder; when completely satisfied, delete it:');
  console.log(`   rm -rf "${TRASH_ROOT}"\n`);
}
