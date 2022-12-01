import { NativeBaseProvider, StatusBar } from 'native-base'
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins'

import { THEME } from './src/styles/theme';

import { Home } from './src/screens/Home';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold
  })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Home /> : ''}
    </NativeBaseProvider>
  );
}

