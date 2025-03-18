import { View, Text, ScrollView } from 'react-native'
import { useState } from 'react'
import styles from '../../../styles/home.styles'
import AntDesign from '@expo/vector-icons/AntDesign';
import ProductCard from '../../../components/ProductCard';
const home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>fruits</Text>
      <ScrollView style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        horizontal={true}
      >
        <View style={styles.parentContentContainer}>
          <ProductCard name="Avocadoes" price="100" image={require("../../../assets/images/ova.png")} />
          <ProductCard name="Watermelon" price="200" image={require("../../../assets/images/watermelon.png")} />
          <ProductCard name="Ndimu" price="30" image={require("../../../assets/images/ndimu.png")} />
        </View>
      </ScrollView>
    </View>
  )
}

export default home