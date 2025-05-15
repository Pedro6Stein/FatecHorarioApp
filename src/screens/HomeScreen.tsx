import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-red-200">
      <View className="flex-1 items-center justify-center">
        <Text className="text-2xl text-blue-600">Teste</Text>
      </View>
    </SafeAreaView>
  );
}
