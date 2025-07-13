import requests
import os

# Read all image URLs from file
with open('image_urls.txt', 'r') as file:
    urls = file.readlines()

# Create folder
os.makedirs("pinterest_images", exist_ok=True)

# Download each image
for idx, url in enumerate(urls):
    try:
        response = requests.get(url.strip())
        with open(f"pinterest_images/image_{idx}.jpg", 'wb') as f:
            f.write(response.content)
    except Exception as e:
        print(f"Failed to download {url.strip()}: {e}")
