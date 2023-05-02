import React, { useState, useEffect, useRef } from "react";

import {
  View,
  Image,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import Splash from "../assets/images/splash.png";

const OnboardingScreen = ({ navigation }) => {
  const [active, setActive] = useState(false);
  let transformX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (active) {
      Animated.timing(transformX, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(transformX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [active]);

  const rotationX = transformX.interpolate({
    inputRange: [0, 1],
    outputRange: [2, (Dimensions.get("screen").width - 60) / 2],
  });

  const onRegister = (navigation) => {
    navigation.navigate("Signup");
    setActive(false);
  };

  const onSignIn = (navigation) => {
    navigation.navigate("Login");
    setActive(true);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Image source={Splash} style={styles.image} />

        <Text style={styles.heading}>
          Connect with like-minded people, face-to-face.
        </Text>

        <Text style={styles.subTitle}>
          Bring together yourself, your thoughts, ideas and people.
        </Text>
      </View>

      <View style={styles.slider}>
        <Animated.View
          style={{
            position: "absolute",
            height: 60 - 2 * 2,
            top: 2,
            bottom: 2,
            borderRadius: 10,
            width: (Dimensions.get("screen").width - 60) / 2,
            transform: [
              {
                translateX: rotationX,
              },
            ],
            backgroundColor: "white",
          }}
        ></Animated.View>
        <TouchableOpacity
          style={styles.default}
          onPress={() => onRegister(navigation)}
        >
          <Text style={styles.btn_text}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.default}
          onPress={() => onSignIn(navigation)}
        >
          <Text style={styles.btn_text}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#181721",
    padding: 30,
  },
  cont_child: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 200,
  },
  heading: {
    fontSize: 40,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 15,
    color: "#fff",
    fontWeight: 700,
  },
  subTitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#6a6d76",
    fontWeight: 500,
  },

  slider: {
    bottom: 0,
    flexDirection: "row",
    position: "relative",
    height: 60,
    borderRadius: 10,
    backgroundColor: "#3b3b43",
  },
  btn_text: {
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
