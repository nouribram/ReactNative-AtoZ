/** 
 * Understanding React Native Debugging

 Debugging helps identify and fix code, UI, and performance issues.
 React Native provides several tools like console logs, Developer Menu,
 React Native Debugger, and Flipper to diagnose and resolve problems efficiently.
 */

console.log("Debugging initialized - tracking app behavior");



/** 
  Mastering Console Log Techniques
 Console methods help you view data, catch errors, and trace app flow.
 Remove console statements before production to keep performance clean.
 */

console.log("App started successfully");
console.warn("Low battery warning");
console.error("API request failed");
console.table([{ id: 1, name: "John" }, { id: 2, name: "Jane" }]);

// Grouping logs for better readability
console.group("User Data");
console.log("User ID:", 101);
console.log("User Role:", "Admin");
console.groupEnd();



/** 
Exploring Developer Menu Options
 
The Developer Menu gives you access to live reloading, debugging, and UI inspection. 
 Open the menu:
 - Shake the device, or
 *- Press Cmd + M (Android) or Cmd + D (iOS)
 */

console.log("Open Developer Menu → Select 'Debug JS Remotely' to use Chrome DevTools");



/** 
 Using React Native Debugger
 
 React Native Debugger combines Chrome DevTools, Redux DevTools, and Network inspection.
 
 Installation:
  >> brew install --cask react-native-debugger
 
 Start it before running your app to connect automatically to Metro.
 */

console.log("React Native Debugger connected to localhost:8081");
// You can now inspect Redux state, network requests, and console logs.



/** 
  Debugging Efficiently With Flipper
 
 Flipper is Meta’s official tool for debugging React Native apps.
 It allows you to inspect logs, layout, network activity, and performance.
 
 Setup:
  >>>> npm install --save react-native-flipper
 */

console.log("Flipper connected - inspecting network requests and UI components");



/** 
Implementing Effective Error Handling
 
 Use try/catch for asynchronous operations to prevent app crashes.
  Use Error Boundaries to handle UI rendering errors gracefully.
 */

try {
  throw new Error("Data fetch failed");
} catch (error) {
  console.error("Caught error:", error.message);
}

class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    console.log("Error caught by boundary:", error);
  }
  render() {
    return this.props.children;
  }
}



/** 
 Following Debugging Best Practices
 
 * - Clean logs before production
 * - Monitor performance and memory leaks
 * - Use Flipper or React Native Debugger regularly
 * - Document common errors and fixes
 * - Automate error reporting (e.g., Sentry)
 
 Bonus Tip:
 Integrate Sentry or Bugsnag for real-time crash tracking in production.
 */

if (__DEV__) {
  console.log("Development environment log only");
}

console.log("Integrate Sentry or Bugsnag for automatic crash monitoring");
