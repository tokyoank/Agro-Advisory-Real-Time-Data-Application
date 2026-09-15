// Environment Configuration for Agri Advisory App
// Copy this file to config.js and update with your actual values

module.exports = {
  // API Configuration
  API_BASE_URL: 
  API_TIMEOUT: 30000,
  API_RETRY_ATTEMPTS: 3,

  // Weather API
  WEATHER_API_KEY: 
  WEATHER_API_URL: 

  // Market Data API
  MARKET_API_KEY: 
  MARKET_API_URL: 

  // AI Service API
  AI_SERVICE_API_KEY:
  AI_SERVICE_API_URL: 

  // Push Notifications
  PUSH_NOTIFICATION_SENDER_ID: 
  PUSH_NOTIFICATION_SERVER_KEY: 

  // Analytics
  ANALYTICS_ENABLED: true,
  ANALYTICS_TRACKING_ID: 'your_tracking_id_here',

  // Debug Configuration
  DEBUG_MODE: false,
  LOG_LEVEL: 'info',
  ENABLE_LOGGING: true,

  // Feature Flags
  ENABLE_VOICE_ASSISTANT: true,
  ENABLE_OFFLINE_MODE: true,
  ENABLE_PUSH_NOTIFICATIONS: true,
  ENABLE_ANALYTICS: true,
  ENABLE_CRASH_REPORTING: true,

  // App Configuration
  APP_VERSION: '1.0.0',
  APP_BUILD_NUMBER: 1,
  APP_NAME: 'Agri Advisory',
  APP_DESCRIPTION: 'AI-powered agricultural advisory app for small farmers in India',

  // Database Configuration
  DATABASE_NAME: 'agri_advisory.db',
  DATABASE_VERSION: 1,

  // Cache Configuration
  CACHE_SIZE_MB: 100,
  CACHE_EXPIRY_HOURS: 24,

  // Image Configuration
  MAX_IMAGE_SIZE_MB: 10,
  IMAGE_QUALITY: 80,
  IMAGE_FORMAT: 'jpeg',

  // Location Configuration
  DEFAULT_LATITUDE: 28.6139,
  DEFAULT_LONGITUDE: 77.2090,
  DEFAULT_LOCATION: 'Delhi, India',

  // Language Configuration
  DEFAULT_LANGUAGE: 'en',
  SUPPORTED_LANGUAGES: ['en', 'hi', 'te', 'ta', 'bn'],

  // Theme Configuration
  DEFAULT_THEME: 'light',
  SUPPORTED_THEMES: ['light', 'dark'],

  // Notification Configuration
  NOTIFICATION_SOUND_ENABLED: true,
  NOTIFICATION_VIBRATION_ENABLED: true,
  NOTIFICATION_LED_ENABLED: true,

  // Security Configuration
  ENCRYPTION_ENABLED: true,
  BIOMETRIC_AUTH_ENABLED: false,
  PIN_AUTH_ENABLED: false,

  // Performance Configuration
  LAZY_LOADING_ENABLED: true,
  IMAGE_OPTIMIZATION_ENABLED: true,
  MEMORY_OPTIMIZATION_ENABLED: true,

  // Development Configuration
  ENABLE_HOT_RELOAD: true,
  ENABLE_DEBUG_MENU: false,
  ENABLE_PERFORMANCE_MONITORING: false,
};
