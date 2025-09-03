// ==================================================
// React Native Styling: Inline Styles & StyleSheet API
// ==================================================

// Introduction to Styling in React Native
// - React Native uses JS objects instead of CSS.
// - CamelCase property names (e.g., backgroundColor).
// - Two main approaches:
//   1. Inline Styles
//   2. StyleSheet API

import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Inline Styles – Concept */}
      {/* Inline styles are defined directly inside the component. */}
      <Text style={{ fontSize: 20, color: "blue" }}>
        Hello Inline Styles
      </Text>

      {/*  StyleSheet API – Concept */}
      {/* Styles are created once and referenced via styles object. */}
      <Text style={styles.heading}>Hello StyleSheet</Text>

      {/*  Combining Styles (Inline + StyleSheet) */}
      {/* You can merge multiple styles using an array. */}
      <Text style={[styles.base, styles.bold, { color: "red" }]}>
        Combined Styles
      </Text>
    </View>
  );
}

//  Inline Styles – Pros & Cons
// Pros: Quick, simple, no external file needed.
// Cons: Not reusable, less readable, performance issues if overused.

//  StyleSheet API – Advantages
// - Performance: Compiled once, reused.
// - Clean separation of code and styles.
// - Reusable and consistent design.
// - Easier maintenance in large projects.

// Best Practices for Styling
// - Use StyleSheet API for most cases.
// - Inline only for quick tweaks.
// - Group related styles together.
// - Use flexbox for layout.
// - Keep colors, fonts, spacing in constants.
// - For advanced styling: styled-components, tailwind-rn.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: 24,
    color: "green",
    fontWeight: "bold",
    marginVertical: 10,
  },
  base: {
    fontSize: 18,
  },
  bold: {
    fontWeight: "bold",
  },
});
