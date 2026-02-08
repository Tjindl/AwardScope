from PIL import Image
import math

def remove_background(input_path, output_path, tolerance=30):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    # Get background color from top-left pixel
    bg_color = datas[0]
    
    new_data = []
    
    for item in datas:
        # Calculate Euclidean distance from background color
        diff = math.sqrt(
            (item[0] - bg_color[0]) ** 2 +
            (item[1] - bg_color[1]) ** 2 +
            (item[2] - bg_color[2]) ** 2
        )
        
        # If color is close to background color, make it transparent
        if diff < tolerance:
            new_data.append((255, 255, 255, 0)) # Fully transparent
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved transparent logo to {output_path}")

if __name__ == "__main__":
    remove_background(
        "/Users/tusharjindal/Code/new-hackthecoast/AwardScope/Frontend/public/logo.png",
        "/Users/tusharjindal/Code/new-hackthecoast/AwardScope/Frontend/public/logo-transparent.png"
    )
