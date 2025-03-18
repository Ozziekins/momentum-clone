# Momentum Clone (Vue.js)

A minimalist, dynamic web application inspired by the Momentum Chrome extension. It greets you personally, displaying a real-time clock, weather based on your location, daily inspirational quotes, and beautiful background images that update every day.

## 🌟 Features

- **Personalized Greeting:** Prompts the user for their name on the first visit and greets them based on the current time (morning, afternoon, evening).
- **Dynamic Background:** Daily changing high-quality nature images sourced via the Unsplash API.
- **Live Clock & Date:** Real-time clock (HH:mm:ss format) and calendar date clearly displayed.
- **Location-Based Weather Widget:** Automatically detects your location to display the current weather, including:
  - Weather condition icon
  - City name
  - Temperature in Celsius
  - Graceful fallback location (Barcelona) if geolocation fails
- **Daily Inspirational Quote:** Shows a fresh motivational quote each day using external quote APIs.

## 🚀 Built with

- [Vue.js 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/) for HTTP requests
- [Moment.js](https://momentjs.com/) for date and time handling
- [OpenWeatherMap API](https://openweathermap.org/api) for weather data
- [Unsplash API](https://unsplash.com/developers) for backgrounds
- [ZenQuotes API](https://zenquotes.io/) for quotes information

## 📦 Installation

Clone and navigate to the project directory:

```bash
git clone https://github.com/Ozziekins/momentum-clone.git
cd momentum-clone
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory with your API keys:

```env
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
VITE_OPENWEATHER_API_KEY=your_openweathermap_api_key
```

For the above you first need to create your own API keys as shown below:

## 🚨 API Keys

This app uses external APIs:
- **Unsplash**: [Create an app and get your access key here](https://unsplash.com/developers).
- **OpenWeatherMap**: [Sign up for a free API key here](https://openweathermap.org/api).

## 🛠️ Development

Run the development server:

```bash
npm run dev
```

Your app will now be accessible at [`http://localhost:5173`](http://localhost:5173).

## 🛠️ Development workflow

Linting and formatting are automatically enforced through [Biome](https://biomejs.dev/) and [Husky](https://typicode.github.io/husky) pre-commit hooks.

To manually run formatting and linting:

```bash
npm run lint:fix
npm run format
```

## 📖 Project Structure

```bash
.
├── src
│   ├── components
│   │   ├── BackgroundImage.vue
│   │   ├── ClockDisplay.vue
│   │   ├── DateDisplay.vue
│   │   ├── GreetingCard.vue
│   │   ├── DailyQuote.vue
│   │   └── WeatherWidget.vue
│   ├── App.vue
│   └── main.js
│   └── style.css
├── .env
├── index.html
├── vite.config.js
├── biome.json
└── package.json
```

## 🌐 Deployment

To be implemented

## ⚠️ Known issues & Troubleshooting

- **Geolocation Permission Denial:** The app will default to Barcelona if user location access is denied or fails.
- **CORS Issues:** Use a proxy during development if APIs have CORS restrictions.

## 📄 License

MIT License © [Ozioma Okonicha](https://github.com/Ozziekins)

## 📫 Contributing

Pull requests and improvements are always welcome! Please fork the repo and create a pull request with your suggested changes.