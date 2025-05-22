import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { getCourses } from "~/services/gradeService";
import type { Course } from "~/types";

import { HeaderAnimated } from "~/components/HeaderAnimated";
import { OptionList } from "~/components/OptionList";

export default function CourseListScreen() {

  const { shiftName } = useRoute().params as { shiftName: string };

  const courses: Course[] = getCourses(shiftName);

  const nav = useNavigation<any>();

  const options = courses.map((course) => ({
    key: course.name,
    label: course.name,
    onPress: () =>
      nav.navigate("Schedule", {
        shiftName,
        courseName: course.name,
      }),
  }));

  return (
    <SafeAreaView className="flex-1 bg-blue-800">

      <HeaderAnimated title="Turno:" subtitle={shiftName} />

      <OptionList options={options} />
    </SafeAreaView>
  );
}
