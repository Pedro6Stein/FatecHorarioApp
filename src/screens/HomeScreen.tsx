import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getShifts } from "~/services/gradeService";

export default function HomeScreen() {
  const shifts = getShifts();
  const nav = useNavigation<any>();

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <FlatList
        data={shifts}
        keyExtractor={(item) => item.name}
        // ➊ cabeçalho antes da lista
        ListHeaderComponent={() => (
          <View className="px-4 py-6">
            <Text className="text-2xl font-bold text-gray-800">
              Bem-vindo ao Fatec Horário!
            </Text>
            <Text className="mt-1 text-gray-600">
              Selecione seu turno para ver os cursos disponíveis.
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="p-4 m-2 bg-white rounded shadow"
            onPress={() =>
              nav.navigate("CourseList", { shiftName: item.name })
            }
          >
            <Text className="text-lg font-semibold text-gray-800">
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}
