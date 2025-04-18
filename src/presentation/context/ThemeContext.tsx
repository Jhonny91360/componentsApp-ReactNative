import {createContext, PropsWithChildren, useEffect, useState} from 'react';
import {darkColors, lightColors, ThemeColors} from '../../config/theme/theme';
import {Appearance, AppState, useColorScheme} from 'react-native';

type ThemeColor = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: ThemeColor; // 'light' | 'dark'
  isDark: boolean;
  colors: ThemeColors;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: PropsWithChildren) => {
  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('light');

  useEffect(() => {
    if (colorScheme === 'dark') {
      setCurrentTheme('dark');
    } else {
      setCurrentTheme('light');
    }
  }, [colorScheme]);

  // It's detects if the app is in foreground or background
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      const colorScheme = Appearance.getColorScheme();

      setCurrentTheme(colorScheme === 'dark' ? 'dark' : 'light');
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };
  return (
    <ThemeContext.Provider
      value={{
        currentTheme: currentTheme,
        isDark: currentTheme === 'dark',
        colors: currentTheme === 'light' ? lightColors : darkColors,
        setTheme: setTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
