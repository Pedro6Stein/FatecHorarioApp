import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CourseListScreen from "~/screens/CourseListScreen";
import HomeScreen from "~/screens/HomeScreen";
import ScheduleScreen from "~/screens/ScheduleScreen";
 
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CourseList" component={CourseListScreen} />
         <Stack.Screen name="Schedule"  component={ScheduleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}