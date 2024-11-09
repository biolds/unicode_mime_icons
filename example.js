const fs = require("fs");

// Load the MIME type to Unicode icon mapping
const mimeIcons = JSON.parse(
  fs.readFileSync("unicode_mime_icons.json", "utf8"),
);

function getUnicodeIcon(mimeType) {
  // Search for the matching icon based on mimeType
  for (const regex in mimeIcons) {
    const re = new RegExp(regex);
    if (re.test(mimeType)) {
      return mimeIcons[regex];
    }
  }
  return "🗎";
}

// Example usage
const mimeType = "image/png";
const icon = getUnicodeIcon(mimeType);
console.log(`Icon for '${mimeType}': ${icon}`);
