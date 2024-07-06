import { Welcome } from '@/components'
import { StatusBar } from 'expo-status-bar'

export default function Main() {
  return (
    <>
      <Welcome />
      <StatusBar style='inverted' />
    </>
  )
}
