const fs = require('fs');

// 1. Get current date (Sri Lanka Time)
const now = new Date();
const options = { 
    timeZone: 'Asia/Colombo', 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
};
const formattedDate = now.toLocaleString('en-US', options);

// 2. New content (first line only)
const newContent = `Last updated on: ${formattedDate}`;

// 3. Read file
const readmePath = './README.md';
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// 4. Replace ONLY the first line
const replacementRegex = /^Last updated on:.*$/m;

if (readmeContent.match(replacementRegex)) {
    const updatedReadme = readmeContent.replace(replacementRegex, newContent);
    fs.writeFileSync(readmePath, updatedReadme);
    console.log('✅ Date updated successfully!');
} else {
    console.error('❌ Error: First line not found');
    process.exit(1);
}
