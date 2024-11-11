import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MenuItem } from './assets/types';
import LoadingAnimation from './LoadingAnimation';
import { menuItems as initialMenuItems } from './assets/MenuItems';

// Import screens
import MenuPage from './MenuPage';
import EditMenuListPage from './EditMenuListPage';
import AddMenuPage from './AddMenuPage';
import EditMenuItemPage from './EditMenuItemPage';
import MenuItemDescriptionPage from './MenuItemDescriptionPage';
import CartPage from './CartPage';
import CheckoutPage from './CheckoutPage';

// Import the RootStackParamList from types.ts
import { RootStackParamList } from './assets/types';
import { StackNavigationProp } from '@react-navigation/stack';

// Create a stack navigator with type
const Stack = createStackNavigator<RootStackParamList>();

// Typing the HomeScreen navigation prop
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState<MenuItem[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 5000); 
  }, []);

  // Function to add a new menu item
  const addMenuItem = (newItem: Omit<MenuItem, 'id'>) => {
    setMenuItems(prevItems => [...prevItems, { id: prevItems.length + 1, ...newItem }]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) =>
            isLoading ? (
              <LoadingAnimation /> 
            ) : (
              <HomeScreen
                {...props}
                navigation={props.navigation as HomeScreenNavigationProp}
                cart={cart}
                setCart={setCart}
              />
            )
          }
        </Stack.Screen>

        <Stack.Screen name="MenuPage">
          {(props) => <MenuPage {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>

        <Stack.Screen name="AddMenuPage">
          {(props) => (
            <AddMenuPage
              {...props}
              route={{ params: { addMenuItem } }} // passing addMenuItem correctly
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="MenuItemDescriptionPage">
          {(props) => <MenuItemDescriptionPage {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>

        <Stack.Screen name="CartPage">
          {(props) => <CartPage {...props} cart={cart} setCart={setCart} />}
        </Stack.Screen>

        <Stack.Screen name="CheckoutPage" component={CheckoutPage} />

        <Stack.Screen name="EditMenuItemPage">
          {({ route, navigation }) => {
            const { itemId } = route.params || {}; // Safely extracting itemId
            if (itemId === undefined) {
              return null; // Or return some error screen if needed
            }
            return (
              <EditMenuItemPage
                route={route}
                navigation={navigation}
                menuItems={menuItems}
                setMenuItems={setMenuItems}
              />
            );
          }}
        </Stack.Screen>

        <Stack.Screen name="EditMenuListPage">
          {({ navigation }) => (
            <EditMenuListPage
              navigation={navigation}
              menuItems={menuItems}
              setMenuItems={setMenuItems}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({
  navigation,
  cart,
  setCart,
}: {
  navigation: HomeScreenNavigationProp;
  cart: MenuItem[];
  setCart: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}) {
  return (
    <ImageBackground source={require('./assets/food_background.jpg')} style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Welcome to Christofel's Cuisine</Text>
        <Button
          title="Open Menu"
          onPress={() => navigation.navigate('MenuPage', { cart, setCart })}
        />
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
