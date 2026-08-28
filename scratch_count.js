const fs = require('fs');
const html = fs.readFileSync('E:/Workspace/projects/kobci-site/index.html', 'utf8');

// Find all elements with class 't' (naively by just looking at tags)
let tCount = 0;
let validCount = 0;

// Use regex to find opening tags
const tagRegex = /<[^>]+class="[^"]*\bt\b[^"]*"[^>]*>/g;
let match;
const invalidTags = [];
while ((match = tagRegex.exec(html)) !== null) {
  tCount++;
  const tag = match[0];
  if (tag.includes('data-so=') && tag.includes('data-en=')) {
    validCount++;
  } else {
    invalidTags.push({tag, index: match.index});
  }
}

console.log('tCount:', tCount, 'valid:', validCount);
console.log('Invalid:', invalidTags);
