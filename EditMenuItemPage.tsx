import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { MenuItem } from './assets/types';
import { RootStackParamList } from './assets/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';  

type EditMenuItemPageNavigationProp = StackNavigationProp<RootStackParamList, 'EditMenuItemPage'>;
type EditMenuItemPageRouteProp = RouteProp<RootStackParamList, 'EditMenuItemPage'>;

interface EditMenuItemPageProps {
  navigation: EditMenuItemPageNavigationProp;
  route: EditMenuItemPageRouteProp;
  menuItems: MenuItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>>;
}


const EditMenuItemPage: React.FC<EditMenuItemPageProps> = ({ navigation, route, menuItems, setMenuItems }) => {
  const { itemId } = route.params;  

  const itemToEdit = menuItems.find((item) => item.id === itemId);

  if (!itemToEdit) {
    Alert.alert("Item not found", "The selected item could not be found.");
    navigation.goBack();
    return null;
  }

  const [name, setName] = useState(itemToEdit.name);
  const [price, setPrice] = useState(itemToEdit.price.toString());
  const [description, setDescription] = useState(itemToEdit.description);

  const handleSave = () => {
    if (!name || !price || !description) {
      Alert.alert("Invalid input", "Please fill all fields.");
      return;
    }

    const updatedItem = {
      ...itemToEdit,
      name,
      price: parseFloat(price),
      description,
    };

    const updatedItems = menuItems.map(item => item.id === itemId ? updatedItem : item);
    setMenuItems(updatedItems); 

    Alert.alert("Success", "Item updated successfully!");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Edit Menu Item</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter item name" />
      <TextInput style={styles.input} value={price} onChangeText={setPrice} placeholder="Enter price" keyboardType="numeric" />
      <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Enter description" multiline />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingLeft: 10, marginBottom: 15 },
  saveButton: { backgroundColor: 'green', padding: 15, borderRadius: 5, marginTop: 20 },
  saveButtonText: { color: '#fff', fontSize: 18, textAlign: 'center' },
});

export default EditMenuItemPage;
