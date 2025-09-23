// React Native useState 
// --------------------------------
//  Introduction to useState
// --------------------------------
// - useState is a Hook that lets you add state to functional components.
// - State is data that changes over time (like counters, text, toggles).
// - Without state, components are static and cannot change dynamically.
//
// Example: 
// - Counter increases when you press a button.
// - Text updates as you type.

import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// --------------------------------
//  Importing useState
// --------------------------------
// - Always import useState from 'react'.
// - Import React Native components to build the UI (View, Text, Button).

export default function App() {
  // --------------------------------
  //  Declaring State
  // --------------------------------
  // Syntax:
  // const [state, setState] = useState(initialValue);
  //
  // Example:
  const [count, setCount] = useState(0); // initial value = 0

  // --------------------------------
  //  Updating State
  // --------------------------------
  // - Use setCount() to update the state.
  // - UI automatically re-renders when state changes.
  // - Never update state directly (count = count + 1).
  // - Always use the setter function (✅ setCount(count + 1)).

  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native useState Explained</Text>
      <Text style={styles.counter}>Count: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Decrease" onPress={() => setCount(count - 1)} />
    </View>
  );
}

// --------------------------------
//  Summary & Tips
// --------------------------------
// - useState adds dynamic behavior to components.
// - Syntax: const [state, setState] = useState(initialValue);
// - UI updates automatically when state changes.
// - Works with numbers, strings, booleans, arrays, objects.
// - You can use multiple useState hooks in one component.
//
// Example:
// const [name, setName] = useState("");
// const [age, setAge] = useState(18);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  counter: {
    fontSize: 22,
    marginVertical: 10,
  },
});
