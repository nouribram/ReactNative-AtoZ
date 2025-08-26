/**
 * React Native  – Core Components
 * --------------------------------------
 * Core Components are the basic building blocks to create UI for mobile apps.
 *
 *  Text
 *  View
 *  Image
 *  ScrollView
 *  TextInput
 *  Button
 *  FlatList
 *  SectionList
 *
 * Each section includes explanation + example code.
 */

import React, { useState } from "react";
import { 
  Text, 
  View, 
  Image, 
  ScrollView, 
  TextInput, 
  Button, 
  FlatList, 
  SectionList, 
  StyleSheet 
} from "react-native";

// -------------------
// 1. TEXT COMPONENT
// -------------------
// Displays text on the screen. Supports styling.
const TextExample = () => (
  <Text style={styles.text}>Hello, I am a Text component </Text>
);

// -------------------
// 2. VIEW COMPONENT
// -------------------
// Acts like a container (similar to <div> in web).
const ViewExample = () => (
  <View style={styles.viewBox}>
    <Text style={styles.text}>Inside a View</Text>
  </View>
);

// -------------------
// 3. IMAGE COMPONENT
// -------------------
// Displays images from local files or the web.
const ImageExample = () => (
  <Image
    style={styles.image}
    source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
  />
);

// -------------------
// 4. SCROLLVIEW COMPONENT
// -------------------
// Makes content scrollable vertically or horizontally.
const ScrollViewExample = () => (
  <ScrollView style={{ margin: 10 }}>
    <Text style={styles.text}>Scroll down to see more </Text>
    {Array.from({ length: 20 }, (_, i) => (
      <Text key={i} style={styles.text}>Item {i + 1}</Text>
    ))}
  </ScrollView>
);

// -------------------
// 5. TEXTINPUT COMPONENT
// -------------------
// Allows user to type text input.
const TextInputExample = () => {
  const [value, setValue] = useState("");
  return (
    <View style={{ margin: 10 }}>
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={value}
        onChangeText={setValue}
      />
      <Text style={styles.text}>You typed: {value}</Text>
    </View>
  );
};

// -------------------
// 6. BUTTON COMPONENT
// -------------------
// Displays a pressable button.
const ButtonExample = () => (
  <Button title="Press me" onPress={() => alert("Button pressed!")} />
);

// -------------------
// 7. FLATLIST COMPONENT
// -------------------
// Efficiently renders large lists of data.
const FlatListExample = () => {
  const data = [
    { key: "1", name: "Apple" },
    { key: "2", name: "Banana" },
    { key: "3", name: "Orange" },
  ];
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>}
      keyExtractor={(item) => item.key}
    />
  );
};

// -------------------
// 8. SECTIONLIST COMPONENT
// -------------------
// Renders grouped lists with section headers.
const SectionListExample = () => {
  const sections = [
    { title: "Fruits", data: ["Apple", "Banana"] },
    { title: "Vegetables", data: ["Carrot", "Tomato"] },
  ];

  return (
    <SectionList
      sections={sections}
      renderItem={({ item }) => <Text style={styles.text}>{item}</Text>}
      renderSectionHeader={({ section }) => (
        <Text style={styles.sectionHeader}>{section.title}</Text>
      )}
      keyExtractor={(item, index) => item + index}
    />
  );
};

// -------------------
// MAIN APP COMPONENT
// -------------------
// Combines all examples into one screen.
export default function CoreComponentsDemo() {
  return (
    <ScrollView style={{ margin: 20 }}>
      <Text style={styles.title}> React Native Core Components</Text>

      <TextExample />
      <ViewExample />
      <ImageExample />
      <ScrollViewExample />
      <TextInputExample />
      <ButtonExample />
      <FlatListExample />
      <SectionListExample />
    </ScrollView>
  );
}

// -------------------
// STYLES
// -------------------
const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
  viewBox: {
    backgroundColor: "#e0f7fa",
    padding: 10,
    borderRadius: 8,
    marginVertical: 10,
  },
  image: {
    width: 60,
    height: 60,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 6,
    marginBottom: 10,
  },
  sectionHeader: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 10,
  },
});
