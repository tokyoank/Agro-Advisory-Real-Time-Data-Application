# Agricultural Advisory App

A comprehensive AI-powered agricultural advisory mobile application built with React Native, designed to help small farmers in India make informed decisions about crop selection, pest control, soil health, weather monitoring, and market prices.

## Features

### Core Features
- **AI-Powered Crop Recommendations**: Personalized crop suggestions based on location, soil type, and season
- **Weather Monitoring**: Real-time weather alerts and farming recommendations
- **Pest & Disease Detection**: Image-based pest and disease identification with treatment recommendations
- **Soil Health Analysis**: Soil testing and improvement recommendations
- **Market Price Tracking**: Real-time commodity prices and market insights
- **Voice Assistant**: Natural language processing for hands-free interaction
- **Multilingual Support**: Support for English, Hindi, Telugu, Tamil, and Bengali

### Advanced Features
- **Offline Functionality**: Core features work without internet connection
- **Push Notifications**: Weather alerts, pest warnings, and farming reminders
- **Data Analytics**: Track farming expenses, yields, and profitability
- **Crop Calendar**: Planting and harvesting schedules
- **Fertilizer & Irrigation Schedules**: Automated reminders and recommendations
- **Expense Tracking**: Monitor farming costs and calculate profits

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- React Native CLI
- Android Studio (for Android development)
- Xcode (for iOS development)
- Java Development Kit (JDK 11 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd agri-advisory-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Install iOS dependencies** (iOS only)
   ```bash
   cd ios && pod install && cd ..
   ```

4. **Start Metro bundler**
   ```bash
   npm start
   # or
   yarn start
   ```

5. **Run the app**
   ```bash
   # Android
   npm run android
   # or
   yarn android

   # iOS
   npm run ios
   # or
   yarn ios
   ```

## App Structure

```
src/
├── components/          # Reusable UI components
│   ├── cropadvisory.js     # Crop recommendation component
│   ├── marketprices.js     # Market price display
│   ├── pestdetection.js    # Pest detection interface
│   ├── soilhealth.js       # Soil analysis component
│   ├── voiceassistant.js   # Voice interaction
│   └── weatheralerts.js    # Weather monitoring
├── screens/             # Main app screens
│   ├── homescreen.js       # Dashboard
│   ├── cropselection.js    # Crop selection interface
│   ├── advisoryscreen.js   # Advisory services
│   └── profilescreen.js    # User profile
├── services/            # API and business logic
│   ├── api.js              # API calls
│   ├── aiService.js        # AI processing
│   ├── weatherservice.js   # Weather data
│   └── translationservice.js # Localization
└── utils/               # Utility functions
    ├── constants.js        # App constants
    ├── helpers.js          # Helper functions
    ├── storage.js          # Data persistence
    ├── analytics.js        # Analytics tracking
    ├── notifications.js    # Push notifications
    └── validation.js       # Input validation
```

##  Configuration

### API Configuration
Update the API endpoints in `src/services/api.js`:
```javascript
const BASE_URL = 'https://your-api-endpoint.com';
```

### Weather API
Configure weather service in `src/services/weatherservice.js`:
```javascript
const WEATHER_API_KEY = 'your-weather-api-key';
```

### Push Notifications
Set up Firebase for push notifications in `android/app/google-services.json` and `ios/GoogleService-Info.plist`.

##  Supported Languages

- English (en)
- Hindi (hi)
- Telugu (te)
- Tamil (ta)
- Bengali (bn)

## Data Sources

### Weather Data
- OpenWeatherMap API
- Indian Meteorological Department (IMD)

### Market Prices
- Agricultural Produce Market Committee (APMC)
- Local market data
- Government procurement prices

### Crop Recommendations
- Indian Council of Agricultural Research (ICAR)
- State Agricultural Universities
- Local farming practices

## Testing

Run the test suite:
```bash
npm test
# or
yarn test
```










