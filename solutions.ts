const filterEvenNumbers = (arr: number[]) => {
  const result = arr.filter((num) => num % 2 == 0);
  console.log(result);
};

const reverseString = (input: string) => {
  const reversed: string = input.split("").reverse().join("");
  console.log(`"${reversed}";`);
};

const checkType = (input: number | string) => {
  if (typeof input === "number") {
    console.log(`"Number";`);
  } else if (typeof input === "string") {
    console.log(`"String";`);
  }
};

// task 4
const getProperty = <T, K extends keyof T>(obj: T, key: K): void => {
  const result = obj[key];
  console.log(result);
};

// task: 5
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book): Book & { isRead: boolean } => {
  //   return { ...book, isRead: true };
  const result = { ...book, isRead: true };
  console.log(result);
  return result;
};

// tak: 6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    console.log(
      `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}";`,
    );
  }
}

// Task: 7

function getIntersection(arr1: number[], arr2: number[]): void {
  const result = arr1.filter((num) => arr2.includes(num));
  console.log(result);
}
