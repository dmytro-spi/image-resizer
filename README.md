Image Processing App
====================

Project Description
-------------------

This React application allows users to upload images, which are then automatically resized to a square format while maintaining the original aspect ratio of the images. The resized images are framed with white borders to ensure they fit perfectly into a square without cropping any part of the original image. This tool is ideal for preparing images for uniform presentation in galleries or on product pages where consistency is key.

Getting Started
---------------

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before running the application, make sure you have Node.js installed on your machine. You can download and install it from [nodejs.org](https://nodejs.org/).

### Installation

Follow these steps to get your development environment running:

1.  **Clone the repository**

    bashCopy code

    `git clone https://github.com/dmytro-spi/image-resizer.git`
    `cd image-resizer`

2.  **Install the necessary packages**

    Run the following command to install the required packages:

    bashCopy code

    `npm install`

    This command will install all the dependencies defined in the `package.json` file.


### Running the Application

To start the application, run the following command:

bashCopy code

`npm start`

This will launch the React development server and open the application in your default web browser. The server runs on http://localhost:3000 by default.

Features
--------

*   **Image Upload:** Users can drag and drop or click to upload their images.
*   **Automatic Resizing:** Images are automatically resized to a 1:1 aspect ratio with white borders added to maintain the original image aspect ratio.
*   **Download:** Users can download the processed images with the original filenames prefixed to indicate processing.

Contributing
------------

Feel free to fork the repository and submit pull requests. You can also open issues in the repository for any bugs or improvements you would like to suggest.
