import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MenuItem } from './assets/types'; 

interface MenuItemDescriptionPageProps {
  route: any; 
  navigation: any; 
  cart: MenuItem[]; 
  setCart: React.Dispatch<React.SetStateAction<MenuItem[]>>; 
}

const MenuItemDescriptionPage: React.FC<MenuItemDescriptionPageProps> = ({ route, navigation, cart, setCart }) => {
  const { item } = route.params; 

  const handleAddToCart = () => {
    setCart([...cart, item]); // Add item to cart
    navigation.goBack(); //return to previous page after adding item to cart
  };

  return (
    <View style={styles.container}>
     <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>R{item.price.toFixed(2)}</Text>

      {/* buy now  button for adding to cart*/}
      <TouchableOpacity style={[styles.button, styles.addToCartButton]} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
        {/* back button to return to menu*/}
         <TouchableOpacity style={[styles.button, styles.backButton]} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back to Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25, 
    alignItems: 'center',
    marginVertical: 10,
  },
  addToCartButton: {
    backgroundColor: 'green', 
  },
  backButton: {
    backgroundColor: 'gray', 
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MenuItemDescriptionPage;
