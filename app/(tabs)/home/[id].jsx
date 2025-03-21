import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import PRODUCTS from '../../../constants/PRODUCTS';
import styles from '../../../styles/home.styles';
import COLORS from '../../../constants/COLORS';

const List = () => {
  const { id } = useLocalSearchParams();
  const numericId = Number(id);

  const product = Object.values(PRODUCTS).flat().find(product => product.id === numericId);
  const [count, setCount] = useState(0)
  const handleIcrement=() =>{
    setCount(count +1)
  }
  const handleDecrement=() =>{
    if (count > 0) {
      setCount(count -1)
    }
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Product not found.</Text>
      </View>
    );
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#F5F5F5',
    }}>
      <Image source={product.image} style={{
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginBottom: 20,
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: COLORS.EXTRA_LIGHT_GREEN
      }} />
      <Text style={{
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        color: COLORS.BLACK,
        textAlign: 'center'
      }}>{product.name}</Text>
      <Text style={{
        fontSize: 16,
        marginBottom: 10,
        color: COLORS.GRAY,
        textAlign: 'center',
        letterSpacing: 2
      }}>Ksh {product.price}
      </Text>
      <Text style={{
        fontSize: 17,
        marginBottom: 10,
        color: COLORS.BLACK,
        textAlign: 'center',
        letterSpacing: 1
      }}>
        Enjoy fresh and high-quality {product.name} at the best price. Sourced with care to bring you the best taste and nutrition.
        Perfect for your daily meals, snacks, or recipes. Order now and experience freshness like never before!
      </Text>
      <Text style={{
        fontSize: 18,
        color: COLORS.BLACK,
        textAlign: 'center',
        letterSpacing: 1,
        marginTop: 10,
        fontWeight: 'bold',
      }}>
        {count}
      </Text>


      <View style={{
        flexDirection: 'row',
        justifyContent:'space-around',
        width: '100%',
        marginTop: 20
      }}>
        <TouchableOpacity style={{
          backgroundColor: COLORS.PRIMARY,
          padding: 10,
          borderRadius: 5,
          width: 50,
          marginTop: 20
        }} onPress={handleDecrement}>
          <Text style={{
            fontSize: 18,
            color: COLORS.WHITE,
            textAlign: 'center',
          }}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: COLORS.PRIMARY,
          padding: 10,
          borderRadius: 5,
          width: 150,
          marginTop: 20
        }}>
          <Text style={{
            fontSize: 18,
            color: COLORS.WHITE,

            textAlign: 'center',
          }}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: COLORS.PRIMARY,
          padding: 10,
          borderRadius: 5,
          width: 50,
          marginTop: 20
        }} onPress={handleIcrement}>
          <Text style={{
            fontSize: 18,
            color: COLORS.WHITE,
            textAlign: 'center',
          }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default List;
