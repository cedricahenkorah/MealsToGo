import React, { useRef, useState, useEffect } from "react";
import { Camera } from "expo-camera";
import { View } from "react-native";
import { Text } from "../../../components/typography/text.component";

import styled from "styled-components/native";

const ProfileCamera = styled(Camera)`
width= 100%;
height: 100%;
`;

export const CameraScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>You have no access to camera</Text>;
  }

  return (
    <ProfileCamera
      ref={(camera) => cameraRef.current}
      type={Camera.Constants.Type.front}
    />
  );
};
