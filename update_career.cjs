const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'src', 'pages', 'Career.jsx');

let content = fs.readFileSync(file, 'utf8');

// Container
content = content.replace('career-bg-pattern text-white', 'bg-white text-[#1b365d]');

// Title
content = content.replace('text-brand-yellow tracking-[0.02em]', 'text-[#cc7722] tracking-[0.02em]');

// Section Titles (Why Join, What we look for, Job info)
content = content.replace(/text-brand-yellow/g, 'text-[#cc7722]');

// Section paragraphs and lists
content = content.replace(/text-white\/90/g, 'text-[#1b365d]');
content = content.replace(/before:text-white/g, 'before:text-[#1b365d]');
content = content.replace(/<Calendar className="text-white shrink-0" size={18} \/>/g, '<Calendar className="text-[#1b365d] shrink-0" size={18} />');
content = content.replace(/<Clock className="text-white shrink-0" size={18} \/>/g, '<Clock className="text-[#1b365d] shrink-0" size={18} />');
content = content.replace(/<Award className="text-white shrink-0" size={18} \/>/g, '<Award className="text-[#1b365d] shrink-0" size={18} />');

// "Recommended Positions"
content = content.replace(/text-white m-0 uppercase tracking-\[0\.05em\]/g, 'text-transparent m-0 uppercase tracking-[0.05em] hidden'); // Hiding this as per image

// Search Input
content = content.replace(/bg-white\/5 text-white text-base/g, 'bg-[#1f3a58] text-white text-base placeholder:text-gray-300');
content = content.replace(/border-white\/20/g, 'border-[#1b365d]');

// Category Pills
content = content.replace(/bg-white\/5 text-white\/95 border-white\/15 hover:bg-brand-yellow\/15 hover:text-brand-yellow hover:border-brand-yellow/g, 'bg-[#1f3a58] text-white border-transparent hover:bg-[#1b365d] hover:text-white');
content = content.replace(/bg-brand-yellow text-brand-dark/g, 'bg-[#1b365d] text-white'); // For selected pill

// Job Info and Form Container Background
content = content.replace(/bg-gradient-to-br from-\[rgba\(81,123,152,0\.55\)\] via-\[rgba\(55,83,103,0\.3\)\] to-\[rgba\(27,40,50,0\.1\)\] backdrop-blur-md border border-white\/15/g, 'bg-[#1f3a58] border-none text-white');

// Job Card Pill Tags
content = content.replace(/bg-white\/5 border border-white\/10 px-3 py-1\.5 rounded-full text-xs font-medium text-white\/80/g, 'bg-transparent border-none px-3 py-1.5 text-xs font-medium text-white');

// Form Inputs and Labels
// The labels had text-[#1b365d] due to the earlier text-white/90 replacement. We need to fix that because they are on a dark blue background.
content = content.replace(/label htmlFor="name" className="text-\[0\.95rem\] font-medium text-\[#1b365d\] flex items-center gap-1\.5"/g, 'label htmlFor="name" className="text-[1.1rem] font-medium text-white flex items-center gap-1.5"');
content = content.replace(/label htmlFor="phone" className="text-\[0\.95rem\] font-medium text-\[#1b365d\] flex items-center gap-1\.5"/g, 'label htmlFor="phone" className="text-[1.1rem] font-medium text-white flex items-center gap-1.5"');
content = content.replace(/label htmlFor="email" className="text-\[0\.95rem\] font-medium text-\[#1b365d\] flex items-center gap-1\.5"/g, 'label htmlFor="email" className="text-[1.1rem] font-medium text-white flex items-center gap-1.5"');
content = content.replace(/label htmlFor="role" className="text-\[0\.95rem\] font-medium text-\[#1b365d\] flex items-center gap-1\.5"/g, 'label htmlFor="role" className="text-[1.1rem] font-medium text-white flex items-center gap-1.5"');
content = content.replace(/label htmlFor="message" className="text-\[0\.95rem\] font-medium text-\[#1b365d\] flex items-center gap-1\.5"/g, 'label htmlFor="message" className="text-[1.1rem] font-medium text-white flex items-center gap-1.5"');

// Form icons - removing them
content = content.replace(/<User size={16} \/> /g, '');
content = content.replace(/<Phone size={16} \/> /g, '');
content = content.replace(/<Mail size={16} \/> /g, '');
content = content.replace(/<MessageSquare size={16} \/> /g, '');

// Inputs styling
content = content.replace(/rounded border border-white\/15 bg-black\/20/g, 'rounded-full border border-gray-400/50 bg-transparent');
// Textarea shouldn't be fully rounded usually, but let's make it rounded-3xl or keep it rounded
content = content.replace(/<textarea([^>]*)rounded-full([^>]*)>/g, '<textarea$1rounded-3xl$2>');
// Actually, let's just replace all rounded for inputs to rounded-full
content = content.replace(/className="w-full px-4 py-3 rounded /g, 'className="w-full px-4 py-3 rounded-full ');

// Upload & Submit Buttons
content = content.replace(/<label htmlFor="resume" className="flex items-center justify-center gap-2 p-3 border border-dashed border-white\/25 rounded-md cursor-pointer bg-white\/2 text-\[0\.9rem\] text-white\/80 transition-all duration-300 hover:border-\[#cc7722\] hover:bg-\[#cc7722\]\/5 hover:text-\[#cc7722\]">/g, '<label htmlFor="resume" className="flex items-center justify-center gap-2 px-8 py-3.5 border border-gray-400/50 rounded-full cursor-pointer bg-transparent text-[0.95rem] font-bold text-white transition-all duration-300 hover:bg-white/10">');
content = content.replace(/<Upload size={16} \/> Resume/g, ''); // Remove the Resume label above upload
content = content.replace(/<label className="text-\[0\.95rem\] font-medium text-\[#1b365d\] flex items-center gap-1\.5">\s*<\/label>/, ''); // Remove empty label

content = content.replace(/className="w-full bg-\[#cc7722\] text-brand-dark border-none p-4 text-\[1\.05rem\] font-bold rounded-md cursor-pointer transition-all duration-300 uppercase tracking-\[0\.03em\] shadow-\[0_4px_12px_rgba\(255,204,0,0\.15\)\] hover:bg-\[#ffdb33\] hover:-translate-y-0\.5 hover:shadow-\[0_6px_16px_rgba\(255,204,0,0\.3\)\] active:translate-y-0\.5"/g, 'className="w-full bg-transparent border border-gray-400/50 px-8 py-3.5 text-[0.95rem] font-bold rounded-full cursor-pointer transition-all duration-300 uppercase tracking-[0.03em] text-white hover:bg-white/10"');

// Fix textarea rounded
content = content.replace(/<textarea([\s\S]*?)rounded-full/g, '<textarea$1rounded-[24px]'); 

fs.writeFileSync(file, content);
console.log('Career page updated');
