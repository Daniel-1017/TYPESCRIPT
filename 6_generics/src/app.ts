// const names: Array<string> /*generic type*/ = [];

// const promise: Promise<string> /*generic type*/ = new Promise(
//   (resolve, reject) => {
//     setTimeout(() => {
//       resolve("This is done!");
//     }, 2000);
//   }
// );

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: "max" }, { age: 30 });

interface Lengthy {
  length: number;
}

function countAndDescrive<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";

  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }

  return [element, descriptionText];
}

console.log(countAndDescrive("Hi there!")); // behind the scenes js kinda converts this to object on the fly, you could say

function extractAndConver<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value: " + obj[key];
}

extractAndConver({ name: "max" }, "name");

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getResult() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("max");
textStorage.addItem("manu");
textStorage.removeItem("max");
console.log(textStorage.getResult());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(30);
numberStorage.removeItem(20);
console.log(numberStorage.getResult());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoals: Partial<CourseGoal> = {};

  courseGoals.title = title;
  courseGoals.description = description;
  courseGoals.completeUntil = date;

  return courseGoals as CourseGoal;
}

const names: Readonly<string[]> = ["max", "anna"];
// names.push("manu"); Property 'push' does not exist on type 'readonly string[]'
