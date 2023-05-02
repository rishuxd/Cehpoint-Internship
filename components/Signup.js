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

const signupInitialValues = {
  name: "",
  course: "",
  phone: "",
  email: "",
  password: "",
};

const Signup = ({ navigation }) => {
  const [signup, setSignup] = useState(signupInitialValues);

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
            }}
          >
            Let's sign you up.
          </Text>
          <Text style={{ color: "#fff", fontSize: 25 }}>
            Connect & Explore!
          </Text>
        </View>
        <View style={styles.cont_child}>
          <TextInput
            placeholder="Name"
            placeholderTextColor={"#7A7B86"}
            style={styles.input_box}
            onChangeText={(e) => onInputChange("name", e)}
            value={signup.name}
          />
          <TextInput
            placeholder="Username"
            placeholderTextColor={"#7A7B86"}
            style={styles.input_box}
            onChangeText={(e) => onInputChange("course", e)}
            value={signup.course}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={"#7A7B86"}
            style={styles.input_box}
            onChangeText={(e) => onInputChange("phone", e)}
            value={signup.phone}
          />
          <TextInput
            placeholder="Phone"
            placeholderTextColor={"#7A7B86"}
            style={styles.input_box}
            onChangeText={(e) => onInputChange("email", e)}
            value={signup.email}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={"#7A7B86"}
            style={styles.input_box}
            onChangeText={(e) => onInputChange("password", e)}
            value={signup.password}
          />
        </View>

        <View style={{ bottom: 0 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginBottom: 15,
            }}
          >
            <Text style={{ color: "#7A7B86" }}>Already have an account? </Text>
            <Text style={{ color: "#fff" }}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Sign Up</Text>
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

export default Signup;
