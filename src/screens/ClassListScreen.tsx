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
        <HeaderAnimated
          title={dayName}
          subtitle={`Semestre ${semesterNumber}`}
        />

        <FlatList
          data={classes}
          keyExtractor={(item) => `${item.time}-${item.subject}`}

          contentContainerStyle={{ padding: 16 }}
          renderItem={({ item }) => (
            <View className="bg-white/20 rounded-2xl p-4 mb-4">
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
        />
      </SafeAreaView>
  
  );
}
