import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";
import ImageInput from "../ImageInput";
import ErrorMessage from "./ErrorMessage";

function FormImagePicker({ name }) {
  const [imageUri, setImageUri] = useState();
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <ImageInput
        imageUri={imageUri}
        onChangeImage={(uri) => setImageUri(uri)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default FormImagePicker;
