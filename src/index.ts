interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "Jay",
  age: 30,
  gender: "male"
};

const sayHi = (person: Human): string => {
  return `Hi, I'm ${person.name}. My age is ${person.age} and gender is ${
    person.gender
  }`;
};

console.log(sayHi(person));
