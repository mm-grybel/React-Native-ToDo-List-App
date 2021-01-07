import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  FlatList 
} from 'react-native';

export default function App() {
  const [enteredItem, setEnteredItem] = useState('');
  const [toDoItems, setToDoItems] = useState([]);

  const itemInputHandler = (enteredText) => {
    setEnteredItem(enteredText);
  };

  const addItemHandler = () => {
    setToDoItems(currentItems => [
      ...currentItems, 
      {key: Math.random().toString(), value: enteredItem}
    ]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="TODO Item" 
        style={styles.input} 
        onChangeText={itemInputHandler}
        value={enteredItem} />
        <Button title="ADD" onPress={addItemHandler} />
      </View>
      <FlatList 
        data={toDoItems} 
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  input: {
    width: '80%', 
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
