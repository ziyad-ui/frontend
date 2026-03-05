const programs = [
  {
    code: "BSIT",
    name: "Bachelor of Science in Information Technology",
    type: "Bachelor",
    duration: "4 Years",
    totalUnits: 140,
    status: "Active",
    description: "Focuses on software, networking, and databases.",
    years: {
      "1st Year": ["IT101", "IT102"],
      "2nd Year": ["IT201", "IT202"],
      "3rd Year": ["IT301", "IT302"],
      "4th Year": ["IT401", "IT402"]
    }
  },
  {
    code: "BSCS",
    name: "Bachelor of Science in Computer Science",
    type: "Bachelor",
    duration: "4 Years",
    totalUnits: 142,
    status: "Active",
    description: "Focuses on algorithms and software development.",
    years: {
      "1st Year": ["CS101", "CS102"],
      "2nd Year": ["CS201"],
      "3rd Year": ["CS301"],
      "4th Year": ["CS401"]
    }
  }
];

export default programs;