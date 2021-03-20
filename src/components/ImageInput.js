import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  ColorPropType,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "./config/colors";
import * as ImagePicker from "expo-image-picker";

function ImageInput({ imageUri, onChangeImage }) {
  useEffect(() => {
    // only asks for user permission once to get photos
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert("Enable access in settings to select photos");
  };
  const handlePress = () => {
    if (!imageUri) selectImage();
    else
      Alert.alert(
        "Delete Image",
        "Are you sure you want to remove the image?",
        [{ text: "Yes", onPress: () => onChangeImage(null) }, { text: "No" }]
      );
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, // only allows the user to select and image, not a video
        quality: 0.5,
      });
      if (!result.cancelled) onChangeImage(result.uri);
    } catch (error) {
      console.log("Could not read image");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons
            color={colors.medium}
            size={40}
            name="camera"
          />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 170,
    justifyContent: "center",
    overflow: "hidden",
    width: 120,
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

export default ImageInput;
