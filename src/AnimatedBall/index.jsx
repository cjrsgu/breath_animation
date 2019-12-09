import React, { useState, useEffect } from 'react';
import { Animated } from 'react-native';

import styles from './styles';

const App = ({children, inputRange, outputRange, duration, style}) => {
  const [sizeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(
      sizeAnim,
      {
        toValue: 1,
        duration,
      },
    ).start();
  }, []);

  return (
    <Animated.View
      style={{
        ...style,
        ...styles.mainBall,
        height: sizeAnim.interpolate({
          inputRange,
          outputRange,
        }),
        width: sizeAnim.interpolate({
          inputRange,
          outputRange,
        }),
      }}
    >
      {children}
    </Animated.View>
  );
};
App.defaultProps = {
  style: { backgroundColor: 'white' },
  children: null,
}
export default App;
