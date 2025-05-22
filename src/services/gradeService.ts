import raw from "~/data/data.json";
import type { GradeData, Shift, Course, Semester, Day } from "~/types";

const gradeData: GradeData = raw as GradeData;

export function getShifts(): Shift[] {
  return gradeData.shifts;
}

export function getCourses(shiftName: string): Course[] {
  const shift = gradeData.shifts.find((s: Shift) => s.name === shiftName);
  return shift?.courses ?? [];
}

export function getSemesters(
  shiftName: string,
  coursesName: string,
): Semester[] {
  const shift = gradeData.shifts.find((s) => s.name === shiftName);
  const course = shift?.courses.find((c) => c.name === coursesName);
  return course?.semesters ?? [];
}

export function getDays(
  shiftName: string,
  courseName: string,
  semesterNumber: number
): Day[] {
  const semesters = getSemesters(shiftName, courseName);
  const semester = semesters.find((sem) => sem.number === semesterNumber);
  return semester?.days ?? [];
}