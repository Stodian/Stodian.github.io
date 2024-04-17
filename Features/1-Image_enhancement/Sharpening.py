import cv2
import numpy as np
import matplotlib.pyplot as plt

def sharpen_image(image):
    kernel = np.array([[-1, -1, -1],
                       [-1, 9, -1],
                       [-1, -1, -1]])
    return cv2.filter2D(image, -1, kernel)

image = cv2.imread('dog.jpg')
sharpened_image = sharpen_image(image)

original_and_sharpened_image = np.hstack((image, sharpened_image))

plt.figure(figsize = [30, 30])
plt.axis('off')
plt.imshow(original_and_sharpened_image[:,:,::-1])