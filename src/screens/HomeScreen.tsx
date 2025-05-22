import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { getShifts } from "~/services/gradeService";
import { OptionList } from "~/components/OptionList";
import { HeaderAnimated } from "~/components/HeaderAnimated";

export default function HomeScreen() {
  const shifts = getShifts();
  const nav = useNavigation<any>();

  const options = shifts.map((s) => ({
    key: s.name,
    label: s.name,
    onPress: () => nav.navigate("CourseList", { shiftName: s.name }),
  }));

  return (
    <SafeAreaView className="flex-1 bg-blue-800">
      <HeaderAnimated title="Seu horário Fatec!" subtitle="Selecione seu turno" />
      <OptionList options={options} />
    </SafeAreaView>
  );
}