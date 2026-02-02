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

// 2. Define the exact block to replace (Includes the INVISIBLE TAGS)
const newContent = `Last updated on: ${formattedDate}`;

// 3. Read file
const readmePath = './README.md';
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// 4. Regex to find the existing block
// (This finds the hidden tags so it deletes the old date correctly!)
const replacementRegex = /[\s\S]*?/;

// 5. Check and Replace
if (readmeContent.match(replacementRegex)) {
    const updatedReadme = readmeContent.replace(replacementRegex, newContent);
    fs.writeFileSync(readmePath, updatedReadme);
    console.log('✅ Date updated successfully!');
} else {
    console.error('❌ Error: Tags not found! Did you reset your README?');
    process.exit(1);
}
