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
mime_type = "application/vnd.ms-access"
icon = get_unicode_icon(mime_type)
print(f"Icon for '{mime_type}': {icon}")
