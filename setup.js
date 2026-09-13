#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🌾 Agricultural Advisory App Setup');
console.log('=====================================\n');

// Check if Node.js is installed
function checkNodeVersion() {
  try {
    const version = process.version;
    const majorVersion = parseInt(version.slice(1).split('.')[0]);
    
    if (majorVersion < 16) {
      console.error('❌ Node.js version 16 or higher is required');
      console.error(`   Current version: ${version}`);
      process.exit(1);
    }
    
    console.log(`✅ Node.js version: ${version}`);
  } catch (error) {
    console.error('❌ Node.js is not installed');
    process.exit(1);
  }
}

// Check if React Native CLI is installed
function checkReactNativeCLI() {
  try {
    execSync('npx react-native --version', { stdio: 'pipe' });
    console.log('✅ React Native CLI is available');
  } catch (error) {
    console.log('⚠️  React Native CLI not found, installing...');
    try {
      execSync('npm install -g @react-native-community/cli', { stdio: 'inherit' });
      console.log('✅ React Native CLI installed');
    } catch (installError) {
      console.error('❌ Failed to install React Native CLI');
      console.error('   Please install it manually: npm install -g @react-native-community/cli');
    }
  }
}

// Install dependencies
function installDependencies() {
  console.log('\n📦 Installing dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed successfully');
  } catch (error) {
    console.error('❌ Failed to install dependencies');
    console.error('   Please run: npm install');
    process.exit(1);
  }
}

// Create necessary directories
function createDirectories() {
  const directories = [
    'src/locales',
    'src/assets/images',
    'src/assets/icons',
    'android/app/src/main/assets',
    'ios/AgriAdvisoryApp/Images.xcassets'
  ];

  directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`✅ Created directory: ${dir}`);
    }
  });
}

// Create environment configuration
function createEnvConfig() {
  const envConfig = `# Agricultural Advisory App Configuration

# API Configuration
API_BASE_URL=https://api.agri-advisory.com
WEATHER_API_KEY=your_weather_api_key_here
MARKET_API_KEY=your_market_api_key_here

# Analytics
ANALYTICS_KEY=your_analytics_key_here

# Push Notifications
FCM_SERVER_KEY=your_fcm_server_key_here

# Development
DEBUG_MODE=true
LOG_LEVEL=info
`;

  if (!fs.existsSync('.env')) {
    fs.writeFileSync('.env', envConfig);
    console.log('✅ Created .env configuration file');
  }
}

// Create basic localization files
function createLocalizationFiles() {
  const languages = ['en', 'hi', 'te', 'ta', 'bn'];
  
  languages.forEach(lang => {
    const localeDir = `src/locales/${lang}`;
    if (!fs.existsSync(localeDir)) {
      fs.mkdirSync(localeDir, { recursive: true });
    }
    
    const commonTranslations = {
      "welcome": "Welcome",
      "crop_selection": "Crop Selection",
      "weather": "Weather",
      "market_prices": "Market Prices",
      "pest_detection": "Pest Detection",
      "soil_health": "Soil Health",
      "voice_assistant": "Voice Assistant",
      "settings": "Settings",
      "profile": "Profile",
      "help": "Help",
      "about": "About"
    };
    
    if (lang === 'hi') {
      commonTranslations.welcome = "स्वागत है";
      commonTranslations.crop_selection = "फसल चयन";
      commonTranslations.weather = "मौसम";
      commonTranslations.market_prices = "बाजार कीमतें";
      commonTranslations.pest_detection = "कीट पहचान";
      commonTranslations.soil_health = "मिट्टी की सेहत";
      commonTranslations.voice_assistant = "आवाज सहायक";
      commonTranslations.settings = "सेटिंग्स";
      commonTranslations.profile = "प्रोफाइल";
      commonTranslations.help = "मदद";
      commonTranslations.about = "के बारे में";
    }
    
    const filePath = `${localeDir}/common.json`;
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, JSON.stringify(commonTranslations, null, 2));
      console.log(`✅ Created localization file: ${filePath}`);
    }
  });
}

// Create basic test files
function createTestFiles() {
  const testDir = '__tests__';
  if (!fs.existsSync(testDir)) {
    fs.mkdirSync(testDir);
  }
  
  const basicTest = `// Basic test setup
import 'react-native';

describe('Agricultural Advisory App', () => {
  it('should have basic functionality', () => {
    expect(true).toBe(true);
  });
});
`;

  const testFile = `${testDir}/App.test.js`;
  if (!fs.existsSync(testFile)) {
    fs.writeFileSync(testFile, basicTest);
    console.log('✅ Created basic test file');
  }
}

// Create development scripts
function createScripts() {
  const packageJsonPath = 'package.json';
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    const newScripts = {
      'setup:android': 'cd android && ./gradlew clean && cd ..',
      'setup:ios': 'cd ios && pod install && cd ..',
      'reset:cache': 'npx react-native start --reset-cache',
      'build:android': 'cd android && ./gradlew assembleRelease',
      'build:ios': 'cd ios && xcodebuild -workspace AgriAdvisoryApp.xcworkspace -scheme AgriAdvisoryApp -configuration Release',
      'test:watch': 'jest --watch',
      'lint:fix': 'eslint src --fix',
      'format': 'prettier --write src/**/*.{js,jsx,ts,tsx}'
    };
    
    packageJson.scripts = { ...packageJson.scripts, ...newScripts };
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('✅ Added development scripts');
  }
}

// Main setup function
function main() {
  try {
    console.log('🔍 Checking prerequisites...');
    checkNodeVersion();
    checkReactNativeCLI();
    
    console.log('\n📁 Creating project structure...');
    createDirectories();
    
    console.log('\n⚙️  Setting up configuration...');
    createEnvConfig();
    createScripts();
    
    console.log('\n🌐 Setting up localization...');
    createLocalizationFiles();
    
    console.log('\n🧪 Setting up testing...');
    createTestFiles();
    
    console.log('\n📦 Installing dependencies...');
    installDependencies();
    
    console.log('\n🎉 Setup completed successfully!');
    console.log('\n📋 Next steps:');
    console.log('1. Update .env file with your API keys');
    console.log('2. Configure Firebase for push notifications');
    console.log('3. Run: npm run android (for Android)');
    console.log('4. Run: npm run ios (for iOS)');
    console.log('\n📚 Check README.md for detailed documentation');
    
  } catch (error) {
    console.error('❌ Setup failed:', error.message);
    process.exit(1);
  }
}

// Run setup
main();
