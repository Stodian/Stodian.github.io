import cv2

def brighten_image(image, brightness_value):
    # Convert the brightness value from slider to an appropriate format if necessary
    # Apply brightness changes
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
    h, s, v = cv2.split(hsv)
    v += brightness_value  # You'll need to adjust this calculation
    final_hsv = cv2.merge((h, s, v))
    image = cv2.cvtColor(final_hsv, cv2.COLOR_HSV2BGR)
    return image