import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { FlatList, View, Text } from "react-native";
import { getClasses } from "~/services/gradeService";
import { HeaderAnimated } from "~/components/HeaderAnimated";
import type { ClassItem } from "~/types";
import type { RouteProp } from "@react-navigation/native";
import type { RootStackParamList } from "~/navigation";

type ClassListRouteProp = RouteProp<RootStackParamList, "ClassList">;

export default function ClassListScreen() {
  const route = useRoute<ClassListRouteProp>();
  const { shiftName, courseName, semesterNumber, dayName } = route.params;

  const classes: ClassItem[] = getClasses(
    shiftName,
    courseName,
    semesterNumber,
    dayName
  );

  return (
    <SafeAreaView className="flex-1 bg-blue-800">

      <View className="absolute top-0 inset-x-0 h-[60%] z-10">
        <HeaderAnimated
          title={dayName}
          subtitle={`Semestre ${semesterNumber}`}
        />
      </View>

      {/* Container principal com flex e centralização */}
      <View className="flex-1 justify-center">
        <FlatList
          data={classes}
          keyExtractor={(item) => `${item.time}-${item.subject}`}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingVertical: 8,
            flexGrow: 1,
            justifyContent: 'center'
          }}
          renderItem={({ item }) => (
            <View className="bg-white/20 rounded-2xl p-4 mb-4 mx-4">
              <Text className="text-lg font-semibold text-white">
                {item.time}
              </Text>
              <Text className="text-2xl font-bold text-white mt-1">
                {item.subject}
              </Text>
              <Text className="text-base text-white mt-1">
                Prof. {item.professor}
              </Text>
              <Text className="text-sm text-white mt-1">
                {item.location}
              </Text>
            </View>
          )}
          ListEmptyComponent={
            <View className="flex-1 justify-center items-center">
              <Text className="text-white text-lg">Nenhuma aula encontrada</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}