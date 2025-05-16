import React, { useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Animated, Easing } from "react-native";
import { BlurView } from "expo-blur";
import { useNavigation } from "@react-navigation/native";
import { getShifts,  } from "~/services/gradeService";
import { Shift } from "~/types";

// Componente para animação e exibição do cabeçalho de boas-vindas
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
          Bem-vindo ao
        </Text>
        <Text className="text-6xl font-bold text-white text-center">
          Horário Fatec
        </Text>
      </Animated.View>
    </View>
  );
}

// Componente para listar opções de turnos com efeito de blur
function ShiftOptions({ shifts }: { shifts: Shift[] }) {
  const navigation = useNavigation<any>();

  return (
    <View className="absolute inset-x-0 top-[50%] px-6">
      <BlurView intensity={70} tint="dark" className="rounded-2xl overflow-hidden flex-2">
        <View className="p-6">
          {shifts.map((shift) => (
            <TouchableOpacity
              key={shift.name}
              className="py-3 mb-4 bg-white/30 rounded-lg"
              onPress={() => navigation.navigate("CourseList", { shiftName: shift.name })}
            >
              <Text className="text-center text-lg font-semibold text-white">
                {shift.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </BlurView>
    </View>
  );
}

export default function HomeScreen() {
  const shifts = getShifts();

  return (
    <SafeAreaView className="flex-1 bg-blue-800">
      <WelcomeHeader />
      <ShiftOptions shifts={shifts} />
    </SafeAreaView>
  );
}