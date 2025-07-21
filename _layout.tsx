import { Stack } from "expo-router";
import {stackRouterOverride} from "expo-router/build/layouts/StackClient";

export default function RootLayout() {
  return (
  <Stack
  screenOptions={{

    headerStyle:{backgroundColor: 'brown'},
    headerTintColor: 'khaki' ,

    headerTitleStyle: {fontWeight: 'bold'}
  }}        
  >
    <Stack.Screen name="index" options={{headerTitle:"Home"}}/>
    <Stack.Screen name="index" options={{headerTitle:"Log-in Form"}}/>
    <Stack.Screen name="index" options={{headerTitle:"Sign-up Form"}}/>
  </Stack>
  );
}
