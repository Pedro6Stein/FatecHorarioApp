export interface ClassItem {
  time: string
  subject: string
  professor: string
  location: string
}

export interface Day {
  day: string
  classes: ClassItem[]
}

export interface Semester {
  number: number
  days: Day[]
}

export interface Course {
  name: string
  semesters: Semester[]
}

export interface Shift {
  name: string
  courses: Course[]
}

export interface GradeData {
  shifts: Shift[]
}