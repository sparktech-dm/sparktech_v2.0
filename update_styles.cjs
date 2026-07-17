const fs = require('fs');
const path = require('path');

const updateFile = (filePath, replacements) => {
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;
  
  for (const { from, to } of replacements) {
    content = content.replace(from, to);
  }
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${filePath}`);
  } else {
    console.log(`No changes made to: ${filePath}`);
  }
};

const componentsDir = path.join(__dirname, 'src', 'components');
const pagesDir = path.join(__dirname, 'src', 'pages');

const contactForm1Path = path.join(componentsDir, 'ContactForm1.jsx');
const blogsPath = path.join(componentsDir, 'Blogs.jsx');
const blogsPagePath = path.join(pagesDir, 'BlogsPage.jsx');

// Update ContactForm1.jsx
updateFile(contactForm1Path, [
  {
    from: /className="min-h-screen text-white font-sans career-bg-pattern pt-15"/g,
    to: 'className="min-h-screen bg-white text-[#1b365d] font-sans pt-15"'
  },
  {
    from: /text-yellow-400 font-extrabold text-5xl not-italic/g,
    to: 'text-[#cc7722] font-extrabold text-5xl not-italic'
  },
  {
    from: /text-gray-300 font-poppins italic mt-5/g,
    to: 'text-[#1b365d] font-poppins mt-5'
  },
  {
    from: /border-2 border-yellow-400 rounded-2xl p-7 bg-black hover:bg-yellow-400\/5 transition-all duration-300 w-full md:w-\[29%\]/g,
    to: 'border-2 border-[#cc7722] rounded-2xl p-7 bg-[#f2eee0] transition-all duration-300 w-full md:w-[29%]'
  },
  {
    from: /border-2 border-yellow-400 rounded-2xl p-7 bg-black hover:bg-yellow-400\/5 transition-all duration-300 flex flex-col justify-between w-full md:w-\[29%\]/g,
    to: 'border-2 border-[#cc7722] rounded-2xl p-7 bg-[#f2eee0] transition-all duration-300 flex flex-col justify-between w-full md:w-[29%]'
  },
  {
    from: /text-yellow-400/g,
    to: 'text-[#cc7722]'
  },
  {
    from: /text-gray-300 text-sm leading-relaxed/g,
    to: 'text-[#1b365d] text-sm leading-relaxed'
  },
  {
    from: /text-gray-200 text-lg font-semibold/g,
    to: 'text-[#1b365d] text-lg font-semibold'
  },
  {
    from: /text-gray-200 text-base font-semibold/g,
    to: 'text-[#1b365d] text-base font-semibold'
  },
  {
    from: /bg-black border-2 border-yellow-400 rounded-\[40px\] p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start shadow-2xl/g,
    to: 'bg-[#1f3a58] rounded-[20px] p-8 md:p-12 lg:p-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start'
  },
  {
    from: /text-yellow-400 text-5xl font-extrabold italic/g,
    to: 'text-[#cc7722] text-5xl font-extrabold'
  },
  {
    from: /text-yellow-400 italic font-semibold text-lg mb-2 block/g,
    to: 'text-white font-semibold text-base mb-2 block'
  },
  {
    from: /w-full bg-transparent border rounded-full px-5 py-3 text-white outline-none transition-all \$\{\n                  errors\.name \? "border-\[#e25c5c\] focus:ring-1 focus:ring-\[#e25c5c\]" : "border-yellow-400 focus:border-yellow-300 focus:ring-1 focus:ring-yellow-400"\n                \}/g,
    to: 'w-full bg-transparent border border-gray-400/50 rounded-full px-5 py-3 text-white outline-none transition-all ${errors.name ? "border-[#e25c5c] focus:ring-1 focus:ring-[#e25c5c]" : "focus:border-white focus:ring-1 focus:ring-white"}'
  },
  {
    from: /w-full bg-transparent border rounded-full px-5 py-3 text-white outline-none transition-all \$\{\n                  errors\.email \? "border-\[#e25c5c\] focus:ring-1 focus:ring-\[#e25c5c\]" : "border-yellow-400 focus:border-yellow-300 focus:ring-1 focus:ring-yellow-400"\n                \}/g,
    to: 'w-full bg-transparent border border-gray-400/50 rounded-full px-5 py-3 text-white outline-none transition-all ${errors.email ? "border-[#e25c5c] focus:ring-1 focus:ring-[#e25c5c]" : "focus:border-white focus:ring-1 focus:ring-white"}'
  },
  {
    from: /w-full bg-transparent border rounded-full px-5 py-3 text-white outline-none transition-all \$\{\n                  errors\.phone \? "border-\[#e25c5c\] focus:ring-1 focus:ring-\[#e25c5c\]" : "border-yellow-400 focus:border-yellow-300 focus:ring-1 focus:ring-yellow-400"\n                \}/g,
    to: 'w-full bg-transparent border border-gray-400/50 rounded-full px-5 py-3 text-white outline-none transition-all ${errors.phone ? "border-[#e25c5c] focus:ring-1 focus:ring-[#e25c5c]" : "focus:border-white focus:ring-1 focus:ring-white"}'
  },
  {
    from: /w-full bg-transparent border border-yellow-400 rounded-2xl px-5 py-3 text-white outline-none focus:border-yellow-300 focus:ring-1 focus:ring-yellow-400 transition-all resize-none/g,
    to: 'w-full bg-transparent border border-gray-400/50 rounded-3xl px-5 py-3 text-white outline-none focus:border-white focus:ring-1 focus:ring-white transition-all resize-none'
  },
  {
    from: /border-2 border-yellow-400 text-yellow-400 font-bold tracking-widest px-14 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 text-base/g,
    to: 'border border-white text-white font-bold tracking-widest px-14 py-3 rounded-full hover:bg-white/10 transition-all duration-300 text-base'
  }
]);

// Update Blogs.jsx
updateFile(blogsPath, [
  {
    from: /const cardBase = "bg-white\/\[0\.03\] border border-white\/\[0\.02\] border-l-4 border-l-\[#f0c417\] rounded-lg p-5 md:p-6 flex flex-col justify-between transition-all duration-300 shadow-\[0_4px_20px_rgba\(0,0,0,0\.15\)\] hover:-translate-y-1 hover:shadow-\[0_8px_32px_rgba\(240,196,23,0\.15\)\] active:scale-\[0\.99\]";/g,
    to: 'const cardBase = "bg-[#1f3a58] rounded-xl p-5 md:p-6 flex flex-col justify-between transition-all duration-300 shadow-md hover:-translate-y-1 active:scale-[0.99]";'
  },
  {
    from: /className="career-bg-pattern min-h-screen text-white font-\[Inter\] relative overflow-hidden"/g,
    to: 'className="min-h-screen bg-white text-black font-[Inter] relative overflow-hidden"'
  },
  {
    from: /text-\[#f0c417\]/g,
    to: 'text-[#cc7722]'
  },
  {
    from: /bg-\[#f0c417\]/g,
    to: 'bg-[#cc7722]'
  },
  {
    from: /border-\[#f0c417\]/g,
    to: 'border-[#cc7722]'
  },
  {
    from: /text-gray-300 text-sm italic leading-relaxed/g,
    to: 'text-white/90 text-sm leading-relaxed'
  },
  {
    from: /text-gray-300 text-sm leading-relaxed/g,
    to: 'text-white text-sm leading-relaxed'
  },
  {
    from: /text-gray-400 font-medium text-sm/g,
    to: 'text-white/80 font-medium text-sm'
  }
]);

// Update BlogsPage.jsx (which may have slightly different styling from Blogs.jsx)
updateFile(blogsPagePath, [
  {
    from: /bg-\[#111111\] border-2 border-\[#f0c417\]\/80 rounded-2xl/g,
    to: 'bg-[#1f3a58] rounded-xl'
  },
  {
    from: /text-white font-\[Inter\]/g,
    to: 'text-[#cc7722] font-[Inter]'
  },
  {
    from: /text-\[#f0c417\]/g,
    to: 'text-[#cc7722]'
  },
  {
    from: /text-gray-300 text-sm italic/g,
    to: 'text-white/90 text-sm'
  },
  {
    from: /text-gray-300 leading-relaxed/g,
    to: 'text-white/90 leading-relaxed'
  },
  {
    from: /career-bg-pattern text-white/g,
    to: 'bg-white text-black'
  },
  {
    from: /bg-black text-white/g,
    to: 'bg-white text-black'
  }
]);
