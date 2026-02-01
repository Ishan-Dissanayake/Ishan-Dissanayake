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
    minute: '2-digit'
};
const formattedDate = now.toLocaleString('en-US', options);

// 2. Define the new content
const newContent = `Last updated on: ${formattedDate}`;

// 3. Read the README file
const readmePath = './README.md';
let readmeContent = fs.readFileSync(readmePath, 'utf8');

// 4. Replace the old date using the markers
// This regex finds everything between the comments and replaces it
const replacementRegex = /()[\s\S]*?()/;

if (readmeContent.match(replacementRegex)) {
    const updatedReadme = readmeContent.replace(replacementRegex, `$1\n${newContent}\n$2`);
    fs.writeFileSync(readmePath, updatedReadme);
    console.log('README updated successfully!');
} else {
    console.error('Could not find the markers in README.md');
    process.exit(1);
}