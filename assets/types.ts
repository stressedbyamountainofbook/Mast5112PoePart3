import { Dispatch, SetStateAction } from 'react';

// Define the MenuItem interface
export interface MenuItem {
  id: number;
  name: string;
  image: any;  // Use 'any' for images (or a more specific type if you prefer, like ImageSourcePropType)
  category: string;
  price: number;
  description: string;
}

// Define the RootStackParamList for navigation
export type RootStackParamList = {
  Home: undefined; // Home screen doesn't need parameters

  // MenuPage expects cart and setCart as parameters
  MenuPage: {
    cart: MenuItem[];
    setCart: Dispatch<SetStateAction<MenuItem[]>>;
  };

  // EditMenuListPage expects menuItems and setMenuItems as parameters
  EditMenuListPage: {
    menuItems: MenuItem[]; // Menu items to be edited
    setMenuItems: Dispatch<SetStateAction<MenuItem[]>>; // Function to update menuItems
  };

  // EditMenuItemPage expects itemId for editing a specific menu item
  EditMenuItemPage: { 
    itemId: number;
  };

  // MenuItemDescriptionPage expects a single MenuItem to display details
  MenuItemDescriptionPage: {
    item: MenuItem;
  };

  // AddMenuPage expects a function to add a new menu item (without the `id` field)
  AddMenuPage: {
    addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  };

  // CheckoutPage doesn't require parameters
  CheckoutPage: undefined;

  // CartPage expects cart items and a function to update the cart
  CartPage: {
    cart: MenuItem[];
    setCart: Dispatch<SetStateAction<MenuItem[]>>;
  };
};
