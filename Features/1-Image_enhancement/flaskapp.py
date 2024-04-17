from flask import Flask, request, send_file
from PIL import Image
import numpy as np
import cv2
import io
from Features.1_-_Image_enhancement import Brightness, Contrast

app = Flask(__name__)

@app.route('/process-image', methods=['POST'])
def process_image():
    file = request.files['image'].read()  # Read the file
    npimg = np.frombuffer(file, np.uint8)  # Convert file to a numpy array
    image = cv2.imdecode(npimg, cv2.IMREAD_COLOR)  # Decode the image array into an image

    # Get the enhancement values from the request, for example:
    brightness_value = int(request.form.get('brightness', 0))
    contrast_value = int(request.form.get('contrast', 1))

    # Apply the enhancements
    if brightness_value != 0:
        image = Brightness.brighten_image(image, brightness_value)
    if contrast_value != 1:
        image = Contrast.contrast_image(image, contrast_value)

    # Encode the processed image to send as response
    _, img_encoded = cv2.imencode('.png', image)  # You might want to choose the format based on the input
    return send_file(
        io.BytesIO(img_encoded),
        mimetype='image/png',
        as_attachment=True,
        attachment_filename='processed_image.png'
    )

if __name__ == '__main__':
    app.run(debug=True)
