# 🌤️ Weather App

A simple and visually appealing weather application that allows users to search for current weather conditions in any city using the OpenWeatherMap API. The app provides temperature, weather descriptions, and an icon representing the weather condition.

## ![Screenshot](https://github.com/user-attachments/assets/142b7195-af2e-43ac-a7ab-61d7b128d4f0)

## ✨ Features
- **City Search**: Get weather data for any city worldwide.
- **Real-Time Weather**: Displays the latest temperature, weather description, and an icon.
- **Attractive UI**: Clean, user-friendly interface for a seamless experience.
- **Powered by OpenWeatherMap API**: Fetches accurate and reliable weather data.

## 🚀 Demo
Live Demo on [GitHub Pages](#)  
_(Update with your GitHub Pages link once deployed.)_

## 🛠️ Technologies Used
- **HTML**: Markup structure for the app.
- **CSS**: Styling for the user interface.
- **JavaScript**: Fetching and dynamically displaying weather data.
- **OpenWeatherMap API**: Source for weather information.

## 📷 Screenshots
_Main Page_

## ⚙️ Installation & Usage

### Prerequisites
- A web browser to view the app.
- A valid API key from [OpenWeatherMap](https://openweathermap.org/).

### Steps to Run Locally
#### 1. Clone the Repository:
```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
```

#### 2. Add API Key:
- Open `script.js`.
- Replace the placeholder API key with your own from OpenWeatherMap.

#### 3. Run Locally:
- Open `index.html` in your preferred browser.

## 🚀 Deploy to GitHub Pages

### 1. Initialize a Repository:
```bash
git init
git add .
git commit -m "Initial commit"
```

### 2. Push to GitHub:
```bash
git remote add origin https://github.com/your-username/weather-app.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages:
- Go to your GitHub repository settings.
- Navigate to the **Pages** section.
- Set the source to the `main` branch and folder `/ (root)`.
- Save and wait for deployment.

## 💻 File Structure
```plaintext
weather-app/
│
├── index.html       # Main HTML file
├── script.js        # JavaScript logic for fetching and displaying weather data
├── README.md        # Project documentation
└── style.css        # Styling for the app
```

## 🔗 API Reference
This app uses the [OpenWeatherMap Current Weather Data API](https://openweathermap.org/current).

### Example API Endpoint:
```plaintext
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric
```

## 🤝 Contributing
Contributions are welcome! If you have any ideas to enhance this project:
1. **Fork the repository**.
2. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add some feature"
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature-name
   ```
5. **Open a pull request**.

## 📜 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

