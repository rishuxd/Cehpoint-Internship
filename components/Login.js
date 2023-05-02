import { useState } from "react";

import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

const loginInitialValues = {
  email: "",
  password: "",
};

const Login = ({ navigation }) => {
  const [login, setLogin] = useState(loginInitialValues);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.cont_child}>
          <TouchableOpacity
            onPress={() => navigation.navigate("OnboardingScreen")}
          >
            <Image
              style={{ marginBottom: 50 }}
              source={require("../assets/images/back.png")}
            />
          </TouchableOpacity>
          <Text
            style={{
              color: "#fff",
              fontSize: 40,
              fontWeight: 500,
              marginBottom: 10,
            }}
          >
            Let's sign you in.
          </Text>
          <Text style={{ color: "#fff", fontSize: 35 }}>Welcome back,</Text>
          <Text style={{ color: "#fff", fontSize: 35 }}>
            We have missed you!
          </Text>
        </View>

        <View style={styles.cont_child}>
          <TextInput
            placeholder="Phone, email or username"
            style={styles.input_box}
            placeholderTextColor={"#7A7B86"}
            onChangeText={(e) => onValueChange("email", e)}
            value={login.email}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={"#7A7B86"}
            style={styles.input_box}
            onChangeText={(e) => onValueChange("password", e)}
            value={login.password}
          />
        </View>

        <View style={{ bottom: 0 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 15,
            }}
          >
            <Text style={{ color: "#7A7B86" }}>Don't have an account? </Text>
            <Text style={{ color: "#fff" }}>Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181721",
    padding: 30,
  },

  cont_child: {
    flex: 1,
    marginBottom: 50,
  },

  input_box: {
    borderColor: "#7A7B86",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 15,
  },

  appButtonContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 12,
  },

  appButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default Login;
