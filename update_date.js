const fs = require('fs');

// Sri Lanka time
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

// New content
const newContent = `<!-- START -->\nLast updated on: ${formattedDate}\n<!-- END -->`;

const readmePath = './README.md';
const readme = fs.readFileSync(readmePath, 'utf8');

// Replace only inside tags
const regex = /<!-- START -->[\s\S]*?<!-- END -->/;

if (!regex.test(readme)) {
    console.error('❌ START / END tags not found');
    process.exit(1);
}

const updated = readme.replace(regex, newContent);
fs.writeFileSync(readmePath, updated);

console.log('✅ Date updated successfully!');
