import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList, MenuItem } from './assets/types';

type AddMenuPageNavigationProp = StackNavigationProp<RootStackParamList, 'AddMenuPage'>;

interface AddMenuPageProps {
  navigation: AddMenuPageNavigationProp;
  route: { params: { addMenuItem: (item: Omit<MenuItem, 'id'>) => void } };
}

const AddMenuPage: React.FC<AddMenuPageProps> = ({ navigation, route }) => {
  const { addMenuItem } = route.params;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState<string>('');

  const handleAdd = () => {
    if (!name || !description || !price || !category) {
      Alert.alert("Missing information", "Please fill in all fields.");
      return;
    }

    addMenuItem({ name, description, price: parseFloat(price), category, image });
    Alert.alert("Success", "New item added successfully!");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Menu Item</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Item Name" />
      <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Description" />
      <TextInput style={styles.input} value={price} onChangeText={setPrice} placeholder="Price" keyboardType="numeric" />
      <RNPickerSelect onValueChange={setCategory} items={[
        { label: 'Main Dish', value: 'Main Dish' },
        { label: 'Appetizer', value: 'Appetizer' },
        { label: 'Dessert', value: 'Dessert' }
      ]} placeholder={{ label: 'Select Category', value: null }} />
      <TouchableOpacity style={styles.addButton} onPress={handleAdd}>
        <Text style={styles.addButtonText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, borderRadius: 5, paddingLeft: 10, marginBottom: 15 },
  addButton: { backgroundColor: '#32CD32', paddingVertical: 15, borderRadius: 5, alignItems: 'center', marginTop: 20 },
  addButtonText: { color: 'white', fontSize: 18, fontWeight: 'bold' },
});

export default AddMenuPage;
