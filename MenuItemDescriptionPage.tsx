import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MenuItem } from './assets/types'; // Import MenuItem type

interface MenuItemDescriptionPageProps {
  route: any; // route prop to get item data
  navigation: any; // navigation prop
  cart: MenuItem[]; // Add cart prop
  setCart: React.Dispatch<React.SetStateAction<MenuItem[]>>; // Add setCart prop
}

const MenuItemDescriptionPage: React.FC<MenuItemDescriptionPageProps> = ({ route, navigation, cart, setCart }) => {
  const { item } = route.params; // Get the item data from the route

  const handleAddToCart = () => {
    setCart([...cart, item]); // Add item to cart
    navigation.goBack(); // Go back to the previous screen after adding item to cart
  };

  return (
    <View style={styles.container}>
      {/* Display the image of the item */}
      <Image source={item.image} style={styles.image} />

      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>R{item.price.toFixed(2)}</Text>

      {/* Green button for adding to cart with rounded corners */}
      <TouchableOpacity style={[styles.button, styles.addToCartButton]} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      {/* Button for going back to the menu with rounded corners */}
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
    justifyContent: 'space-around', // Adjust to space elements out more evenly
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
    borderRadius: 25, // Rounded corners
    alignItems: 'center',
    marginVertical: 10,
  },
  addToCartButton: {
    backgroundColor: 'green', // Green button color
  },
  backButton: {
    backgroundColor: 'gray', // Gray button color
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MenuItemDescriptionPage;
