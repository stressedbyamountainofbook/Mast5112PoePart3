import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { MenuItem } from './assets/types';

interface CheckoutPageProps {
  route: any; // Route prop to get cart data
  navigation: any; // Navigation prop
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ route, navigation }) => {
  const { cart } = route.params; // Get cart data from route params

  // Function to handle the order confirmation
  const handleOrderConfirmation = () => {
    if (cart.length === 0) {
      Alert.alert('Your cart is empty. Please add items before checking out.');
    } else {
      // You could add logic to finalize the order here (e.g., payment, saving to DB, etc.)
      Alert.alert('Order confirmed! Thank you for your purchase.');
      // After confirming, you can navigate back to the home page or menu
      navigation.navigate('Home');
    }
  };

  // Calculate total price of items in the cart
  const totalPrice = cart.reduce((total: number, item: MenuItem) => total + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyCart}>Your cart is empty.</Text>
      ) : (
        <View>
          {cart.map((item: MenuItem) => (
            <View key={item.id.toString()} style={styles.cartItem}>
              <Text style={styles.itemText}>{item.name}</Text>
              <Text style={styles.itemText}>R{item.price.toFixed(2)}</Text>
            </View>
          ))}
          <Text style={styles.totalText}>Total: R{totalPrice.toFixed(2)}</Text>
        </View>
      )}

      <TouchableOpacity style={styles.confirmButton} onPress={handleOrderConfirmation}>
        <Text style={styles.buttonText}>Confirm Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emptyCart: {
    fontSize: 18,
    color: '#888',
    textAlign: 'center',
    marginTop: 50,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  confirmButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CheckoutPage;
