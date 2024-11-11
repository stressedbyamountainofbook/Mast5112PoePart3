import { Dispatch, SetStateAction } from 'react';

//  MenuItem interface
export interface MenuItem {
  id: number;
  name: string;
  image: any;  
   category: string;
  price: number;
  description: string;
}

export type RootStackParamList = {
  Home: undefined; 
   MenuPage: {
    cart: MenuItem[];
    setCart: Dispatch<SetStateAction<MenuItem[]>>;
  };

  EditMenuListPage: {
    menuItems: MenuItem[];
    setMenuItems: Dispatch<SetStateAction<MenuItem[]>>;
  };

  EditMenuItemPage: { 
    itemId: number;
  };

   MenuItemDescriptionPage: {
    item: MenuItem;
  };

   AddMenuPage: {
    addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  };

  
  CheckoutPage: undefined;

   CartPage: {
    cart: MenuItem[];
    setCart: Dispatch<SetStateAction<MenuItem[]>>;
  };
};
