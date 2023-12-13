const data = [
  {
    indentity: {
      name: "Atila",
      lastName: "Feyzi",
      city: "Istanbull",
      age: 32,
    },
  },
  { skills: ["js", "react.js", "next.js"] },
];

const [indentity, skills] = data;

const {
  indentity: { age, city, name, lastName },
} = indentity;

const {
  skills: [js, react, next],
} = skills;

console.log(age, city, name, lastName);
console.log(js, react, next);
