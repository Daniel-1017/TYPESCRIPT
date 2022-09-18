// intersections types
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // intersection type

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // intersection type

// type guards
type UnknownEmployee = Employee | Admin;

const pringEmployeeInformation = (emp: UnknownEmployee) => {
  console.log("Name: " + emp.name);

  if ("privileges" in emp) {
    // type guard
    console.log("Privileges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    // type guard
    console.log("Start date: " + emp.startDate);
  }
};

pringEmployeeInformation(e1);

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo: " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  console.log(vehicle.drive());
  if (vehicle instanceof Truck) {
    // type guard
    console.log(vehicle.loadCargo(1000));
  }
};

useVehicle(v1);
useVehicle(v2);

// function overloads
function add(a: number, b: number): number; // overloads
function add(a: string, b: string): string; // overloads
function add(a: Combinable, b: Combinable) {
  /* type guard */ if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add("Max", " Schwarz");
result.split(" ");

// discriminated unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const moveAnimal = (animal: Animal) => {
  let speed;

  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving at speed: " + speed);
};

moveAnimal({ type: "bird", flyingSpeed: 10 });

// type casting
const userInputElement1 = <HTMLInputElement>(
  document.getElementById("user-input")!
);
const userInputElement2 = document.getElementById(
  "user-input"
)! as HTMLInputElement;

// index properties
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid E-mail.",
  username: "Must start with a capital letter.",
};

// optional chaining
const fetchUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchUserData?.job?.title);

// nullish coalescing
const userInput = undefined;

const storedData = userInput ?? "DEFAULT";

console.log(storedData);
