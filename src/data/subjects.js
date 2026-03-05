const subjects = [
  {
    code: "IT101",
    title: "Introduction to IT",
    units: 3,
    semester: "Semester",
    program: "BSIT",
    prerequisites: "None",
    corequisites: "None",
    description: "Basic introduction to IT systems."
  },
  {
    code: "IT201",
    title: "Database Systems",
    units: 3,
    semester: "Term",
    program: "BSIT",
    prerequisites: "IT101",
    corequisites: "None",
    description: "Introduction to databases."
  },
  {
    code: "CS101",
    title: "Programming Fundamentals",
    units: 3,
    semester: "Both",
    program: "BSCS",
    prerequisites: "None",
    corequisites: "None",
    description: "Learn programming basics."
  }
];

export default subjects;