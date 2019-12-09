import React, { useEffect, useState } from 'react';
import { View, Image, Animated } from 'react-native';

import styles from './styles';
import AnimatedBall from './AnimatedBall';

const App = () => {
  const [rotation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(
      rotation,
      {
        toValue: 1,
        duration: 10000,
      },
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'asset:/images/cloud.jpg',
        }}
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          flex: 1,
          height: 500,
          width: 500,
        }}
      />
      <AnimatedBall
        style={{
          position: 'absolute',
          opacity: 0.5,
          backgroundColor: 'green',
          rotation: rotation.interpolate({
            inputRange: [0, 0.7, 1],
            outputRange: [0, 15, 10],
          }),
        }}
        duration={10000}
        inputRange={[0, 0.7, 1]}
        outputRange={[50, 80, 100]}
      >
        <AnimatedBall
          duration={10000}
          inputRange={[0, 0.7, 1]}
          outputRange={[60, 100, 130]}
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            opacity: 0.5,
            left: 0,
            top: -7,
          }}
        />
        <AnimatedBall
          duration={10000}
          inputRange={[0, 0.7, 1]}
          outputRange={[70, 100, 120]}
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            opacity: 0.5,
            left: -20,
            top: -15,
          }}
        />
        <AnimatedBall
          duration={10000}
          inputRange={[0, 0.7, 1]}
          outputRange={[60, 80, 110]}
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            opacity: 0.5,
            left: 0,
            top: -20,
          }}
        />
        <AnimatedBall
          duration={10000}
          inputRange={[0, 0.7, 1]}
          outputRange={[50, 80, 100]}
          style={{
            backgroundColor: 'white',
            position: 'absolute',
            opacity: 0.5,
            left: -15,
            top: 20,
          }}
        />
        <AnimatedBall
          duration={10000}
          inputRange={[0, 0.7, 1]}
          outputRange={[0, 10, 0]}
          style={{
            backgroundColor: 'white',
            position: 'relative',
            opacity: 0.5,
            left: -60,
            top: 20,
          }}
        />
        <AnimatedBall
          duration={10000}
          inputRange={[0, 0.7, 1]}
          outputRange={[0, 12, 0]}
          style={{
            backgroundColor: 'white',
            position: 'relative',
            opacity: 0.5,
            left: 80,
            top: -40,
          }}
        />
        <AnimatedBall
          duration={10000}
          inputRange={[0, 0.7, 1]}
          outputRange={[0, 12, 0]}
          style={{
            backgroundColor: 'white',
            position: 'relative',
            opacity: 0.5,
            left: 20,
            top: -60,
          }}
        />
      </AnimatedBall>
      <AnimatedBall
        style={{
          overflow: 'hidden',
          position: 'absolute',
          opacity: 1,
          backgroundColor: 'green',
        }}
        duration={10000}
        inputRange={[0, 0.7, 1]}
        outputRange={[50, 80, 100]}
      >
        <Image
          source={{
            uri: 'asset:/images/cloud.jpg',
          }}
          style={{
            position: 'absolute',
            left: -149,
            top: -310,
            flex: 1,
            height: 500,
            width: 500,
          }}
        />
      </AnimatedBall>
    </View>
  );
};


export default App;
