import { View, Text, Image, TouchableOpacity } from 'react-native'

export default function Welcome() {
  return (
    <View>
      <Image
        source={require('../../assets/png/login.png')}
        className='w-full h-[500px] bg-[#FCF8F3]'
        resizeMode='center'
      />
      <View className='bg-white -mt-14 rounded-tl-[30px] rounded-tr-[30px] p-[24px] min-h-screen'>
        <Text className='font-tanker text-[28px] text-center '>AI Travel Plan</Text>
        <Text className='font-bespoke text-center text-[16px] mt-6'>
          Discover your next adventure effortlessly. Personalised Itineraries at your fingertips. Travel
          smarter with AI-driven insight.
        </Text>

        <TouchableOpacity className='p-4 bg-[#FCF8F3] rounded-full mt-10' activeOpacity={0.9}>
          <Text className='text-[#000000] text-center font-bespoke'>Sign-In with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
