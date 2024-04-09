from PIL import Image, ImageEnhance
import numpy as np
import matplotlib.pyplot as plt

def adjust_brightness(image, factor):
    enhancer = ImageEnhance.Brightness(image)
    return enhancer.enhance(factor)

image = Image.open('dog.jpg')
enhanced_image = adjust_brightness(image, 1.5)

original_and_enhanced_image = np.hstack((image, enhanced_image))

plt.figure(figsize = [30, 30])
plt.axis('off')
plt.imshow(original_and_enhanced_image, cmap = 'gray')