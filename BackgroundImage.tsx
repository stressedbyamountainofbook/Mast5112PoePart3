import React from 'react';
import { ImageBackground, View, StyleSheet, Text, ViewStyle, ImageStyle } from 'react-native';


interface BackgroundImageProps {
  source: any;            
  children: React.ReactNode; 
  style?: ViewStyle;       
  imageStyle?: ImageStyle; 
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
      style={[styles.imageBackground, style]} 
      imageStyle={imageStyle} >
      {children}
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',       },
});

export default BackgroundImage;
