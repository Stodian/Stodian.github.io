from PIL import Image, ImageEnhance
import numpy as np
import matplotlib.pyplot as plt

def adjust_contrast(image, factor):
    enhancer = ImageEnhance.Contrast(image)
    return enhancer.enhance(factor)

image = Image.open('dog.jpg')
enhanced_contrast = adjust_contrast(image, 1.5)

original_and_enhanced_contrast = np.hstack((image, enhanced_contrast))

plt.figure(figsize = [30, 30])
plt.axis('off')
plt.imshow(original_and_enhanced_contrast, cmap = 'gray')