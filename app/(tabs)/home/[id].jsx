import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const List = () => {
    const {id} = useLocalSearchParams()
  return (
    <View>
      <Text>List</Text>
    </View>
  )
}

export default List