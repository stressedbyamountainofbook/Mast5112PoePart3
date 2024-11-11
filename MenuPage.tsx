import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, ImageBackground, Animated, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { menuItems } from './assets/MenuItems'; // Correct import path for MenuItems.ts
import { styles } from './styles/MenuPageStyles'; // Import the external stylesheet
import { MenuItem } from './assets/types'; // Import MenuItem type

interface MenuPageProps {
  navigation: any;
  cart: MenuItem[];
  setCart: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}

const MenuPage: React.FC<MenuPageProps> = ({ navigation, cart, setCart }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  // Categories and menu item filtering
  const categories = ['starters', 'Mains', 'Desserts'];

  // Filter menu items based on search query
  const filteredItems = menuItems.filter(item =>
    item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(prevState => !prevState);
  };

  // Navigate to item description page
  const navigateToDescriptionPage = (item: MenuItem) => {
    navigation.navigate('MenuItemDescriptionPage', { item, cart, setCart }); // Passing cart and setCart to the description page
  };

  // Add item to cart
  const addToCart = (item: MenuItem) => {
    setCart(prevCart => [...prevCart, item]);
  };

  // Get statistics for a category (average price and available meals)
  const getCategoryStats = (category: string) => {
    const itemsInCategory = filteredItems.filter(item => item.category === category);
    const totalPrice = itemsInCategory.reduce((acc, item) => acc + item.price, 0);
    return {
      averagePrice: itemsInCategory.length > 0 ? totalPrice / itemsInCategory.length : 0,
      availableMeals: itemsInCategory.length,
    };
  };

  return (
    <ImageBackground source={require('./assets/food_background.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to the Menu</Text>

        {/* Hamburger Menu Button */}
        <TouchableOpacity onPress={toggleDropdown} style={styles.hamburgerButton}>
          <Ionicons name="menu" size={32} color="white" />
        </TouchableOpacity>

        {/* Dropdown Menu */}
        {dropdownVisible && (
          <Animated.View style={[styles.dropdownMenu, { opacity: dropdownVisible ? 1 : 0 }]}>
            <TouchableOpacity onPress={() => navigation.navigate('EditMenuListPage')} style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>Edit Menu</Text>
            </TouchableOpacity>
          </Animated.View>
        )}

        {/* Search Input */}
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={24} color="white" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by course or name"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="white"
          />
        </View>

        {/* Display stats only when there's a search query */}
        {searchQuery && (
          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>
              {filteredItems.length} Course{filteredItems.length > 1 ? 's' : ''} Found | Average Price: R
              {parseFloat((filteredItems.reduce((acc, item) => acc + item.price, 0) / filteredItems.length).toFixed(2))}
            </Text>
          </View>
        )}

        {/* Menu Items */}
        <ScrollView contentContainerStyle={styles.menuContainer}>
          {categories.map((category) => {
            const { averagePrice, availableMeals } = getCategoryStats(category);
            return (
              <View key={category} style={styles.categorySection}>
                <Text style={styles.categoryTitle}>{category}</Text>

                {/* Show stats only for filtered items if there's a query */}
                {searchQuery ? (
                  <Text style={styles.categorySubtitle}>
                    {filteredItems.filter(item => item.category === category).length} Meals Found | Average Price: R
                    {parseFloat(
                      (
                        filteredItems.filter(item => item.category === category).reduce((acc, item) => acc + item.price, 0) /
                        filteredItems.filter(item => item.category === category).length
                      ).toFixed(2)
                    )}
                  </Text>
                ) : (
                  <Text style={styles.categorySubtitle}>
                    {availableMeals} Meals Available | Average Price: R{averagePrice.toFixed(2)}
                  </Text>
                )}

                <View style={styles.row}>
                  {filteredItems
                    .filter(item => item.category === category)
                    .map((item) => (
                      <View key={item.id} style={styles.menuItem}>
                        <TouchableOpacity onPress={() => navigateToDescriptionPage(item)}>
                          <Image source={item.image} style={styles.image} />
                        </TouchableOpacity>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemPrice}>R{item.price}</Text>
                        <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
                          <Text style={styles.buttonText}>Order Now</Text>
                        </TouchableOpacity>
                      </View>
                    ))}
                </View>
              </View>
            );
          })}
        </ScrollView>

        {/* Cart Button */}
        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('CartPage', { cart, setCart })}>
          <Ionicons name="cart" size={32} color="white" />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{cart.length}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default MenuPage;
