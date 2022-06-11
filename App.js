import basketMock from './src/mocks/basket'
import LottieView from 'lottie-react-native'
import Basket from './src/containers/basket/Basket'
import { StatusBar, SafeAreaView } from 'react-native'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat'

export default function App() {
  const [fontsLoaded] = useFonts({ 'MontserratRegular': Montserrat_400Regular, 'MontserratBold': Montserrat_700Bold })

  if (!fontsLoaded) {
    return <LottieView source={require('./src/lotties/loading-green.json')} autoPlay loop />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Basket {...basketMock} />
    </SafeAreaView>
  )
}
