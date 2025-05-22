import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { BlurView } from "expo-blur";

type OptionListProps = {
  options: { key: string; label: string; onPress: () => void }[];
};

export function OptionList({ options }: OptionListProps) {
  return (
    <View className="absolute inset-x-0 top-[50%] px-6">
      <BlurView intensity={70} tint="dark" className="rounded-2xl overflow-hidden">
        <View className="p-6">
          {options.map((opt) => (
            <TouchableOpacity
              key={opt.key}
              className="py-3 mb-4 bg-white/30 rounded-lg"
              onPress={opt.onPress}
            >
              <Text className="text-center text-lg font-semibold text-white">
                {opt.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </BlurView>
    </View>
  );
}