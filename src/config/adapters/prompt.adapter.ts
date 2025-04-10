import prompt from 'react-native-prompt-android';

interface Options {
  title: string;
  message: string;
  buttons: {
    text: string;
    onPress: (value?: string) => void;
    style?: 'cancel' | 'default' | 'destructive';
  }[];
}

/**
 * Shows a prompt to the user with a title, message, and buttons.
 * The buttons should at least contain a "Cancel" button with style "cancel" and an "OK" button
 * @param {{title: string, message: string, buttons: {text: string, onPress: () => void, style?: "cancel" | "default" | "destructive"}[]}} options
 * @returns {void}
 */
export const showReactNativePrompt = ({title, message, buttons}: Options) => {
  prompt(title, message, buttons, {
    type: 'secure-text',
    cancelable: false,
    defaultValue: 'test',
    placeholder: 'placeholder',
  });
};
