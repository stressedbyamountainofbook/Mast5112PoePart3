import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 20,
  },
  hamburgerButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    padding: 10,
  },
  dropdownMenu: {
    position: 'absolute',
    top: 60,
    right: 20,
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 10,
    zIndex: 1,
  },
  dropdownItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dropdownText: {
    fontSize: 16,
    color: 'black',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Transparent black background for search bar
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  searchInput: {
    flex: 1,
    color: 'white', // White text color for search input
    padding: 10,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'white', // White border for search input
  },
  menuContainer: {
    alignItems: 'center',
    paddingBottom: 20,
  },
  categorySection: {
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  categorySubtitle: {
    fontSize: 16,
    color: 'white',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  menuItem: {
    width: '45%', // Adjust the width to allow multiple items per row
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemName: {
    fontSize: 18,
    color: 'white', // White color for item name
    marginBottom: 10,
  },
  itemPrice: {
    fontSize: 16,
    color: 'white', // White color for item price
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'green', // Green background for the order button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white', // White text for the order button
    fontSize: 16,
  },

  // Stats Container for showing filtered results
  statsContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff', // White background for stats container
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 20, // Margin for spacing
    marginBottom: 10, // Optional: adds space at the bottom
  },
  statsText: {
    fontSize: 16,
    color: '#333', // Dark gray text color for stats
    textAlign: 'center',
  },

  // Cart Button Styles (added)
  cartButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
  },
  cartBadge: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'red',
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});