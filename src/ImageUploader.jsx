import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import pica from 'pica';

const ImageUploader = () => {
  const onDrop = useCallback(async (acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        const img = new Image();
        img.src = reader.result;

        img.onload = () => {
          const picaInstance = pica();
          const size = Math.max(img.width, img.height);
          const offscreenCanvas = document.createElement('canvas');
          offscreenCanvas.width = size;
          offscreenCanvas.height = size;

          const ctx = offscreenCanvas.getContext('2d');
          // remove image
          ctx.clearRect(0, 0, size, size);
          // fill with white background
          ctx.fillStyle = 'white';
          ctx.fillRect(0, 0, size, size);

          // Calculate the position to center the image on the canvas
          const x = (size - img.width * Math.min(1, size / img.width)) / 2;
          const y = (size - img.height * Math.min(1, size / img.height)) / 2;

          ctx.drawImage(img, x, y, img.width * Math.min(1, size / img.width), img.height * Math.min(1, size / img.height));
          offscreenCanvas.toBlob(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            // Add a prefix and use the original file name
            a.download = `processed_${file.name.split('.').slice(0, -1).join('.')}.jpg`;
            document.body.appendChild(a);
            a.click();
            a.remove();
          }, 'image/jpeg', 0.75);
        };
      };

      reader.readAsDataURL(file);
    });
  }, []);

  const {getRootProps, getInputProps} = useDropzone({onDrop, accept: 'image/*'});

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some images here, or click to select images</p>
    </div>
  );
};

export default ImageUploader;
