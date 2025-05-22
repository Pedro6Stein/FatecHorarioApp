import { getCourses } from "~/services/gradeService";
import { useRoute, useNavigation } from "@react-navigation/native";
import { View, FlatList, TouchableOpacity, Text, Animated, Easing } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { Course } from "~/types";
import { useEffect, useRef } from "react";


function WelcomeHeader() {
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
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1200,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();
  }, [scale, opacity]);

  return (
    <View className="h-[60%] justify-center items-center px-6">
      <Animated.View
        style={{ transform: [{ scale }], opacity }}
      >
        <Text className="text-5xl font-bold text-white text-center">
          Seu turno é
        </Text>
        <Text className="text-6xl font-bold text-white text-center">
          Noturno
        </Text>
      </Animated.View>
    </View>
  );
}

export default function CourseListScreen() {
  const { shiftName } = useRoute().params as { shiftName: string };
  const courses: Course[] = getCourses(shiftName);
  const nav = useNavigation<any>();
  return (
    <SafeAreaView className="flex-1 bg-blue-800">
      <View className="h-[15%] justify-center items-center px-6">
        <Text className="text-3xl font-bold text-white text-center">
          {shiftName}
        </Text>
      </View>
      <View className="h-[85%] px-4">
        <FlatList
          data={courses}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="py-3 mb-4 bg-white/30 rounded-lg"
              onPress={() =>
                nav.navigate("Schedule", {
                  shiftName,
                  courseName: item.name,
                })
              }
            >
              <Text className="text-center text-lg font-semibold text-white">
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}