import { SplashScreen, Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'

import '../global.css'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'Tanker': require('../assets/fonts/Tanker-Regular.otf'),
    'BespokeSerif-Regular': require('../assets/fonts/BespokeSerif-Regular.otf'),
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!loaded && !error) {
    return null
  }

  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          headerTitle: 'Welcome',
          headerTitleAlign: 'center',
          headerTitleStyle: { fontFamily: 'Tanker' },
          //* in case of we want to show the header we can change the value to true
          headerShown: false,
        }}
      />
    </Stack>
  )
}
