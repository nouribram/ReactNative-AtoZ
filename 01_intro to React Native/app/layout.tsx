/*
===========================================
Introduction to React Native
===========================================
React Native is a framework created by Facebook that allows developers to build
 **cross-platform mobile applications** for iOS and Android using JavaScript or TypeScript.

It uses **React** (the popular UI library) but instead of rendering web components,
 it renders **native components**, giving your app a truly native look and feel.

------------------------------------------------------------
 Why React Native?
------------------------------------------------------------
1. **Cross-Platform Development** – One codebase for iOS & Android.
2. **Hot Reloading** – Instantly see changes without rebuilding.
3. **Native Performance** – Uses native components for smooth UI.
4. **Large Ecosystem** – Plenty of open-source libraries and community support.
5. **Cost Effective** – Saves time & money by avoiding separate apps for iOS/Android.

------------------------------------------------------------
 Prerequisites
------------------------------------------------------------
Before starting with React Native, you should know:
- JavaScript/TypeScript basics
- React fundamentals (components, props, state, hooks)
- Node.js & npm (or yarn)

------------------------------------------------------------
 Setting Up the Environment
------------------------------------------------------------
1. Install **Node.js** (LTS recommended).
2. Install **Expo CLI** (easiest way for beginners):
   ```bash
   npm install -g expo-cli
   ```
3. Create a new project:
   ```bash
   npx create-expo-app MyFirstApp
   cd MyFirstApp
   npm start
   ```
4. Install the **Expo Go app** on your phone (iOS/Android) and scan the QR code.

------------------------------------------------------------
 Project Structure (Basic Expo Project)
------------------------------------------------------------
MyFirstApp/
│-- App.tsx     # Entry file of your app
│-- package.json
│-- node_modules/
│-- assets/     # Images, fonts, etc.
│-- components/ # Custom components (optional)

------------------------------------------------------------
 Your First React Native Component
------------------------------------------------------------
*/

// Importing from react & react-native
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// Functional Component Example
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello, React Native</Text>
      <Text style={styles.subtitle}>This is my first mobile app </Text>
    </View>
  );
}

// Styles in React Native use StyleSheet (similar to CSS but in JS)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
  },
});

/*
------------------------------------------------------------
Core Components in React Native
------------------------------------------------------------
- View → Container, similar to <div> in web.
- Text → Display text.
- Image → Display images.
- ScrollView → Scrollable container.
- TextInput → Input field.
- Button / TouchableOpacity → For user interaction.

------------------------------------------------------------
 Key Concepts
------------------------------------------------------------
1. **JSX** – Write UI code using XML-like syntax.
2. **Props** – Pass data to components.
3. **State** – Store local data inside components.
4. **Hooks** – Use `useState`, `useEffect`, etc. for managing logic.
5. **Navigation** – Use libraries like React Navigation for multiple screens.

------------------------------------------------------------
 Running the App
------------------------------------------------------------
- Run on your phone using **Expo Go**.
- Or run on an **emulator/simulator** (Android Studio / Xcode).

------------------------------------------------------------
 Summary
------------------------------------------------------------
React Native allows you to:
- Write once, run on both iOS and Android.
- Build truly native mobile apps with React knowledge.
- Use JavaScript/TypeScript + React skills to expand into mobile development.

*/
