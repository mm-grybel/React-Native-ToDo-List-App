import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const ToDoInput = props => {
    const [enteredItem, setEnteredItem] = useState('');

    const itemInputHandler = (enteredText) => {
        setEnteredItem(enteredText);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="TODO Item"
                style={styles.input}
                onChangeText={itemInputHandler}
                value={enteredItem} 
            />
            <Button title="ADD" onPress={props.onAddItem.bind(this, enteredItem)} />
        </View>
    );
};

const styles = StyleSheet.create({
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
    }
});

export default ToDoInput;
