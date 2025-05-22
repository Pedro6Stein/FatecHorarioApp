import React, { useRef, useEffect } from "react";
import { View, Animated, Easing, Text } from "react-native";
type HeaderAnimatedProps = {
    title: string;
    subtitle: string;
}; 

export function HeadAnimated({title, subtitle}: HeaderAnimatedProps) {
  const scale = useRef(new Animated.Value(0.8)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
        Animated.timing(scale, {
            toValue: 1,
            duration: 1200,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
        }),
           Animated.timing(scale, {
            toValue: 1,
            duration: 1200,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
        }),
    ]).start()
  },[scale, opacity])

  return (
    <View className="h-[60%] justify-center items-center px-6">
      <Animated.View style={{ transform: [{ scale }], opacity }}>
        <Text className="text-5xl font-bold text-white text-center">
          {title}
        </Text>
        <Text className="text-6xl font-bold text-white text-center mt-2">
          {subtitle}
        </Text>
      </Animated.View>
    </View>
  );
}