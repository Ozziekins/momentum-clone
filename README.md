# Momentum Clone Monorepo

This monorepo hosts multiple implementations of the Momentum-inspired web application in different frontend frameworks. Each implementation offers the same functionality:

- Dynamic daily backgrounds
- Real-time clock and date
- Weather information based on user location
- Daily motivational quotes
- Personalized greetings

## 📂 Project Structure

```
momentum-clone
├── vue                 # Vue.js version
└── svelte              # Svelte version
```

## 🚀 Features

- **Personalized Greetings:** Customized based on user's name and current time.
- **Dynamic Backgrounds:** Beautiful daily images fetched from Unsplash.
- **Weather Widget:** Displays current weather based on user's geolocation (fallback to Barcelona).
- **Real-time Clock & Date:** Updated every second.
- **Inspirational Quotes:** Daily motivation fetched from public APIs.

## 📦 Getting Started

Navigate into the desired framework folder (`vue` or `svelte`) and follow the specific README for setup and development instructions.

For Vue:
```bash
cd vue
npm install
npm run dev
```

For Svelte:
```bash
cd svelte
npm install
npm run dev
```

## 🛠️ Tech Stack

- **Vue.js** (using Vite)
- **Svelte** (using Vite)
- **Axios** for HTTP requests
- **Moment.js** for handling date/time (Vue version)
- **Unsplash API** for images
- **OpenWeatherMap API** for weather data
- **ZenQuotes API** for quotes information

## 🚨 API Keys

Both projects require external APIs:
- [Unsplash API](https://unsplash.com/developers)
- [OpenWeatherMap API](https://openweathermap.org/api)

Create a `.env` file in each project's root folder with your API keys:

```env
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_key
VITE_OPENWEATHER_API_KEY=your_openweather_key
```

## 📫 Contributing

Contributions and improvements are welcome. Fork the repository, make your changes, and open a pull request.

## 📄 License

MIT License © [Ozioma Okonicha](https://github.com/Ozziekins)

