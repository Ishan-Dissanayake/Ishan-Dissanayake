const fs = require('fs');

// 1. Get the current date (Sri Lanka Time)
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

// 2. Define the Complete Block (Tags + Content)
// This creates a fixed 3-line block every time. No growing.
const newBlock = `Last updated on: ${formattedDate}
`;

// 3. Read the README file
const readmePath = './README.md';
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// 4. Replace the ENTIRE block
// This Regex finds everything from Start Tag to End Tag
const replacementRegex = /[\s\S]*?/;

if (readmeContent.match(replacementRegex)) {
    // Replace the old block with the clean new block
    const updatedReadme = readmeContent.replace(replacementRegex, newBlock);
    fs.writeFileSync(readmePath, updatedReadme);
    console.log('✅ README updated cleanly!');
} else {
    console.error('❌ Could not find the markers.');
    process.exit(1);
}