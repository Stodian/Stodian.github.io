import cv2
import numpy as np

def apply_contrast(image, contrast_value):
    """
    Adjusts the contrast of an image.
    :param image: OpenCV image
    :param contrast_value: int or float, the factor by which the contrast will be increased or decreased
                          The value can be from 1.0 (no change) to 3.0 (triple the contrast), for example.
    :return: Image with adjusted contrast
    """
    
    # The value should be a float, typically between 1.0 and 3.0.
    # 1.0 means no change, <1.0 means less contrast, >1.0 means more contrast.
    f = float(131 * (contrast_value + 127)) / (127 * (131 - contrast_value))
    alpha_c = f
    gamma_c = 127*(1-f)

    # Call addWeighted function, which calculates the weighted sum of two arrays
    return cv2.addWeighted(image, alpha_c, image,
