import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, StyleSheet, View, Text } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

// Import screens
import HomeScreen from './src/screens/homescreen';
import CropSelection from './src/screens/cropselection';
import AdvisoryScreen from './src/screens/advisoryscreen';
import ProfileScreen from './src/screens/profilescreen';

// Import services
import AnalyticsService from './src/utils/analytics';
import { requestPermissions } from './src/utils/helpers';
import { NotificationService } from './src/utils/notifications';
import TranslationService from './src/services/translationservice';

// Import theme
import { lightTheme } from './src/utils/theme';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator Component
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Crops') {
            iconName = 'agriculture';
          } else if (route.name === 'Advisory') {
            iconName = 'lightbulb-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: lightTheme.colors.primary,
        tabBarInactiveTintColor: lightTheme.colors.textSecondary,
        tabBarStyle: {
          backgroundColor: lightTheme.colors.surface,
          borderTopColor: lightTheme.colors.divider,
        },
        headerStyle: {
          backgroundColor: lightTheme.colors.primary,
        },
        headerTintColor: lightTheme.colors.surface,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: TranslationService.t('home') }}
      />
      <Tab.Screen 
        name="Crops" 
        component={CropSelection}
        options={{ title: TranslationService.t('crops') }}
      />
      <Tab.Screen 
        name="Advisory" 
        component={AdvisoryScreen}
        options={{ title: TranslationService.t('advisory') }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
        options={{ title: TranslationService.t('profile') }}
      />
    </Tab.Navigator>
  );
}

// Loading Component
function LoadingScreen() {
  return (
    <View style={styles.loadingContainer}>
      <LinearGradient
        colors={[lightTheme.colors.primary, lightTheme.colors.primaryLight]}
        style={styles.loadingGradient}
      >
        <Icon name="agriculture" size={80} color={lightTheme.colors.surface} />
        <Text style={styles.loadingText}>
          {TranslationService.t('loading')}
        </Text>
      </LinearGradient>
    </View>
  );
}

// Main App Component
export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    initializeAppAsync();
  }, []);

  const initializeAppAsync = async () => {
    try {
      // Initialize analytics
      await AnalyticsService.initializeApp();
      
      // Request permissions
      await requestPermissions();
      
      // Initialize notifications
      await NotificationService.configure();
      
      // Load stored language
      await TranslationService.loadStoredLanguage();
      
      // Set initialized
      setIsInitialized(true);
    } catch (error) {
      console.error('App initialization error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <PaperProvider theme={lightTheme}>
      <StatusBar 
        backgroundColor={lightTheme.colors.primary} 
        barStyle="light-content" 
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Main" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: lightTheme.colors.background,
  },
  loadingGradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: lightTheme.colors.surface,
    marginTop: 20,
    fontWeight: 'bold',
  },
});