/**
 * ================================================
 * React Native Project Structure 
 * ================================================
 *
 * Introduction to Project Structure
 * --------------------------------------------
 * - React Native projects follow a defined folder structure.
 * - Helps with scalability, organization, and teamwork.
 * - Main parts:
 *   - Root files (config, package.json, etc.)
 *   - Source code (/src)
 *   - Platform-specific code (android/, ios/)
 */


/**
 *  Root Level Files
 * --------------------------------------------
 * Files you’ll see at the top level:
 * - package.json → Project dependencies & scripts
 * - babel.config.js → JavaScript transpiling (Babel setup)
 * - metro.config.js → Metro bundler configuration
 * - .gitignore → Git ignored files
 *
 * Example: package.json dependencies
 */
const dependencies = {
  "react": "^18.2.0",
  "react-native": "0.74.0"
}


/**
 *  android/ and ios/ Folders
 * --------------------------------------------
 * - /android → Native Android code (Java/Kotlin, Gradle)
 * - /ios → Native iOS code (Objective-C/Swift, Xcode)
 * - Usually untouched unless:
 *   - Adding native modules
 *   - Custom platform setup
 */


/**
 *  The /src Folder
 * --------------------------------------------
 * Best practice: Keep all app code in /src
 * Subfolders include:
 * - /components → Reusable UI (buttons, cards, etc.)
 * - /screens → Full-page views (LoginScreen, HomeScreen)
 * - /navigation → Navigation setup (React Navigation)
 * - /assets → Images, fonts, icons
 * - /utils → Helper functions, constants
 * - /services → API calls
 *
 * Example: a reusable button component
 */
import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const CustomButton = ({ title }: { title: string }) => (
  <TouchableOpacity style={{ padding: 10, backgroundColor: "blue" }}>
    <Text style={{ color: "white" }}>{title}</Text>
  </TouchableOpacity>
);


/**
 * App Entry Point
 * --------------------------------------------
 * - App.tsx is the entry point.
 * - Responsibilities:
 *   - Setup navigation
 *   - Wrap app in providers (Redux, Context, etc.)
 *   - Render first UI
 *
 * Example:
 */
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      {/* MainNavigator goes here */}
    </NavigationContainer>
  );
}


/**
 *  Additional Folders & Config
 * --------------------------------------------
 * - node_modules/ → Dependencies
 * - __tests__/ → Jest tests
 * - android/gradle & ios/Pods → Native dependency managers
 * - .env → API keys & environment variables
 * - docs/ → Optional project documentation
 */


/**
 *  Best Practices
 * --------------------------------------------
 * ✅ Keep files modular & organized
 * ✅ Group related files (auth screens in /screens/auth)
 * ✅ Use index.ts exports inside folders for clean imports
 * ✅ Consistent folder naming (camelCase or PascalCase)
 * ✅ Avoid clutter in root – keep inside /src
 * ✅ Document structure for new developers
 *
 */

