import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ToDoItem from './components/ToDoItem';
import ToDoInput from './components/ToDoInput';

export default function App() {
    const [toDoItems, setToDoItems] = useState([]);

    const addItemHandler = itemTitle => {
        setToDoItems(currentItems => [
            ...currentItems,
            { key: Math.random().toString(), value: itemTitle }
        ]);
    };

    return (
        <View style={styles.screen}>
            <ToDoInput onAddItem={addItemHandler} />
            <FlatList
                data={toDoItems}
                renderItem={itemData => <ToDoItem title={itemData.item.value} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 40
    }
});
