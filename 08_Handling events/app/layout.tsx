// Handling Events in 5 Slides

import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  ScrollView,
  Alert,
  StyleSheet,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Handling Events in React Native</Text>

      {/* 
      ------------------------------------------------
       Introduction to Events
      ------------------------------------------------
      Events let users interact with your app.
      Common React Native events include:
      - onPress (button taps)
      - onChangeText (typing in input)
      - onSubmitEditing (submit text input)
      - onScroll (scroll position)
      */}
      <View style={styles.slide}>
        <Text style={styles.title}>Slide 1: Introduction</Text>
        <Text style={styles.text}>
          Events let users interact with apps. Common ones include:
          {"\n"}- onPress {"\n"}- onChangeText {"\n"}- onSubmitEditing {"\n"}- onScroll
        </Text>
      </View>

      {/* 
      ------------------------------------------------
        Handling onPress
      ------------------------------------------------
      - onPress is triggered when a user taps a button or touchable.
      - It is used for navigation, alerts, or any action.
      */}
      <View style={styles.slide}>
        <Text style={styles.title}>Slide 2: onPress Example</Text>
        <Button title="Click Me" onPress={() => Alert.alert("Button Pressed!")} />
        <Text style={styles.text}>
          Tap the button above to trigger the onPress event.
        </Text>
      </View>

      {/* 
      ------------------------------------------------
       Handling onChangeText
      ------------------------------------------------
      - onChangeText triggers every time the input text changes.
      - It connects user input directly to component state.
      - Useful for forms, search, or chat apps.
      */}
      <View style={styles.slide}>
        <Text style={styles.title}>Slide 3: onChangeText Example</Text>
        <TextInput
          style={styles.input}
          placeholder="Type something..."
          onChangeText={(value) => setText(value)}
        />
        <Text style={styles.text}>You typed: {text}</Text>
      </View>

      {/* 
      ------------------------------------------------
        Other Events
      ------------------------------------------------
      - onSubmitEditing → Triggered when pressing "Enter" or "Done".
      - onFocus / onBlur → Detect when input gains or loses focus.
      - onScroll → Track scroll position in lists or views.
      */}
      <View style={styles.slide}>
        <Text style={styles.title}>Slide 4: Other Events</Text>

        {/* onSubmitEditing, onFocus, onBlur */}
        <TextInput
          style={styles.input}
          placeholder="Submit with Enter"
          onSubmitEditing={(e) => setSubmitted(e.nativeEvent.text)}
          onFocus={() => console.log("Focused")}
          onBlur={() => console.log("Lost Focus")}
        />
        <Text style={styles.text}>Submitted: {submitted}</Text>

        {/* onScroll example */}
        <ScrollView
          style={styles.scroll}
          onScroll={(e) =>
            console.log("Scroll Y:", e.nativeEvent.contentOffset.y)
          }
          scrollEventThrottle={16}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <Text key={i} style={styles.scrollItem}>
              Item {i + 1}
            </Text>
          ))}
        </ScrollView>
      </View>

      {/* 
      ------------------------------------------------
        Best Practices
      ------------------------------------------------
      - Keep event handlers clean and small (use separate functions).
      - Use state (useState or Redux) to store values.
      - Provide feedback (e.g., change button opacity, show alerts).
      - Avoid inline functions in performance-heavy components.
      - Always test on both iOS and Android.
      */}
      <View style={styles.slide}>
        <Text style={styles.title}>Slide 5: Best Practices</Text>
        <Text style={styles.text}>
          - Keep handlers clean & small {"\n"}
          - Use state to store values {"\n"}
          - Provide feedback to users {"\n"}
          - Avoid heavy inline functions {"\n"}
          - Test on iOS & Android
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  slide: {
    marginBottom: 30,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
    borderRadius: 6,
  },
  scroll: {
    marginTop: 10,
    height: 120,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  scrollItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
