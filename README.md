### Unicode MIME Icons

This project provides a unicode_mime_icons.json file that contains a mapping of
MIME type regular expressions (regex) to corresponding Unicode icons. It allows
developers to easily map file types or MIME types to a consistent set of Unicode
icons, which can be used for display purposes in web apps, desktop applications,
or other software.

### Usage

#### Python Example

To use the unicode_mime_icons.json file in Python, you can load the JSON file
and write a function that looks up the appropriate icon for a given MIME type.

```
import json
import re

# Load the MIME type to Unicode icon mapping
with open('unicode_mime_icons.json', 'r') as f:
    mime_icons = json.load(f)

def get_unicode_icon(mime_type):
    # Search for the matching icon based on mime_type
    for regex, icon in mime_icons.items():
        if re.match(regex, mime_type):
            return icon
    return '🗎'

# Example usage
mime_type = "image/png"
icon = get_unicode_icon(mime_type)
print(f"Icon for '{mime_type}': {icon}")
```

#### Javascript Example

To use the unicode_mime_icons.json file in Javascript, you can load the JSON file
and write a function that looks up the appropriate icon for a given MIME type.

```
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
```
