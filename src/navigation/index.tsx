import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import CourseListScreen from "~/screens/CourseListScreen";
import DayListScreen from "~/screens/DayListScreen";
import HomeScreen from "~/screens/HomeScreen";
import ScheduleScreen from "~/screens/ScheduleScreen";
 
export type RootStackParamList = {
  Home: undefined;
  CourseList: { shiftName: string };
  Schedule: { shiftName: string; courseName: string };
  DayList: { shiftName: string; courseName: string; semesterNumber: number };
  ClassList: { shiftName: string; courseName: string; semesterNumber: number; dayName: string };

};

const Stack = createNativeStackNavigator<RootStackParamList>();

export type HomeNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
export type CourseListNavProp = NativeStackNavigationProp<RootStackParamList, 'CourseList'>;
export type SheduleNavProp = NativeStackNavigationProp<RootStackParamList, 'Schedule'>;
export type DayListNavProp = NativeStackNavigationProp<RootStackParamList, 'DayList'>;
export type ClassListNavProp = NativeStackNavigationProp<RootStackParamList, 'ClassList'>;


export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CourseList" component={CourseListScreen} />
        <Stack.Screen name="Schedule" component={ScheduleScreen} />
        <Stack.Screen name="DayList" component={DayListScreen} />
        {/* <Stack.Screen name="ClassList" component={ClassListScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}