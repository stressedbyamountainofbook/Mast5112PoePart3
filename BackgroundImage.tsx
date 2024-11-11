import React from 'react';
import { ImageBackground, View, StyleSheet, Text, ViewStyle, ImageStyle } from 'react-native';

// Define types for the props
interface BackgroundImageProps {
  source: any;             // The image source (local or remote)
  children: React.ReactNode; // Content to be displayed on top of the background image
  style?: ViewStyle;       // Optional style for the container
  imageStyle?: ImageStyle; // Optional style for the background image itself
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({
  source,
  children,
  style,
  imageStyle,
}) => {
  return (
    <ImageBackground
      source={source}
      style={[styles.imageBackground, style]} // Apply custom styles if provided
      imageStyle={imageStyle} // Apply image-specific styles
    >
      {children}
    </ImageBackground>
  );
};

// Default styles
const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',  // Center the content
    alignItems: 'center',      // Align items in the center horizontally
  },
});

export default BackgroundImage;
