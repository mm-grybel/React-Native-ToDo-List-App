import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import ToDoItem from './components/ToDoItem';
import ToDoInput from './components/ToDoInput';

export default function App() {
    const [toDoItems, setToDoItems] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addItemHandler = itemTitle => {
        setToDoItems(currentItems => [
            ...currentItems,
            { id: Math.random().toString(), value: itemTitle }
        ]);
        setIsAddMode(false);
    };

    const removeItemHandler = itemId => {
        setToDoItems( currentItems => {
            return currentItems.filter((item) => item.id !== itemId);
        });
    };

    const cancelItemAdditionHandler = () => {
        setIsAddMode(false);
    };

    return (
        <View style={styles.screen}>
            <Button title="Add New TODO Item" onPress={() => setIsAddMode(true)} />
            <ToDoInput 
                visible={isAddMode} 
                onAddItem={addItemHandler} 
                onCancel={cancelItemAdditionHandler} 
            />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={toDoItems}
                renderItem={itemData => (
                    <ToDoItem 
                        id={itemData.item.id}
                        onDelete={removeItemHandler}
                        title={itemData.item.value}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 40
    }
});
