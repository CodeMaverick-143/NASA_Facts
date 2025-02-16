# Space Facts App

A sleek and modern React application that displays fascinating space images and facts sourced from NASA's Open API. This app features the Astronomy Picture of the Day (APOD), random space facts, and can be extended to include Mars Rover photos and search functionalities.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Integration](#api-integration)
- [Customization](#customization)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Features

- **Astronomy Picture of the Day (APOD):**  
  Displays NASA’s APOD including title, date, explanation, and media (image or video).

- **Random Space Fact:**  
  Showcases a random fact about space every time the app loads.

- **Dark Theme with Gradient Box Shadow:**  
  Enjoy a modern UI featuring a dark theme and a stylish gradient box shadow effect around content containers.

- **Extensible Structure:**  
  Ready to add more features such as Mars Rover photos and search functionalities.

## Tech Stack

- **React.js:** JavaScript library for building user interfaces.
- **Axios:** For handling API requests.
- **CSS:** Custom styling for dark theme and gradient effects.
- **NASA Open API:** Provides the data for space images and facts.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/space-facts-app.git
   cd space-facts-app
   ```
## Install Dependencies:

```bash
npm install
Setup Environment Variables:
```

## Create a .env file in the root directory and add your NASA API key:

```.env
REACT_APP_NASA_API_KEY=your_nasa_api_key_here
```
## Start the Development Server:

```bash
npm start
```
Open your browser and navigate to http://localhost:3000 to view the app.

API Integration
NASA Open API:
The app utilizes the NASA Open API to fetch:

Astronomy Picture of the Day (APOD)
Mars Rover Photos (extendable functionality)
Ensure you have a valid NASA API key to get the data. For more details, visit the NASA API Documentation.

## Customization
Styling:
The dark theme and gradient box shadow styles are defined in the src/index.css file. Feel free to adjust the color scheme, gradient, or any other style.

## Components:
The app is built with modular components (APOD.js, RandomSpaceFact.js, etc.) to easily add or modify features.

## License
Distributed under the MIT License. See LICENSE for more information.

## Acknowledgements
- NASA for providing the open API.
- The React community for their fantastic tools and resources.
- Inspiration from various space-themed applications and design trends.
