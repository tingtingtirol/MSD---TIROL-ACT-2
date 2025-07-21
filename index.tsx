import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style= {styles.container}>

  
    <Text>My first react natice expo app</Text>
    <link href="/login"> Go to login Form</link>
    <link href="/signup"> Go to singup Form</link>
    </View>
  );
}

const styles = StyleSheet.create({

   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
  }
}

)