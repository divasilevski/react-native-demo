import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';


export default function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    const newTodo = { id: Date.now().toString(), title }
    setTodos(state => [...state, newTodo])
  }

  return (
    <View>
      <Navbar title="Todo app" />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <View>
          <Text>{JSON.stringify(todos)}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 15
  }
});
