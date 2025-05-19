import { getCourses } from "~/services/gradeService";
import { useRoute, useNavigation } from "@react-navigation/native";
import { View, FlatList, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import type { Course } from "~/types";



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