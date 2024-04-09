import cv2
import numpy as np
import matplotlib.pyplot as plt

def adjust_brightness_contrast(image, alpha, beta):
    return cv2.addWeighted(image, alpha, image, 0, beta)

image = cv2.imread('dog.jpg')
enhanced_image = adjust_brightness_contrast(image, 1.2, 30)
original_and_enhanced_image = np.hstack((image, enhanced_image))

plt.figure(figsize = [30, 30])
plt.axis('off')
plt.imshow(original_and_enhanced_image [:,:,::-1])