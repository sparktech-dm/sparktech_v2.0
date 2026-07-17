const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'src', 'pages', 'services-page');
const files = ['Seo.jsx', 'Social.jsx', 'Content.jsx', 'Web.jsx', 'Video.jsx', 'Email.jsx', 'Graph.jsx', 'Branding.jsx', 'PerformanceMarketing.jsx'];

files.forEach(f => {
  const p = path.join(dir, f);
  if (!fs.existsSync(p)) return;
  let content = fs.readFileSync(p, 'utf8');

  // 1. Container
  content = content.replace(/className="min-h-screen text-white py-12 px-6"/g, 'className="min-h-screen py-12 px-6 bg-[#ffffff]"');

  // 2. Title and desc
  // Look for the block containing h1 and p
  content = content.replace(/<div className="text-center mb-16 animate-fadeIn">([\s\S]*?)<\/div>/, (match, inner) => {
    const h1Match = inner.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    if (!h1Match) return match;
    let h1Text = h1Match[1].trim();
    // Wrap h1Text words to make it simple
    if (f === 'Seo.jsx') {
      h1Text = `<span className="text-[#cc7722]">SEARCH VISIBILITY </span>
            <span className="text-[#1b365d]">& </span>
            <span className="text-[#cc7722]">SEO</span>`;
      return `<div className="text-center mb-16 animate-fadeIn">\n          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest font-oswald mb-6">\n            ${h1Text}\n          </h1>\n        </div>`;
    }
    return `<div className="text-center mb-16 animate-fadeIn">\n          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-widest text-[#1b365d] font-oswald mb-6">\n            ${h1Text}\n          </h1>\n        </div>`;
  });

  // 3. Cards wrapper
  content = content.replace(/className="bg-gradient-to-b from-\[#182335\] to-\[#0a0f18\] border-2 border-\[#f0c417\] p-8 rounded-2xl flex flex-col justify-center text-center h-\[200px\]"/g, 'className="bg-[#1f3a58] p-8 rounded-2xl flex flex-col justify-center text-center h-[200px]"');

  // 4. Card Title
  content = content.replace(/className="text-\[#f0c417\] font-oswald text-base font-bold uppercase tracking-wider mb-3"/g, 'className="text-[#cc7722] font-oswald text-base font-bold uppercase tracking-wider mb-3"');

  // 5. Card Desc
  content = content.replace(/className="text-white\/80 text-xs md:text-sm font-light leading-relaxed"/g, 'className="text-white text-xs md:text-sm font-light leading-relaxed"');

  // 6. Center Card wrapper
  content = content.replace(/className="w-full max-w-2xl bg-gradient-to-b from-\[#182335\] to-\[#0a0f18\] border-2 border-\[#f0c417\] p-8 rounded-2xl text-center"/g, 'className="w-full max-w-2xl bg-[#1f3a58] p-8 rounded-2xl text-center"');

  // 7. Center Card Title
  content = content.replace(/className="text-lg md:text-xl font-bold font-oswald text-\[#f0c417\] uppercase tracking-wider mb-6"/g, 'className="text-lg md:text-xl font-bold font-oswald text-[#cc7722] uppercase tracking-wider mb-6"');

  // 8. Center Card List
  content = content.replace(/className="text-white\/95 text-xs md:text-sm font-light tracking-wide leading-relaxed"/g, 'className="text-white text-xs md:text-sm font-light tracking-wide leading-relaxed"');

  // 9. Bottom CTA Section
  content = content.replace(/\{\/\*\s*Bottom CTA Section\s*\*\/\}\s*<div className="text-center max-w-3xl mx-auto">([\s\S]*?)<button/m, (match, inner) => {
    const h3Match = inner.match(/<h3[^>]*>([\s\S]*?)<\/h3>/);
    let h3Text = h3Match ? h3Match[1].trim() : "Let's grow together";
    return `{/* Bottom CTA Section */}\n        <div className="text-center max-w-3xl mx-auto mt-16">\n          <h3 className="text-2xl md:text-3xl font-extrabold uppercase font-oswald text-[#cc7722] tracking-wider mb-8">\n            ${h3Text}\n          </h3>\n\n          <button`;
  });

  // 10. Button
  content = content.replace(/className="px-8 py-3\.5 bg-gradient-to-r from-\[#172033\] to-black hover:from-\[#f0c417\] hover:to-\[#e1b514\] text-\[#f0c417\] hover:text-black font-bold uppercase tracking-wider text-xs md:text-sm border-2 border-\[#f0c417\] rounded-full transition-all duration-300 shadow-md hover:shadow-\[0_0_20px_rgba\(240,196,23,0\.4\)\] cursor-pointer"/g, 'className="px-8 py-3.5 bg-[#1f3a58] hover:bg-[#1b365d] text-white font-bold tracking-wider text-xs md:text-sm rounded-xl transition-all duration-300 shadow-md cursor-pointer"');

  fs.writeFileSync(p, content);
  console.log('Updated ' + f);
});
console.log('Done');
