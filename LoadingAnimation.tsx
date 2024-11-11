import React, { useState } from 'react';
import { View, StyleSheet, Text, Dimensions, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';

const { width, height } = Dimensions.get('window');


const petalSize = 50;
const centerX = width / 2;
const centerY = height / 2;

const LoadingAnimation = () => {
  const [petalDripAnimation] = useState(new Animated.Value(0)); // For dripping animation
  const [bloomingProgress, setBloomingProgress] = useState(0); // Controls blooming of the flower


  const dripAnim = petalDripAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 40],
  });

  
  React.useEffect(() => {
    const bloomingInterval = setInterval(() => {
      setBloomingProgress((prevProgress) => {
        if (prevProgress < 1) {
          return prevProgress + 0.07; 
        }
        clearInterval(bloomingInterval);
        return 1;
      });
    }, 200);

    return () => clearInterval(bloomingInterval);
  }, []);

  return (
    <View style={styles.container}>
     
      <View style={styles.flowerContainer}>
       
        <View style={styles.centerCircle} />

        
        {Array.from({ length: 8 }).map((_, index) => {
          const angle = (index * 360) / 8;
          const petalRotation = bloomingProgress * 360;
          const petalStyle = {
            transform: [
              { rotate: `${petalRotation + angle}deg` }, 
              { translateX: petalSize }, 
            ],
          };

          return (
            <Animatable.View
              key={index}
              animation="bounceIn"
              iterationCount="infinite"
              direction="alternate"
              style={[styles.petal, petalStyle]}
            >
           
              <View style={styles.petalShape} />

             
              {angle === 180 && (
                <Animated.View
                  style={[
                    styles.droplet,
                    {
                      transform: [{ translateY: dripAnim }], // Drip effect
                    },
                  ]}
                />
              )}
            </Animatable.View>
          );
        })}
      </View>

      
      <Text style={styles.loadingText}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  flowerContainer: {
    position: 'relative',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'yellow',
    position: 'absolute',
    zIndex: 10,
  },
  petal: {
    position: 'absolute',
    width: petalSize,
    height: petalSize,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    borderRadius: petalSize / 2,
    opacity: 1,
  },
  petalShape: {
    width: petalSize,
    height: petalSize,
    backgroundColor: 'pink',
    borderRadius: petalSize / 2,
  },
  droplet: {
    width: 10,
    height: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    position: 'absolute',
    top: 40, 
  },
  loadingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#000',
  },
});

export default LoadingAnimation;
