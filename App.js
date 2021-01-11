import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ToDoItem from './components/ToDoItem';
import ToDoInput from './components/ToDoInput';

export default function App() {
    const [toDoItems, setToDoItems] = useState([]);

    const addItemHandler = itemTitle => {
        setToDoItems(currentItems => [
            ...currentItems,
            { id: Math.random().toString(), value: itemTitle }
        ]);
    };

    const removeItemHandler = itemId => {
        setToDoItems( currentItems => {
            return currentItems.filter((item) => item.id !== itemId);
        });
    }

    return (
        <View style={styles.screen}>
            <ToDoInput onAddItem={addItemHandler} />
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
