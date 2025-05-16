import raw from "~/data/data.json";
import type { GradeData, Shift, Course } from "~/types";

const gradeData: GradeData = raw as GradeData;

export function getShifts(): Shift[] {
  return gradeData.shifts;
}

export function getCourses(shiftName: string): Course[] {
  const shift = gradeData.shifts.find((s: Shift) => s.name === shiftName);
  return shift?.courses ?? [];
}