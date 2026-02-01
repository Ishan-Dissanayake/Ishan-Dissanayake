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

// 2. Define the exact block to replace (Tags included)
const newContent = `Last updated on: ${formattedDate}
`;

// 3. Read file
const readmePath = './README.md';
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// 4. Regex to find the existing block
// This finds: [anything in between] const replacementRegex = /[\s\S]*?/;

if (readmeContent.match(replacementRegex)) {
    // Replace the old block with the new one
    const updatedReadme = readmeContent.replace(replacementRegex, newContent);
    fs.writeFileSync(readmePath, updatedReadme);
    console.log('✅ Date updated successfully!');
} else {
    console.error('❌ Error: Could not find in README.md');
    console.error('Please make sure you pasted the starting block into your README first.');
    process.exit(1);
}