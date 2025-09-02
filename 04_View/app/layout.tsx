// ================================
// React Native Widget Guide "Components Core" 
// ================================

// Core Components
// React Native provides building blocks to create mobile apps.
// Core UI components include:
// - View → container for layout
// - Text → for displaying text
// - Image → for showing pictures
// - TextInput → for user input
// - ScrollView → for scrollable content
// - Button → for interactive actions
// These components work on both iOS and Android.

import React, { useState } from 'react';
import { View, Text, Image, TextInput, ScrollView, Button } from 'react-native';

export default function ComponentsTutorial() {
  const [inputValue, setInputValue] = useState('');

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      
      {/* 
         View
        - Basic container, like a <div> in web.
        - Supports layout, styling, accessibility.
      */}
      <View style={{ padding: 20, backgroundColor: 'lightblue', marginBottom: 20 }}>
        <Text>Hello from View!</Text>
      </View>

      {/* 
        Text
        - Displays text.
        - Props: style, numberOfLines, ellipsizeMode.
        - Can be nested.
      */}
      <Text style={{ fontSize: 20, color: 'purple', marginBottom: 20 }}>
        Welcome to <Text style={{ fontWeight: 'bold' }}>React Native</Text>!
      </Text>

      {/* 
        Image
        - Shows images from local or remote source.
        - Props: source, resizeMode, style.
      */}
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ width: 100, height: 100, marginBottom: 20 }}
      />

      {/* 
       TextInput
        - Allows user input.
        - Props: placeholder, secureTextEntry, keyboardType.
      */}
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
        placeholder="Enter your name"
        onChangeText={text => setInputValue(text)}
        value={inputValue}
      />
      <Text>You typed: {inputValue}</Text>

      {/* 
         ScrollView
        - Makes content scrollable.
        - Good for small/medium content lists.
        - For performance with long lists → use FlatList/SectionList.
      */}
      <ScrollView horizontal style={{ marginVertical: 20 }}>
        <Text style={{ margin: 10 }}>Item 1</Text>
        <Text style={{ margin: 10 }}>Item 2</Text>
        <Text style={{ margin: 10 }}>Item 3</Text>
        <Text style={{ margin: 10 }}>Item 4</Text>
        <Text style={{ margin: 10 }}>Item 5</Text>
      </ScrollView>

      {/* 
       Button
        - Simple interactive button.
        - Props: title, onPress, color.
        - For advanced designs use Pressable or UI libraries.
      */}
      <Button
        title="Click Me"
        onPress={() => alert("Button Pressed!")}
      />
    </ScrollView>
  );
}
