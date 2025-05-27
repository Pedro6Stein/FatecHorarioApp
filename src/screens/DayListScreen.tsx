import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { getDays } from "~/services/gradeService";
import type { Day } from "~/types";

import { HeaderAnimated } from "~/components/HeaderAnimated";
import { OptionList } from "~/components/OptionList";

export default function DayListScreen() {
    const {shiftName, courseName, semesterNumber} = useRoute().params as {
        shiftName:string;
        courseName: string;
        semesterNumber: number; 
    };
    const nav = useNavigation <any>(); 
}