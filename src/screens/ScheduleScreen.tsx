import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";

import { getSemesters } from "~/services/gradeService";
import type { Semester } from "~/types";

import { HeaderAnimated } from "~/components/HeaderAnimated";
import { OptionList } from "~/components/OptionList";

export default function SchedulesScreeen() {

  const { shiftName, courseName } = useRoute().params as {
    shiftName: string;
    courseName: string;
  };

  const nav = useNavigation<any>();
  const sems: Semester[] = getSemesters(shiftName, courseName);

  const options = sems.map((sem) => ({
    key: String(sem.number),
    label: `Semestre ${sem.number}`,
    onPress: () =>
      nav.navigate("DayList", {
        shiftName,
        courseName,
        semesterNumber: sem.number,
      }),
  }));

  return (
    <SafeAreaView className="flex-1 bg-blue-800">
      <HeaderAnimated
        title={courseName}
        subtitle="Selecione o semestre"
      />
      <OptionList options={options} />
    </SafeAreaView>
  );

};
