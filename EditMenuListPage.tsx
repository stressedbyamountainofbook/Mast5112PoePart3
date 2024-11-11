import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { menuItems as initialMenuItems } from './assets/MenuItems';
import { MenuItem } from './assets/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './assets/types';

type EditMenuListPageNavigationProp = StackNavigationProp<RootStackParamList, 'EditMenuListPage'>;

interface EditMenuListPageProps {
  navigation: EditMenuListPageNavigationProp;
}

const EditMenuListPage: React.FC<EditMenuListPageProps> = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(initialMenuItems);

  
  const handleEdit = (item: MenuItem) => {
    navigation.navigate('EditMenuItemPage', {
      itemId: item.id, 
    });
  };

  const handleRemove = (id: number) => {
    Alert.alert('Remove Item', 'Are you sure you want to remove this item?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'OK', onPress: () => setMenuItems(menuItems.filter(item => item.id !== id)) },
    ]);
  };

  const renderMenuItem = ({ item }: { item: MenuItem }) => (
    <View style={styles.menuItemContainer}>
      <Image source={item.image} style={styles.menuItemImage} />
      <View style={styles.menuItemTextContainer}>
        <Text style={styles.menuItemName}>{item.name}</Text>
        <Text style={styles.menuItemDescription}>{item.description}</Text>
        <Text style={styles.menuItemPrice}>R{item.price}</Text>
        <TouchableOpacity style={styles.editButton} onPress={() => handleEdit(item)}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.removeButton} onPress={() => handleRemove(item.id)}>
          <Text style={styles.removeButtonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Items</Text>
      <FlatList data={menuItems} renderItem={renderMenuItem} keyExtractor={(item) => item.id.toString()} />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() =>
          navigation.navigate('AddMenuPage', {
            addMenuItem: (newItem: Omit<MenuItem, 'id'>) => setMenuItems([...menuItems, { id: menuItems.length + 1, ...newItem }]),
          })
        }
      >
        <Text style={styles.addButtonText}>Add New Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  menuItemContainer: { flexDirection: 'row', marginBottom: 20, borderBottomWidth: 1, borderBottomColor: '#ccc', paddingBottom: 10 },
  menuItemImage: { width: 100, height: 75, borderRadius: 10, marginRight: 20 },
  menuItemTextContainer: { flex: 1, justifyContent: 'center' },
  menuItemName: { fontSize: 18, fontWeight: 'bold' },
  menuItemDescription: { fontSize: 14, color: '#555' },
  menuItemPrice: { fontSize: 16, fontWeight: 'bold', marginTop: 5 },
  editButton: { marginTop: 10, backgroundColor: '#1E90FF', padding: 8, borderRadius: 5 },
  removeButton: { marginTop: 10, backgroundColor: '#FF6347', padding: 8, borderRadius: 5 },
  editButtonText: { color: 'white', textAlign: 'center' },
  removeButtonText: { color: 'white', textAlign: 'center' },
  addButton: { backgroundColor: '#32CD32', paddingVertical: 15, marginTop: 30, borderRadius: 5, alignItems: 'center' },
  addButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

export default EditMenuListPage;
