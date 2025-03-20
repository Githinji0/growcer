import { View, Text, ScrollView, FlatList } from 'react-native';
import styles from '../../../styles/home.styles';
import PRODUCTS from '../../../constants/PRODUCTS';
import ProductCard from '../../../components/ProductCard';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.mainScrollView}
      >
        {/* Vegetables Section */}
        <Text style={styles.textHeader}>Vegetables</Text>
        <FlatList
          data={PRODUCTS.vegetables}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard name={item.name} price={item.price} image={item.image} id={item.id}/>
          )}
          horizontal ={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.parentContentContainer}
        />

        {/* Fruits Section */}
        <Text style={styles.textHeader}>Fruits</Text>
        <FlatList
          data={PRODUCTS.fruits}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard name={item.name} price={item.price} image={item.image} id={item.id} />
          )}
          horizontal ={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.parentContentContainer}
        />

        {/* Other Items Section */}
        <Text style={styles.textHeader}>Other Items</Text>
        <FlatList
          data={PRODUCTS.other}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductCard name={item.name} price={item.price} image={item.image} id={item.id}/>
          )}
          horizontal ={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.parentContentContainer}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
