// React Native Flexbox Layout Tutorial

import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function FlexboxTutorial() {
  return (
    <ScrollView style={styles.container}>
      {/* 1. Flex Direction */}
      <Text style={styles.title}>1flexDirection</Text>
      <Text style={styles.comment}>
        flexDirection controls the MAIN axis direction.
        {"\n"}Default = 'column' (top to bottom).
        {"\n"}Options: 'row', 'column', 'row-reverse', 'column-reverse'
      </Text>
      <View style={[styles.exampleBox, { flexDirection: "row" }]}>
        <Text style={styles.box}>A</Text>
        <Text style={styles.box}>B</Text>
        <Text style={styles.box}>C</Text>
      </View>

      {/* 2.Justify Content */}
      <Text style={styles.title}>justifyContent</Text>
      <Text style={styles.comment}>
        Controls alignment ALONG the main axis.{"\n"}
        Options: flex-start, center, flex-end, space-between, space-around,
        space-evenly
      </Text>
      <View
        style={[
          styles.exampleBox,
          { flexDirection: "row", justifyContent: "space-between" },
        ]}
      >
        <Text style={styles.box}>A</Text>
        <Text style={styles.box}>B</Text>
        <Text style={styles.box}>C</Text>
      </View>

      {/* 3. Align Items */}
      <Text style={styles.title}> alignItems</Text>
      <Text style={styles.comment}>
        Controls alignment ACROSS the cross-axis.{"\n"}
        Options: flex-start, center, flex-end, stretch, baseline
      </Text>
      <View
        style={[
          styles.exampleBox,
          { height: 120, alignItems: "center", flexDirection: "row" },
        ]}
      >
        <Text style={[styles.box, { height: 40 }]}>A</Text>
        <Text style={[styles.box, { height: 80 }]}>B</Text>
        <Text style={[styles.box, { height: 60 }]}>C</Text>
      </View>

      {/* 4. Flex Property */}
      <Text style={styles.title}> flex</Text>
      <Text style={styles.comment}>
        Defines how much SPACE an item should take.{"\n"}
        flex: 1 → fills available space equally.{"\n"}
        Multiple children divide space based on flex value.
      </Text>
      <View style={[styles.exampleBox, { height: 80 }]}>
        <View style={{ flex: 1, backgroundColor: "tomato" }} />
        <View style={{ flex: 2, backgroundColor: "skyblue" }} />
        <View style={{ flex: 1, backgroundColor: "limegreen" }} />
      </View>

      {/* 5. Align Self */}
      <Text style={styles.title}> alignSelf</Text>
      <Text style={styles.comment}>
        Overrides parent alignItems for ONE child only.
      </Text>
      <View style={[styles.exampleBox, { height: 120, alignItems: "flex-start" }]}>
        <Text style={styles.box}>A</Text>
        <Text style={[styles.box, { alignSelf: "center" }]}>B</Text>
        <Text style={styles.box}>C</Text>
      </View>

      {/* 6. Flex Wrap */}
      <Text style={styles.title}> flexWrap</Text>
      <Text style={styles.comment}>
        Allows children to WRAP to the next line if no space.
      </Text>
      <View
        style={[
          styles.exampleBox,
          { flexDirection: "row", flexWrap: "wrap", height: "auto" },
        ]}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <Text key={i} style={[styles.box, { width: 100 }]}>
            Box {i + 1}
          </Text>
        ))}
      </View>

      {/* 7. Centering Shortcut */}
      <Text style={styles.title}> Centering Layout</Text>
      <Text style={styles.comment}>
        Most common use: justifyContent + alignItems = 'center'
      </Text>
      <View
        style={[
          styles.exampleBox,
          { height: 120, justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text style={styles.box}>Centered</Text>
      </View>
    </ScrollView>
  );
}

// =====================
// Styles
// =====================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 4,
    color: "#333",
  },
  comment: {
    fontSize: 14,
    color: "#555",
    marginBottom: 8,
  },
  exampleBox: {
    backgroundColor: "#eee",
    padding: 8,
    marginBottom: 16,
    borderRadius: 8,
  },
  box: {
    backgroundColor: "#ddd",
    padding: 12,
    margin: 4,
    textAlign: "center",
    borderRadius: 6,
    minWidth: 40,
  },
});
