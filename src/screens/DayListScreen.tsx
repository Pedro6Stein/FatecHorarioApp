import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    useRoute,
    useNavigation,
    RouteProp
} from "@react-navigation/native";
import { getDays } from "~/services/gradeService";
import type { Day } from "~/types";
import { HeaderAnimated } from "~/components/HeaderAnimated";
import { OptionList } from "~/components/OptionList";
import { DayListNavProp, RootStackParamList } from "~/navigation";


type DayListRouteProp = RouteProp<
    RootStackParamList,
    "DayList"
>;

export default function DayListScreen() {

    const route = useRoute<DayListRouteProp>();
    const { shiftName, courseName, semesterNumber } = route.params;

    const days: Day[] = getDays(shiftName, courseName, semesterNumber);

    const nav = useNavigation<DayListNavProp>();

    const options = days.map((d) => ({
        key: d.day,
        label: d.day,
        onPress: () =>
            nav.navigate("ClassList", {
                shiftName,
                courseName,
                semesterNumber,
                dayName: d.day,
            }),
    }));

    return (
        <SafeAreaView className="flex-1 bg-blue-800">
            <HeaderAnimated
                title={`Semestre ${semesterNumber}`}
                subtitle="Selecione o dia"
            />
            <OptionList options={options} />
        </SafeAreaView>
    );
}